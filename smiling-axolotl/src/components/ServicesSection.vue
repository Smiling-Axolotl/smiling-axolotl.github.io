<template>
  <section class="services-section">
    <div class="services-container">
      <h2 class="services-title">Our <span>Services</span></h2>
      <div class="services-tabs">
        <button
          class="tab-btn"
          :class="{ active: serviceTab === 'devs' }"
          @click="setServiceTab('devs')"
        >
          For Developers
        </button>
        <button
          class="tab-btn"
          :class="{ active: serviceTab === 'brands' }"
          @click="setServiceTab('brands')"
        >
          For Brands
        </button>
      </div>

      <transition name="services-switch" mode="out-in" @after-enter="onServicesTabEnter">
        <div class="services-grid" :key="serviceTab">
          <div class="service-card-v2" v-for="(svc, i) in displayedServices" :key="i">
            <div class="media" aria-hidden="true"></div>
            <div class="service-card-body">
              <h3 class="service-title" v-html="svc.title"></h3>
              <p class="service-desc">{{ svc.desc }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      serviceTab: 'devs',
      serviceCardEls: [],
      physState: null,
      inertiaRaf: null,
      lastScrollY: 0,
      lastTime: 0,
      servicesBrands: [
        {
          title: 'IMMERSIVE<br>CONCERTS',
          desc: 'Bring your artists and fans together inside interactive 3D worlds',
        },
        {
          title: 'CUSTOM<br>EXPERIENCES',
          desc: 'Tailor-made worlds designed around your brand\'s vision',
        },
        {
          title: 'INTEGRATION &<br>ACTIVATIONS',
          desc: 'Seamlessly connect your brand with in-game events and systems',
        },
        {
          title: 'DIGITAL<br>APPAREL',
          desc: 'Branded outfits and collectibles that players actually wear',
        },
      ],
      servicesDevs: [
        {
          title: 'LIVEOPS &<br>MONETIZATION',
          desc: 'Events, economy design, and systems that scale engagement',
        },
        {
          title: 'WORLD‑CLASS<br>ART & AUDIO',
          desc: 'Stylized art direction, characters, VFX, and sound design',
        },
        {
          title: 'ENGINEERING<br>SUPPORT',
          desc: 'Gameplay, systems, and backend expertise on Roblox',
        },
        {
          title: 'GO‑TO‑MARKET<br>GROWTH',
          desc: 'Community, creators, and UA strategies that perform',
        },
      ]
    }
  },
  computed: {
    displayedServices() {
      return this.serviceTab === 'brands' ? this.servicesBrands : this.servicesDevs;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.lastScrollY = window.scrollY || 0;
      this.lastTime = performance.now();
      this.collectServiceCardRefs();
      window.addEventListener('scroll', this.onServiceScroll, { passive: true });
      window.addEventListener('resize', this.onServiceResize, { passive: true });
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onServiceScroll);
    window.removeEventListener('resize', this.onServiceResize);
    if (this.inertiaRaf) cancelAnimationFrame(this.inertiaRaf);
  },
  methods: {
    setServiceTab(tab) {
      this.serviceTab = tab;
    },
    // Services cards physics-based inertial swing
    collectServiceCardRefs() {
      this.serviceCardEls = Array.from(document.querySelectorAll('.services-grid .service-card-v2'));
      if (!this.physState) this.physState = new Map();
      const current = new Set(this.serviceCardEls);
      // prune removed elements
      Array.from(this.physState.keys()).forEach(el => {
        if (!current.has(el)) this.physState.delete(el);
      });
      // add new elements
      this.serviceCardEls.forEach((el, i) => {
        if (!this.physState.has(el)) {
          this.physState.set(el, { angle: 0, velocity: 0, mass: 1 + ((i % 3) * 0.15) });
        }
      });
    },
    onServicesTabEnter() {
      this.collectServiceCardRefs();
      // ensure transforms are applied to fresh elements
      this.startInertia();
    },
    onServiceScroll() {
      const now = performance.now();
      const y = window.scrollY || 0;
      const dy = y - this.lastScrollY;
      const dt = Math.max(1, now - this.lastTime);
      this.lastScrollY = y;
      this.lastTime = now;
      // Convert scroll delta into an angular velocity impulse
      const sensitivity = 0.03; // deg per px
      const impulse = dy * sensitivity;
      this.applyImpulse(impulse);
      this.startInertia();
    },
    onServiceResize() {
      this.collectServiceCardRefs();
    },
    applyImpulse(impulse) {
      if (!this.physState) return;
      this.physState.forEach((state, el) => {
        const invMass = 1 / (state.mass || 1);
        state.velocity += impulse * invMass;
      });
    },
    startInertia() {
      if (this.inertiaRaf) return;
      const tick = (t) => {
        this.inertiaRaf = requestAnimationFrame(tick);
        this.tickInertia();
      };
      this.inertiaRaf = requestAnimationFrame(tick);
    },
    stopInertia() {
      if (this.inertiaRaf) {
        cancelAnimationFrame(this.inertiaRaf);
        this.inertiaRaf = null;
      }
    },
    tickInertia() {
      if (!this.physState || this.physState.size === 0) return this.stopInertia();
      const dt = 1 / 60; // simulate at ~60Hz
      const stiffness = 8.5; // spring toward 0 angle
      const friction = 3.2;  // velocity damping
      const maxAngle = 6;    // degrees
      let allRest = true;
      this.physState.forEach((s, el) => {
        // spring force toward zero
        const a = (-stiffness * s.angle) - (friction * s.velocity);
        s.velocity += a * dt;
        s.angle += s.velocity * dt;
        // clamp
        if (s.angle > maxAngle) { s.angle = maxAngle; s.velocity *= -0.25; }
        if (s.angle < -maxAngle) { s.angle = -maxAngle; s.velocity *= -0.25; }
        // apply transform
        el.style.transform = `rotate(${s.angle}deg)`;
        if (Math.abs(s.angle) > 0.01 || Math.abs(s.velocity) > 0.01) allRest = false;
      });
      if (allRest) this.stopInertia();
    }
  }
}
</script>

<style scoped>
/* Component-specific overrides can go here if needed */
</style>

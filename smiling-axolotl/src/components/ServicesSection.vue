<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <h2 class="services-title">
        <i18n-t keypath="ourServices.title" tag="span">
          <template #services>
            <span>{{ $t('ourServices.services') }}</span>
          </template>
        </i18n-t>
      </h2>
      <div class="services-tabs">
        <button
          class="tab-btn"
          :class="{ active: serviceTab === 'brands' }"
          @click="setServiceTab('brands')"
          aria-label="Brands Services Tab"
        >
          {{ $t('ourServices.tabs.brands') }}
        </button>
        <button
          class="tab-btn"
          :class="{ active: serviceTab === 'devs' }"
          @click="setServiceTab('devs')"
          aria-label="Developers Services Tab"
        >
          {{ $t('ourServices.tabs.developers') }}
        </button>
      </div>

      <transition name="services-switch" mode="out-in" @after-enter="onServicesTabEnter">
        <div class="services-grid" :key="serviceTab">
          <div class="service-card-v2" v-for="(svc, i) in displayedServices" :key="i">
            <div class="media" aria-hidden="true">
              <img :src="svc.image" :alt="$t(svc.titleKey)" fetchpriority="low" />
            </div>
            <div class="service-card-body">
              <h3 class="service-title" v-html="$t(svc.titleKey)"></h3>
              <p class="service-desc">{{ $t(svc.descKey) }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>

import ConcertBanner from '../assets/services/ConcertBanner.png';
import IntegrationBanner from '../assets/services/IntegrationBanner.png';
import ManagmentBanner from '../assets/services/ManagmentBanner.png';
import StatsBanner from '../assets/services/StatsBanner.png';
import BrandBanner from '../assets/services/BrandBanner.png';
import DevBanner from '../assets/services/DevBanner.png';
import BrandedBanner from '../assets/services/BrandedBanner.png';
import UGCBanner from '../assets/services/UGCBanner.png';

export default {
  name: 'ServicesSection',
  data() {
    return {
      serviceTab: 'brands',
      serviceCardEls: [],
      physState: null,
      inertiaRaf: null,
      lastScrollY: 0,
      lastTime: 0,
      servicesBrands: [
        {
          titleKey: 'ourServices.brands.concerts.title',
          descKey: 'ourServices.brands.concerts.desc',
          image: ConcertBanner,
        },
        {
          titleKey: 'ourServices.brands.experiences.title',
          descKey: 'ourServices.brands.experiences.desc',
          image: BrandedBanner,
        },
        {
          titleKey: 'ourServices.brands.integration.title',
          descKey: 'ourServices.brands.integration.desc',
          image: IntegrationBanner,
        },
        {
          titleKey: 'ourServices.brands.apparel.title',
          descKey: 'ourServices.brands.apparel.desc',
          image: UGCBanner,
        },
      ],
      servicesDevs: [
        {
          titleKey: 'ourServices.devs.liveops.title',
          descKey: 'ourServices.devs.liveops.desc',
          image: ManagmentBanner,
        },
        {
          titleKey: 'ourServices.devs.brands.title',
          descKey: 'ourServices.devs.brands.desc',
          image: BrandBanner,
        },
        {
          titleKey: 'ourServices.devs.engineering.title',
          descKey: 'ourServices.devs.engineering.desc',
          image: DevBanner,
        },
        {
          titleKey: 'ourServices.devs.growth.title',
          descKey: 'ourServices.devs.growth.desc',
          image: StatsBanner,
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
    collectServiceCardRefs() {
      this.serviceCardEls = Array.from(document.querySelectorAll('.services-grid .service-card-v2'));
      if (!this.physState) this.physState = new Map();
      const current = new Set(this.serviceCardEls);
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
      this.startInertia();
    },
    onServiceScroll() {
      const now = performance.now();
      const y = window.scrollY || 0;
      const dy = y - this.lastScrollY;
      const dt = Math.max(1, now - this.lastTime);
      this.lastScrollY = y;
      this.lastTime = now;
      const sensitivity = 0.03;
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
      const dt = 1 / 60; 
      const stiffness = 8.5; 
      const friction = 3.2; 
      const maxAngle = 6;  
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
</style>

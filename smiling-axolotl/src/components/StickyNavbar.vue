<template>
  <div class="navbar-wrapper">
    <div ref="navbar" class="sticky-navbar" :class="{ 'is-sticky': isSticky }">
      <div class="navbar-content">
        <div class="navbar-left">
          <div class="axolotl-logo-svg">
            <img src="../assets/logoAxolotl.svg" alt="Axolotl Face" class="logo-svg" />
          </div>
          <h1 class="logo-text">SMILING<br>AXOLOTL</h1>
        </div>
        <div class="navbar-actions">
          <LanguageToggle />
        </div>
      </div>

      <!-- La curva -->
      <div class="navbar-curve">
        <svg class="curve-svg" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path ref="curvePath" d="M0,0 L1440,0 L1440,50 Q720,0 0,50 Z" fill="#2898ff" />
        </svg>
      </div>
    </div>

    <div class="navbar-spacer" :class="{ 'active': isSticky }"></div>
  </div>
</template>

<!-- Neta que no supe como hacerlo mas smooth AAAA -->
<script>
import LanguageToggle from './LanguageToggle.vue'

export default {
  name: 'StickyNavbar',
  components: {
    LanguageToggle
  },
  data() {
    return {
      isSticky: false,
      scrollY: 0
    }
  },
  mounted() {
    this.initScrollListener();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    initScrollListener() {
      let ticking = false;

      this.handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            this.updateNavbar();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.updateNavbar();
    },

    updateNavbar() {
      this.scrollY = window.scrollY;
      const transitionMaxScroll = 1000;
      const curveMaxScroll = 250;

      const navbarProgress = Math.min(this.scrollY / transitionMaxScroll, 1);
      const navbarEaseProgress = this.easeOutQuart(navbarProgress);

      this.isSticky = this.scrollY > 10;

      if (this.$refs.navbar) {
        const navbar = this.$refs.navbar;

        // Start with smaller height (70px) when curve is complete, grow to 100px when flattened
        const minHeight = 70; // Smaller height when curved
        const maxHeight = 100; // Full height when flat
        const currentHeight = minHeight + (navbarEaseProgress * (maxHeight - minHeight));
        navbar.style.height = `${currentHeight}px`;
      }

      // Handle curve animation smoothly in both directions
      if (this.$refs.curvePath) {
        const scrollProgress = Math.min(this.scrollY / curveMaxScroll, 1);
        const easeProgress = this.easeInOutCubic(scrollProgress);

        const sideHeight = 50 - (easeProgress * 30);
        const curveDepth = 0 + (easeProgress * 35);

        const newPath = `M0,0 L1440,0 L1440,${sideHeight} Q720,${curveDepth} 0,${sideHeight} Z`;
        this.$refs.curvePath.setAttribute('d', newPath);

        // Smoothly control the curve container transform
        const curve = this.$refs.navbar.querySelector('.navbar-curve');
        if (curve) {
          // Animate the transform based on scroll progress with smoother easing
          const transformProgress = Math.min(this.scrollY / 100, 1); // Faster transition for transform
          const transformEaseProgress = this.easeInOutCubic(transformProgress);
          const translateY = 100 - (transformEaseProgress * 20); // From 100% to 80%
          curve.style.transform = `translateY(${translateY}%)`;
        }
      }

      if (this.$refs.navbar) {
        const spacer = document.querySelector('.navbar-spacer');
        if (spacer) {
          // Match the navbar height calculation
          const minHeight = 70;
          const maxHeight = 100;
          const currentHeight = minHeight + (navbarEaseProgress * (maxHeight - minHeight));
          spacer.style.height = this.isSticky ? `${currentHeight}px` : '0px';
        }
      }
    },

    easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    },

    // Smoother easing function for curve animation
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
  }
}
</script>

<style scoped>
.navbar-wrapper {
  position: relative;
  z-index: 1000;
}

.sticky-navbar {
  width: 100%;
  background: #2898ff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px; /* Start with smaller height when curved */
  position: relative;
  z-index: 1000;
}

.sticky-navbar.is-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  z-index: 1002;
  width: 100%;
  padding: 0 2rem;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.axolotl-logo-svg {
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;
}

.logo-svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  font-family: "Rubik Mono One", monospace;
  font-size: 1.3rem;
  color: white;
  text-align: center;
  font-weight: normal;
  line-height: 1.1;
  user-select: none;
}

.navbar-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  overflow: hidden;
  transform: translateY(100%);
  z-index: 1001;
}

.curve-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.navbar-spacer {
  height: 0;
}
</style>

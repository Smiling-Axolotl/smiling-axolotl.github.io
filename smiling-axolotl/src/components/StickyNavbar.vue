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

export default {
  name: 'StickyNavbar',
  components: {
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

      // Skip navbar height animation on mobile
      const isMobile = window.innerWidth <= 768;
      
      if (this.$refs.navbar && !isMobile) {
        const navbar = this.$refs.navbar;

        const minHeight = 70;
        const maxHeight = 100;
        const currentHeight = minHeight + (navbarEaseProgress * (maxHeight - minHeight));
        navbar.style.height = `${currentHeight}px`;
      }

      if (this.$refs.curvePath && !isMobile) {
        const scrollProgress = Math.min(this.scrollY / curveMaxScroll, 1);
        const easeProgress = this.easeInOutCubic(scrollProgress);

        const sideHeight = 50 - (easeProgress * 30);
        const curveDepth = 0 + (easeProgress * 35);

        const newPath = `M0,0 L1440,0 L1440,${sideHeight} Q720,${curveDepth} 0,${sideHeight} Z`;
        this.$refs.curvePath.setAttribute('d', newPath);

        const curve = this.$refs.navbar.querySelector('.navbar-curve');
        if (curve) {
          const transformProgress = Math.min(this.scrollY / 100, 1); 
          const transformEaseProgress = this.easeInOutCubic(transformProgress);
          const translateY = 100 - (transformEaseProgress * 20); 
          curve.style.transform = `translateY(${translateY}%)`;
        }

        // El logo tiene que estar un poco mas abajo cuando esta en la curva para compensar
        const content = this.$refs.navbar.querySelector('.navbar-content');
        if (content) {
          const maxNudge = 12; // px
          const nudge = (1 - easeProgress) * maxNudge; 
          content.style.transform = `translateY(${nudge}px)`;
        }
      }

      if (this.$refs.navbar && !isMobile) {
        const spacer = document.querySelector('.navbar-spacer');
        if (spacer) {
          const minHeight = 70;
          const maxHeight = 100;
          const currentHeight = minHeight + (navbarEaseProgress * (maxHeight - minHeight));
          // Always show spacer since navbar is always fixed
          spacer.style.height = `${currentHeight}px`;
        }
      }
    },

    easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    },

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
  position: fixed; /* Always fixed */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: height 0.3s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 1rem;
  position: relative;
  z-index: 1002;
  width: 100%;
  padding: 0 2rem;
  height: 100%;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
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
  margin: 0; 
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
  pointer-events: none; /* ensure decorative curve never blocks clicks */
}

.curve-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.navbar-spacer {
  height: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .navbar-content {
    padding: 0 1rem;
    transform: translateY(8px); /* Push content down to sit better with curve */
  }

  .axolotl-logo-svg {
    width: 3.5rem;
  }

  .logo-text {
    font-size: 1rem;
    line-height: 1.05;
  }

  .sticky-navbar {
    height: 60px !important;
  }

  .navbar-curve {
    height: 120px; 
  }

  .navbar-spacer {
    height: 60px !important; 
  }
}

@media (max-width: 480px) {
  .navbar-content {
    padding: 0 0.75rem;
  }

  .axolotl-logo-svg {
    width: 3rem;
  }

  .logo-text {
    font-size: 0.85rem;
  }

  .navbar-left {
    gap: 0.5rem;
  }
}
</style>

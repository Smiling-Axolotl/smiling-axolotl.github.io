<template>
  <div class="navbar-wrapper">
    <div ref="navbar" class="sticky-navbar" :class="{ 'is-sticky': isSticky, 'scrolled': isScrolled }">
      <div class="navbar-content" :class="{ 'scrolled': isScrolled }">
        <div class="navbar-left centered-logo" :class="{ 'hidden': isScrolled }">
          <div class="axolotl-logo-svg">
            <img src="../assets/logoAxolotl.svg" alt="Axolotl Face" class="logo-svg" />
          </div>
          <h1 class="logo-text">SMILING<br>AXOLOTL</h1>
        </div>

        <div class="navbar-left left-logo" :class="{ 'visible': isScrolled }">
          <div class="axolotl-logo-svg">
            <img src="../assets/logoAxolotl.svg" alt="Axolotl Face" class="logo-svg" />
          </div>
          <h1 class="logo-text">SMILING<br>AXOLOTL</h1>
        </div>

        <!-- Desktop Navigation -->
        <nav class="navbar-nav" :class="{ 'visible': isScrolled }">
          <a href="#home" class="nav-link">{{ $t('nav.home') }}</a>
          <a href="#about" class="nav-link">{{ $t('nav.about') }}</a>
          <a href="#services" class="nav-link">{{ $t('nav.services') }}</a>
          <a href="#contact" class="nav-link">{{ $t('nav.contact') }}</a>
        </nav>

        <!-- Mobile Hamburger -->
        <button class="hamburger" :class="{ 'active': mobileMenuOpen, 'visible': isScrolled }" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <a href="#home" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.home') }}</a>
        <a href="#about" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.about') }}</a>
        <a href="#services" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.services') }}</a>
        <a href="#contact" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.contact') }}</a>
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
<script>

export default {
  name: 'StickyNavbar',
  components: {
  },
  data() {
    return {
      isSticky: false,
      scrollY: 0,
      isScrolled: false,
      mobileMenuOpen: false
    }
  },
  mounted() {
    this.initScrollListener();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
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
      this.isScrolled = this.scrollY > 100;

      if (this.$refs.navbar) {
        const navbar = this.$refs.navbar;

        const minHeight = 70;
        const maxHeight = 100;
        const currentHeight = minHeight + (navbarEaseProgress * (maxHeight - minHeight));
        navbar.style.height = `${currentHeight}px`;
      }

      if (this.$refs.curvePath) {
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

      if (this.$refs.navbar) {
        const spacer = document.querySelector('.navbar-spacer');
        if (spacer) {
          const minHeight = 70;
          const maxHeight = 100;
          const currentHeight = minHeight + (navbarEaseProgress * (maxHeight - minHeight));
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
  height: 70px; 
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: height 0.3s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  z-index: 1002;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: opacity 0.4s ease;
}

.centered-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  pointer-events: auto;
}

.centered-logo.hidden {
  opacity: 0;
  pointer-events: none;
}

/* Left Logo */
.left-logo {
  position: relative;
  opacity: 0;
  pointer-events: none;
}

.left-logo.visible {
  opacity: 1;
  pointer-events: auto;
}

/* Desktop Navigation */
.navbar-nav {
  display: flex;
  gap: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  margin-left: auto;
}

.navbar-nav.visible {
  opacity: 1;
  pointer-events: auto;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  transform: translateY(-2px);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1003;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.hamburger.visible {
  opacity: 1;
  pointer-events: auto;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: #2898ff;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-link {
  color: white;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-left-color: white;
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
    justify-content: space-between !important; /* Always space-between on mobile */
  }

  .navbar-nav {
    display: none; /* Hide desktop nav on mobile */
  }

  .hamburger {
    display: flex; /* Show hamburger on mobile */
  }

  .axolotl-logo-svg {
    width: 3.5rem;
  }

  .logo-text {
    font-size: 1rem;
    line-height: 1.05;
  }

  .sticky-navbar {
    height: 70px !important;
  }

  .navbar-spacer {
    height: 70px !important; 
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

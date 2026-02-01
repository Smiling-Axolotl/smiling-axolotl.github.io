<template>
  <div class="navbar-wrapper">
    <div ref="navbar" class="sticky-navbar" :class="{ 'is-sticky': isSticky, 'scrolled': isScrolled }">
      <div class="navbar-content" :class="{ 'scrolled': isScrolled }">

        <div class="navbar-left left-logo">
          <div class="axolotl-logo-svg">
            <img src="../assets/logoAxolotl.svg" alt="Axolotl Face" class="logo-svg" fetchpriority="high" />
          </div>
          <h1 class="logo-text">SMILING<br>AXOLOTL</h1>
        </div>

      <div class="nav-cta">
          <CustomButton variant="tertiary" extraClass="nav-contact-btn" :aria-label="$t('nav.contact')"
            @click="scrollToContact">
            {{ $t('nav.contact') }}&nbsp;
            <svg class="btn-icon" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9983 6.21424C17.9975 6.4161 17.9334 6.61263 17.8153 6.77624C17.6971 6.93985 17.5307 7.06232 17.3394 7.12646L15.6426 7.68644C15.1098 7.8647 14.626 8.1649 14.2296 8.56316C13.8332 8.96142 13.5351 9.44674 13.3591 9.98054L12.7724 11.6695C12.705 11.858 12.5823 12.0217 12.4204 12.1392C12.2977 12.2276 12.1557 12.2857 12.0062 12.3086C11.8567 12.3316 11.7039 12.3187 11.5604 12.2711C11.4168 12.2235 11.2865 12.1425 11.1803 12.0348C11.0741 11.9271 10.9949 11.7957 10.9492 11.6514L10.3806 9.95345C10.1972 9.41805 9.88758 8.93475 9.47797 8.54447C9.0819 8.13765 8.5968 7.82846 8.06093 7.64128L6.36408 7.07227C6.17193 7.01174 6.00405 6.89152 5.88481 6.72906C5.76783 6.5641 5.705 6.36683 5.705 6.16456C5.705 5.96229 5.76783 5.76503 5.88481 5.60007C6.00476 5.43283 6.17584 5.30919 6.3722 5.24782L8.06002 4.67881C8.60325 4.496 9.09518 4.18641 9.49512 3.77562C9.90128 3.37551 10.2109 2.88689 10.3977 2.34858L10.9573 0.677682C11.0102 0.486776 11.1244 0.318576 11.2822 0.198991C11.441 0.0714959 11.6382 0.00147063 11.8418 0.000288894C12.0435 -0.00457726 12.2418 0.0521305 12.4104 0.162863C12.5819 0.270531 12.7123 0.432764 12.7805 0.62349L13.3491 2.34858C13.536 2.88689 13.8455 3.37551 14.2517 3.77562C14.6491 4.1852 15.1378 4.49472 15.6778 4.67881L17.3656 5.27492C17.5556 5.3344 17.7206 5.45507 17.8349 5.61813C17.9523 5.79335 18.0109 6.00199 17.9983 6.21424ZM9.08986 12.4733C9.08943 12.6575 9.03274 12.8371 8.9274 12.9882C8.81832 13.135 8.66724 13.2453 8.49416 13.3043L7.27568 13.7107C6.9343 13.8312 6.62539 14.029 6.3731 14.2888C6.11597 14.5432 5.91865 14.8517 5.79545 15.192L5.37124 16.4022C5.31226 16.5754 5.20209 16.7266 5.05534 16.8358C4.90336 16.9426 4.72212 17 4.53636 17C4.3506 17 4.16936 16.9426 4.01738 16.8358C3.87062 16.7266 3.76046 16.5754 3.70147 16.4022L3.30434 15.192C3.18088 14.8516 2.98324 14.5431 2.72579 14.2888C2.47151 14.0315 2.1632 13.834 1.82321 13.7107L0.604727 13.3133C0.43046 13.2519 0.279239 13.1384 0.17149 12.9882C0.0629417 12.8382 0.00307548 12.6585 0 12.4733C0.00325196 12.2871 0.0639753 12.1064 0.17385 11.956C0.283725 11.8057 0.437377 11.693 0.613753 11.6334L1.82321 11.236C2.16196 11.1103 2.46959 10.9129 2.72506 10.6572C2.98053 10.4016 3.17782 10.0937 3.30344 9.75475L3.7096 8.56253C3.76369 8.39165 3.86737 8.24073 4.00745 8.129C4.15389 8.01737 4.33094 7.95322 4.51485 7.94515C4.69876 7.93707 4.88074 7.98547 5.03639 8.08384C5.19073 8.19042 5.30987 8.34125 5.37937 8.51737L5.78553 9.75475C5.91114 10.0937 6.10843 10.4016 6.3639 10.6572C6.61937 10.9129 6.927 11.1103 7.26575 11.236L8.47521 11.6605C8.64789 11.7155 8.79722 11.8268 8.89942 11.9766C9.01413 12.1176 9.08057 12.2917 9.08896 12.4733" fill="currentColor"/>
            </svg>
          </CustomButton>

          <CustomButton variant="secondary" extraClass="hamburger"
            :class="{ 'active': mobileMenuOpen, 'visible': isScrolled }" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </CustomButton>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <a aria-label="Home" href="#home" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.home') }}</a>
        <a aria-label="About" href="#about" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.about') }}</a>
        <a aria-label="Services" href="#services" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.services') }}</a>
        <a aria-label="Contact" href="#contact" class="mobile-nav-link" @click="closeMobileMenu">{{ $t('nav.contact') }}</a>
      </div>

      <!-- La curva -->
      <div class="navbar-curve">
        <svg class="curve-svg" viewBox="0 0 1440 200" preserveAspectRatio="none" fetchpriority="high">
          <path ref="curvePath" d="M0,0 L1440,0 L1440,50 Q720,0 0,50 Z" fill="#2898ff" />
        </svg>
      </div>
    </div>

    <div class="navbar-spacer" :class="{ 'active': isSticky }"></div>
  </div>
</template>
<script>
import CustomButton from './CustomButton.vue';

export default {
  name: 'StickyNavbar',
  components: {
    CustomButton
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
    scrollToContact() {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#contact';
      }
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
      const wasScrolled = this.isScrolled;
      this.isScrolled = this.scrollY > 100;
      
      // Close mobile menu when scrolling to the top
      if (wasScrolled && !this.isScrolled && this.mobileMenuOpen) {
        this.mobileMenuOpen = false;
      }

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

/* Left Logo */
.left-logo {
  position: relative;
  pointer-events: none;
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  pointer-events: auto;
  transition: opacity 0.4s ease;
}

.nav-contact-btn {
  padding: 0.7rem 1.5rem;
  font-size: 0.95rem;
  border-radius: 15px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.nav-contact-btn .btn-icon {
  height: 1em;
  width: auto;
  display: inline-block;
  vertical-align: middle;
}

.nav-contact-btn:hover {
    transform: translateY(0);
    outline: none;
}

.nav-contact-btn:active {
    transform: scale(.95) translateY(0);
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
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
  padding: 0.7rem;
  z-index: 1003;
  pointer-events: auto;
  height: 44px;
  justify-content: center;
}

.hamburger:hover {
    transform: translateY(0);
    outline: none;
}

.hamburger:active {
    transform: scale(.95) translateY(0);
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: currentColor;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
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
  font-family: "Dela Gothic One", monospace;
  font-size: 1.3rem;
  color: white;
  text-align: left;
  font-weight: normal;
  line-height: 1;
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

  .nav-contact-btn {
    display: none; /* Hide CTA on mobile */
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

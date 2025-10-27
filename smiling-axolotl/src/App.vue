<template>
  <div id="app">
    <StickyNavbar />
    <HeroSection />
    <BlueBannerSection />
    <GrowBrandSection />
    <StrategicSection />
    <ServicesSection />
    <FooterSection />
    <LanguageToggle />
  </div>
</template>

<script>
import StickyNavbar from './components/StickyNavbar.vue';
import HeroSection from './components/HeroSection.vue';
import BlueBannerSection from './components/BlueBannerSection.vue';
import GrowBrandSection from './components/GrowBrandSection.vue';
import StrategicSection from './components/StrategicSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import FooterSection from './components/FooterSection.vue';
import LanguageToggle from './components/LanguageToggle.vue';

export default {
  name: 'App',
  components: {
    StickyNavbar,
    HeroSection,
    BlueBannerSection,
    GrowBrandSection,
    StrategicSection,
    ServicesSection,
    FooterSection,
    LanguageToggle
  },
  methods: {
    initSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    }
  },
  mounted() {
    this.initSmoothScrolling();
  }
}
</script>

<style>
@import url('./style.css');
</style>

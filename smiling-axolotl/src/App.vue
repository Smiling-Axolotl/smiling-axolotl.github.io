<template>
  <div id="app">
    <StickyNavbar />
    <HeroSection />
    <GrowBrandSection />
    <ProjectsSection />
    <StrategicSection />
    <ServicesSection />
    <FooterSection />
    <LanguageToggle />
  </div>
</template>

<script>
import StickyNavbar from './components/StickyNavbar.vue';
import HeroSection from './components/HeroSection.vue';
import GrowBrandSection from './components/GrowBrandSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import StrategicSection from './components/StrategicSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import FooterSection from './components/FooterSection.vue';
import LanguageToggle from './components/LanguageToggle.vue';

export default {
  name: 'App',
  components: {
    StickyNavbar,
    HeroSection,
    GrowBrandSection,
    ProjectsSection,
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
          const targetId = this.getAttribute('href').substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            const navbarHeight = 80; // Account for navbar height
            const targetPosition = target.offsetTop - (targetId === 'contact' ? 0 : navbarHeight);
            
            window.scrollTo({
              top: targetPosition,
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

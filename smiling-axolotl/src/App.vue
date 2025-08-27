<template>
  <div id="app">
    <!-- Hero  -->
    <section class="hero-section">
      <div class="blue-top-section">
        <div class="logo-container">
          <div class="axolotl-logo-svg">
            <img src="./assets/logoAxolotl.svg" alt="Axolotl Face" class="logo-svg" />
          </div>
          <h1 class="logo-text">SMILING<br>AXOLOTL</h1>
        </div>
      </div>

      <!-- Resto del contenido principal -->
      <div class="white-curved-section">
        <div class="main-content">
          <p class="tagline">CREATED BY PLAYERS FOR PLAYERS</p>
          <h1 class="main-title">BUILDING IMMERSIVE<br>EXPERIENCES</h1>
          <p class="description">
            We're a new game development studio building
            immersive experiences for brands, artists, and
            communities.
          </p>
          <CustomButton variant="primary" class="shimmer">WORK WITH US</CustomButton>
        </div>

        <!--
        <div class="axolotl-illustration">
          <img src="./assets/axolotl.svg" alt="Large Blue Axolotl" class="large-axolotl-svg" />
        </div>
        -->
      </div>
    </section>

    <!-- Los servicios (los puse como template namas)-->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <ServiceCard icon="🎮" title="Game Development"
            description="Custom Roblox experiences tailored to your vision" />
          <ServiceCard icon="🎨" title="Creative Design" description="Stunning visuals and immersive environments" />
          <ServiceCard icon="👥" title="Community Building" description="Features that foster engagement and growth" />
        </div>
      </div>
    </section>

    <!-- El about si lo escribio Chat xd, ahi lo cambias-->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <h2>About Smiling Axolotl</h2>
          <p>We're a passionate team of Roblox developers who understand what makes games truly engaging. Our studio
            combines years of platform expertise with fresh creative perspectives to deliver exceptional immersive
            experiences.</p>
          <div class="stats">
            <StatItem number="50+" label="Projects" />
            <StatItem number="2M+" label="Players" />
            <StatItem number="3" label="Years" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section class="contact-section">
      <div class="container">
        <h2>Ready to Build Something Amazing?</h2>
        <p>Let's discuss your project and create an experience your audience will love.</p>
        <div class="contact-buttons">
          <CustomButton variant="primary">Get Started</CustomButton>
          <CustomButton variant="secondary">View Portfolio</CustomButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';
import StatItem from './components/StatItem.vue';
import ServiceCard from './components/ServiceCard.vue';

export default {
  name: 'App',
  components: {
    CustomButton,
    StatItem,
    ServiceCard,
  },
  mounted() {
    this.initSmoothScrolling();
  },
  methods: {
    initSmoothScrolling() {
      // Smooth scrolling functionality
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
  }
}
</script>

<style>
@import url('./style.css');
</style>
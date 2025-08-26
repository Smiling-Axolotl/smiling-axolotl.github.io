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
            We're a new game development studio building<br>
            immersive experiences for brands, artists, and<br>
            communities.
          </p>
          <button class="cta-button">WORK WITH US</button>
        </div>

        <div class="axolotl-illustration">
          <img src="./assets/axolotl.svg" alt="Large Blue Axolotl" class="large-axolotl-svg" />
        </div>
      </div>
    </section>

    <!-- Los servicios (los puse como template namas)-->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🎮</div>
            <h3>Game Development</h3>
            <p>Custom Roblox experiences tailored to your vision</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3>Creative Design</h3>
            <p>Stunning visuals and immersive environments</p>
          </div>
          <div class="service-card">
            <div class="service-icon">👥</div>
            <h3>Community Building</h3>
            <p>Features that foster engagement and growth</p>
          </div>
        </div>
      </div>
    </section>

    <!-- El about si lo escribio Chat xd, ahi lo cambias-->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <h2>About Smiling Axolotl</h2>
          <p>We're a passionate team of Roblox developers who understand what makes games truly engaging. Our studio combines years of platform expertise with fresh creative perspectives to deliver exceptional immersive experiences.</p>
          <div class="stats">
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
              <span class="stat-number">2M+</span>
              <span class="stat-label">Players</span>
            </div>
            <div class="stat">
              <span class="stat-number">3</span>
              <span class="stat-label">Years</span>
            </div>
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
          <button class="contact-btn primary">Get Started</button>
          <button class="contact-btn secondary">View Portfolio</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
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
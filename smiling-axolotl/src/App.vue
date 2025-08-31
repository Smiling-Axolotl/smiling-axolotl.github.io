<template>
  <div id="app">
    <StickyNavbar />

    <section class="hero-section">
      <!-- Bubble Animation -->
      <BubbleAnimation />
      
      <!-- Resto del contenido principal -->
      <div class="white-section">
        <div class="main-content">
          <p class="tagline">CREATED BY PLAYERS FOR PLAYERS</p>
          <h1 class="main-title">BUILDING IMMERSIVE<br>EXPERIENCES</h1>
          <p class="description">
            We're an emerging game development studio building immersive
            <span class="inline-logo"><img src="./assets/hero/Roblox.svg" alt="Roblox" /></span>
            experiences for <b class="hover-glowing-text">brands</b>, <b class="hover-glowing-text">artists</b>,
            and <b class="hover-glowing-text">communities</b>.
          </p>
          <CustomButton variant="primary" class="shimmer">WORK WITH US</CustomButton>
        </div>

        <div class="aquatic-plants">
          <img src="./assets/hero/Left.svg" class="left" />
          <img src="./assets/hero/Right.svg" class="right" />
        </div>
      </div>
    </section>

    <section class="blue-banner-section">
      <span class="blue-banner-content">
        <span class="blue-banner-title">WE'RE NOT</span>
        <span class="blue-banner-list">
          your average development company&#9;&bull;&#9;
          the makers of soulless experiences&#9;&bull;&#9;
          about trends, <b>we're about connections</b>&#9;&bull;&#9;
          a faceless corporation&#9;&bull;&#9;
          copy-pasting what already exists&#9;&bull;&#9;
          here to cash in, <b>we're here to create</b>
        </span>
      </span>
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

    <!-- Partners -->
    <section class="partners-section">
      <div class="partners-container">
        <h2 class="partners-title">Strategic Partners &amp; Alliances</h2>
        <div class="partners-logos">
          <SecondaryLogo src="partners/AstralLabs.svg" alt="Astral Labs" />
          <SecondaryLogo src="partners/CreatingMadness.svg" alt="Creating Madness" />
        </div>
      </div>

      <!--
      <div class="partners-container">
        <h2 class="partners-title">Experience our team members bring</h2>
        <div class="partners-logos">
          <SecondaryLogo src="experience/Baobab.svg" alt="Baobab Studios" />
          <SecondaryLogo src="experience/SecondChanceProd.svg" alt="Second Chance Productions LLC" />
        </div>
      </div>-->
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
      <div class="waves-top">
        <div class="wave-container">
          <svg class="wave-svg wave-1" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path class="wave-path" d="M0,100 Q360,50 720,100 Q1080,150 1440,100 L1440,200 L0,200 Z" fill="#2898ff" />
          </svg>
          <svg class="wave-svg wave-2" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path class="wave-path" d="M0,100 Q360,50 720,100 Q1080,150 1440,100 L1440,200 L0,200 Z" fill="#2898ff" />
          </svg>
        </div>
      </div>

      <div class="container">
        <h2>Ready to Build Something Amazing?</h2>
        <p>Let's discuss your project and create an experience your audience will love.</p>
        <div class="contact-buttons">
          <CustomButton variant="primary">Get Started</CustomButton>
          <CustomButton variant="secondary">View Portfolio</CustomButton>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-section">
      <div class="footer-content">
        <p>&copy; 2025 Smiling Axolotl. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';
import StatItem from './components/StatItem.vue';
import ServiceCard from './components/ServiceCard.vue';
import StickyNavbar from './components/StickyNavbar.vue';
import SecondaryLogo from './components/SecondaryLogo.vue';
import BubbleAnimation from './components/BubbleAnimation.vue';

export default {
  name: 'App',
  components: {
    CustomButton,
    StatItem,
    ServiceCard,
    StickyNavbar,
    SecondaryLogo,
    BubbleAnimation,
  },
  mounted() {
    this.initSmoothScrolling();
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
  }
}
</script>

<style>
@import url('./style.css');
</style>
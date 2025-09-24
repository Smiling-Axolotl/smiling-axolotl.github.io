<template>
  <div id="app">
    <StickyNavbar />

    <section class="hero-section">
      <BubbleAnimation />
      
      <!-- Resto del contenido principal -->
      <div class="white-section">
        <div class="main-content">
          <p class="tagline">{{ $t('hero.tagline') }}</p>
          <h1 class="main-title" v-html="$t('hero.title')"></h1>
          <p class="description">
            <i18n-t keypath="hero.description" tag="span">
              <template #roblox>
                <span class="inline-logo"><img :src="assets.robloxLogo" alt="Roblox" /></span>
              </template>
              <template #brands>
                <b class="hover-glowing-text">{{ $t('hero.brands') }}</b>
              </template>
              <template #artists>
                <b class="hover-glowing-text">{{ $t('hero.artists') }}</b>
              </template>
              <template #communities>
                <b class="hover-glowing-text">{{ $t('hero.communities') }}</b>
              </template>
            </i18n-t>
          </p>
          <CustomButton variant="primary" class="shimmer">{{ $t('hero.cta') }}</CustomButton>
        </div>

        <div class="aquatic-plants">
          <img :src="assets.leftPlant" class="left" />
          <img :src="assets.rightPlant" class="right" />
        </div>
      </div>
    </section>

    <section class="blue-banner-section">
      <div class="blue-banner-container">
        <h2 class="blue-banner-title" @mousemove="handleMouseMove" @mouseleave="resetLetters" ref="titleElement">
          <span 
            v-for="(letter, index) in titleLetters" 
            :key="index" 
            :ref="el => { if (el) letterRefs[index] = el }"
            class="letter"
            :class="{ space: letter === ' ' }"
          >
            {{ letter === ' ' ? '\u00A0' : letter }}
          </span>
        </h2>
        <div class="marquee-container">
          <div class="marquee-line marquee-right">
            <div class="marquee-content">
              <span class="phrase-bold">{{ $t('banner.phrases.line1.phrase1') }}</span>
              <span class="phrase-italic">{{ $t('banner.phrases.line1.phrase2') }}</span>
              <span class="phrase-normal">{{ $t('banner.phrases.line1.phrase3') }}</span>
              <span class="phrase-bold">{{ $t('banner.phrases.line1.phrase1') }}</span>
              <span class="phrase-italic">{{ $t('banner.phrases.line1.phrase2') }}</span>
              <span class="phrase-normal">{{ $t('banner.phrases.line1.phrase3') }}</span>
            </div>
          </div>
          
          <div class="marquee-line marquee-left">
            <div class="marquee-content">
              <span class="phrase-italic">{{ $t('banner.phrases.line2.phrase1') }}</span>
              <span class="phrase-bold">{{ $t('banner.phrases.line2.phrase2') }}</span>
              <span class="phrase-normal">{{ $t('banner.phrases.line2.phrase3') }}</span>
              <span class="phrase-italic">{{ $t('banner.phrases.line2.phrase1') }}</span>
              <span class="phrase-bold">{{ $t('banner.phrases.line2.phrase2') }}</span>
              <span class="phrase-normal">{{ $t('banner.phrases.line2.phrase3') }}</span>
            </div>
          </div>
          
          <div class="marquee-line marquee-right">
            <div class="marquee-content">
              <span class="phrase-normal">{{ $t('banner.phrases.line3.phrase1') }}</span>
              <span class="phrase-italic">{{ $t('banner.phrases.line3.phrase2') }}</span>
              <span class="phrase-bold">{{ $t('banner.phrases.line3.phrase3') }}</span>
              <span class="phrase-normal">{{ $t('banner.phrases.line3.phrase1') }}</span>
              <span class="phrase-italic">{{ $t('banner.phrases.line3.phrase2') }}</span>
              <span class="phrase-bold">{{ $t('banner.phrases.line3.phrase3') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grow Your Brand Section -->
    <section class="grow-brand-section">
      <div class="grow-brand-container">
        <h2 class="grow-brand-title">
          <i18n-t keypath="services.title" tag="span">
            <template #brand>
              <span class="brand-highlight">{{ $t('services.brand') }}</span>
            </template>
          </i18n-t>
        </h2>
        <p class="grow-brand-subtitle">{{ $t('services.subtitle') }}</p>
        
        <div class="brand-stats">
          <StatCard
            number="111.8M"
            :label="$t('services.stats.dailyUsers')"
            :source="$t('services.stats.robloxSource')"
          />
          <StatCard
            number="27.4B"
            :label="$t('services.stats.engagementHours')"
            :source="$t('services.stats.robloxSource')"
          />
          <StatCard
            number="$980K"
            :label="$t('services.stats.avgRevenue')"
            :note="$t('services.stats.topDevsNote')"
            :source="$t('services.stats.devConfSource')"
          />
        </div>
      </div>
    </section>

    <!-- Strategic Partners & Alliances -->
    <section class="strategic-section">
      <div class="strategic-container">
        <div class="strategic-partners-wrapper">
          <div class="strategic-partners-card">
            <div class="card-background"></div>
            <div class="card-content">
              <h3 class="strategic-title">{{ $t('partners.strategic.title') }}</h3>
              <div class="strategic-partners-logos">
                <Tooltip text="Astral Labs" position="bottom">
                  <img :src="assets.astralLabsLogo" alt="Astral Labs" class="partner-logo" />
                </Tooltip>
                <Tooltip text="Creating Madness" position="bottom">
                  <img :src="assets.creatingMadnessLogo" alt="Creating Madness" class="partner-logo" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        
        <div class="experience-wrapper">
          <div class="experience-card">
            <div class="card-background"></div>
            <div class="card-content">
              <h3 class="experience-title">{{ $t('partners.experience.title') }}</h3>
              <div class="experience-logos">
                <Tooltip text="Baobab Studios" position="bottom">
                  <img :src="assets.baobabLogo" alt="Baobab Studios" class="partner-logo no-filter-logo" />
                </Tooltip>
                <Tooltip text="Second Chance Productions LLC" position="bottom">
                  <img :src="assets.secondChanceLogo" alt="Second Chance Productions LLC" class="partner-logo no-filter-logo" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- El about si lo escribio Chat xd, ahi lo cambias-->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <h2>{{ $t('about.title') }}</h2>
          <p>{{ $t('about.description') }}</p>
          <div class="stats">
            <StatItem number="..." label="Projects" />
            <StatItem number="..." label="Players" />
            <StatItem number="..." label="Years" />
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-section">
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
      
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-left floating-element-slow">
            <h2 class="footer-title">{{ $t('footer.title') }}<br>{{ $t('footer.subtitle') }}</h2>
            <div class="footer-actions">
              <CustomButton variant="primary" class="contact-btn floating-element-medium">{{ $t('footer.cta') }}</CustomButton>
              <a href="mailto:contact@smilingaxolotl.com" class="email-icon floating-element-fast">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-right">
            <div class="social-section floating-element-medium">
              <h3 class="social-title">{{ $t('footer.socials') }}</h3>
              <div class="social-icons">
                <a href="https://x.com/smiling_axo" class="social-link twitter floating-icon-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/smiling-axolotl/" class="social-link linkedin floating-icon-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.roblox.com/communities/12277287/Smiling-Axolotl#!/about" class="social-link roblox floating-icon-3">
                  <svg width="20" height="20" viewBox="0 0 302.7 302.7" fill="currentColor">
                    <path d="M120.5,271.7c-110.9-28.6-120-31-119.9-31.5C0.7,239.6,62.1,0.5,62.2,0.4c0,0,54,13.8,119.9,30.8s120,30.8,120.1,30.8c0.2,0,0.2,0.4,0.1,0.9c-0.2,1.5-61.5,239.3-61.7,239.5C240.6,302.5,186.5,288.7,120.5,271.7z M174.9,158c3.2-12.6,5.9-23.1,6-23.4c0.1-0.5-2.3-1.2-23.2-6.6c-12.8-3.3-23.5-5.9-23.6-5.8c-0.3,0.3-12.1,46.6-12,46.7c0.2,0.2,46.7,12.2,46.8,12.1C168.9,180.9,171.6,170.6,174.9,158L174.9,158z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="footer-bottom floating-element-slow">
              <p class="copyright-bottom-right">© 2025 Smiling Axolotl. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';
import StatItem from './components/StatItem.vue';
import StatCard from './components/StatCard.vue';
import StickyNavbar from './components/StickyNavbar.vue';
import SecondaryLogo from './components/SecondaryLogo.vue';
import BubbleAnimation from './components/BubbleAnimation.vue';
import Tooltip from './components/Tooltip.vue';

import RobloxLogo from './assets/hero/Roblox.svg';
import LeftPlant from './assets/hero/Left.svg';
import RightPlant from './assets/hero/Right.svg';
import CreatingMadnessLogo from './assets/partners/CreatingMadness.svg';
import AstralLabsLogo from './assets/partners/AstralLabs.svg';
import BaobabLogo from './assets/experience/Baobab.svg';
import SecondChanceLogo from './assets/experience/SecondChanceProd.svg';

export default {
  name: 'App',
  components: {
    CustomButton,
  StatItem,
  StatCard,
    StickyNavbar,
    SecondaryLogo,
    BubbleAnimation,
    Tooltip,
  },
  data() {
    return {
      letterRefs: [],
      assets: {
        robloxLogo: RobloxLogo,
        leftPlant: LeftPlant,
        rightPlant: RightPlant,
        creatingMadnessLogo: CreatingMadnessLogo,
        astralLabsLogo: AstralLabsLogo,
        baobabLogo: BaobabLogo,
        secondChanceLogo: SecondChanceLogo,
      }
    }
  },
  computed: {
    titleLetters() {
      return this.$t('banner.title').split('');
    }
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
    },
    handleMouseMove(event) {
      if (!this.$refs.titleElement) return;
      
      const rect = this.$refs.titleElement.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      this.letterRefs.forEach((letterEl, index) => {
        if (!letterEl) return;
        
        const letterRect = letterEl.getBoundingClientRect();
        const letterCenterX = letterRect.left + letterRect.width / 2 - rect.left;
        const letterCenterY = letterRect.top + letterRect.height / 2 - rect.top;
        
        const deltaX = mouseX - letterCenterX;
        const deltaY = mouseY - letterCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        const maxDistance = 180;
        const influence = Math.max(0, 1 - distance / maxDistance);
        
        const repulsionStrength = 15; 
        const moveX = influence * repulsionStrength * (deltaX < 0 ? 1 : -1);
        const moveY = influence * repulsionStrength * (deltaY < 0 ? 1 : -1);
        
        letterEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    },
    resetLetters() {
      this.letterRefs.forEach(letterEl => {
        if (letterEl) {
          letterEl.style.transform = 'translate(0px, 0px)';
        }
      });
    }
  }
}
</script>

<style>
@import url('./style.css');
</style>
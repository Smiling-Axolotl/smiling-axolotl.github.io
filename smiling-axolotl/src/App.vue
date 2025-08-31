<template>
  <div id="app">
    <StickyNavbar />

    <section class="hero-section">
      <BubbleAnimation />
      
      <!-- Resto del contenido principal -->
      <div class="white-section">
        <div class="main-content">
          <p class="tagline">CREATED BY PLAYERS FOR PLAYERS</p>
          <h1 class="main-title">BUILDING IMMERSIVE<br>EXPERIENCES</h1>
          <p class="description">
            We're an emerging game development studio building immersive
            <span class="inline-logo"><img :src="assets.robloxLogo" alt="Roblox" /></span>
            experiences for <b class="hover-glowing-text">brands</b>, <b class="hover-glowing-text">artists</b>,
            and <b class="hover-glowing-text">communities</b>.
          </p>
          <CustomButton variant="primary" class="shimmer">WORK WITH US</CustomButton>
        </div>

        <div class="aquatic-plants">
          <img :src="assets.leftPlant" class="left" />
          <img :src="assets.rightPlant" class="right" />
        </div>
      </div>
    </section>

    <section class="blue-banner-section">
      <div class="blue-banner-container">
        <h2 class="blue-banner-title">WE'RE NOT</h2>
        <div class="marquee-container">
          <div class="marquee-line marquee-right">
            <div class="marquee-content">
              <span class="phrase-bold">the makers of soulless experiences</span>
              <span class="phrase-italic">afraid to take risks</span>
              <span class="phrase-normal">your average development company</span>
              <span class="phrase-bold">the makers of soulless experiences</span>
              <span class="phrase-italic">afraid to take risks</span>
              <span class="phrase-normal">your average development company</span>
            </div>
          </div>
          
          <div class="marquee-line marquee-left">
            <div class="marquee-content">
              <span class="phrase-italic">about trends</span>
              <span class="phrase-bold">here to waste your time</span>
              <span class="phrase-normal">a faceless corporation</span>
              <span class="phrase-italic">about trends</span>
              <span class="phrase-bold">here to waste your time</span>
              <span class="phrase-normal">a faceless corporation</span>
            </div>
          </div>
          
          <div class="marquee-line marquee-right">
            <div class="marquee-content">
              <span class="phrase-normal">copy-pasting what already exists</span>
              <span class="phrase-italic">here to cash in</span>
              <span class="phrase-bold">bound by formulas</span>
              <span class="phrase-normal">copy-pasting what already exists</span>
              <span class="phrase-italic">here to cash in</span>
              <span class="phrase-bold">bound by formulas</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grow Your Brand Section -->
    <section class="grow-brand-section">
      <div class="grow-brand-container">
        <h2 class="grow-brand-title">GROW YOUR <span class="brand-highlight">BRAND</span></h2>
        <p class="grow-brand-subtitle">ON A PLATFORM WITH</p>
        
        <div class="brand-stats">
          <div class="stat-card">
            <div class="stat-number">111.8M</div>
            <div class="stat-label">DAILY ACTIVE<br>USERS <span class="info-icon">ⓘ</span></div>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">27.4B</div>
            <div class="stat-label">ENGAGEMENT<br>HOURS <span class="info-icon">ⓘ</span></div>
          </div>
          
          <div class="stat-card">
            <div class="stat-number">$753K</div>
            <div class="stat-label">AVG. YEARLY<br>REVENUE <span class="info-icon">ⓘ</span></div>
            <div class="stat-note">(TOP 1,000 DEVS)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strategic Partners & Alliances -->
    <section class="strategic-section">
      <div class="strategic-container">
        <div class="strategic-partners-card">
          <h3 class="strategic-title">Strategic Partners & Alliances</h3>
          <div class="strategic-partners-logos">
            <Tooltip text="Astral Labs" position="bottom">
              <img :src="assets.astralLabsLogo" alt="Astral Labs" class="partner-logo" />
            </Tooltip>
            <Tooltip text="Creating Madness" position="bottom">
              <img :src="assets.creatingMadnessLogo" alt="Creating Madness" class="partner-logo" />
            </Tooltip>
          </div>
        </div>
        
        <div class="experience-card">
          <h3 class="experience-title">Experience our team members bring</h3>
          <div class="experience-logos">
            <Tooltip text="Baobab Studios" position="bottom">
              <img :src="assets.baobabLogo" alt="Baobab Studios" class="partner-logo" />
            </Tooltip>
            <Tooltip text="Second Chance Productions LLC" position="bottom">
              <img :src="assets.secondChanceLogo" alt="Second Chance Productions LLC" class="partner-logo" />
            </Tooltip>
          </div>
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
            <h2 class="footer-title">LET'S BUILD<br>SOMETHING<br>AMAZING</h2>
            <div class="footer-actions">
              <CustomButton variant="primary" class="contact-btn floating-element-medium">CONTACT US</CustomButton>
              <div class="email-icon floating-element-fast">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="footer-right">
            <div class="social-section floating-element-medium">
              <h3 class="social-title">Our Socials</h3>
              <div class="social-icons">
                <a href="https://x.com/SmilingAjolote" class="social-link twitter floating-icon-1">
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
    StickyNavbar,
    SecondaryLogo,
    BubbleAnimation,
    Tooltip,
  },
  data() {
    return {
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
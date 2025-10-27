<template>
  <footer id="contact" class="footer-section">
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
            <button 
              @click="toggleLanguage" 
              class="footer-language-btn"
              :title="$t('language.switch')"
            >
              {{ currentLang.toUpperCase() }}
            </button>
            <p class="copyright-bottom-right">© 2025 Smiling Axolotl. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CustomButton from './CustomButton.vue';
import { setLocale } from '../i18n';

export default {
  name: 'FooterSection',
  components: {
    CustomButton
  },
  computed: {
    currentLang() {
      return this.$i18n.locale
    }
  },
  methods: {
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'en' ? 'es' : 'en'
      setLocale(newLocale)
    }
  }
}
</script>

<style scoped>
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
}

.footer-language-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 60px;
}

.footer-language-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

@media (max-width: 992px) {
  .footer-bottom {
    align-items: center;
  }
}
</style>

<template>
  <div class="language-toggle" :class="{ 'hidden': isAtFooter }" ref="languageToggle">
    <button 
      @click="toggleLanguage" 
      class="language-button"
      aria-label="Switch Language"
      :title="$t('language.switch')"
    >
      <!-- Flag -->
      <div class="flag-container">
        <img 
          v-if="currentLang === 'en'" 
          :src="usaFlag" 
          alt="USA Flag" 
          class="flag"
        />
        <img 
          v-else 
          :src="mexicoFlag" 
          alt="Mexico Flag" 
          class="flag"
        />
      </div>
      
      <!-- Language Name -->
      <span class="lang-name">{{ currentLang === 'en' ? 'English' : 'Español' }}</span>
      
      <!-- Switch Icon -->
      <img :src="switchIcon" alt="Switch language" class="switch-icon" />
    </button>
  </div>
</template>

<script>
import { setLocale } from '../i18n'
import usaFlag from '../assets/icons/usaFlag.svg'
import mexicoFlag from '../assets/icons/mexicoFlag.svg'
import switchIcon from '../assets/icons/switch.svg'

export default {
  name: 'LanguageToggle',
  data() {
    return {
      isAtFooter: false,
      usaFlag,
      mexicoFlag,
      switchIcon
    }
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
    },
    handleScroll() {
      const footer = document.querySelector('.footer-section');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if footer is visible in viewport
      this.isAtFooter = footerRect.top < windowHeight - 100; // Start fading 100px before footer
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll(); // Check initial state
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.language-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  opacity: 1;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.language-toggle.hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
}

.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: white;
  border: 3px solid #1a1a1a;
  color: #1a1a1a;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Dela Gothic One', cursive;
  font-weight: 700;
  font-size: 1.3rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-transform: none;
  min-width: 200px;
}

.language-button:hover {
  background: #f8f8f8;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.language-button:active {
  transform: translateY(-1px);
}

.flag-container {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flag {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.lang-name {
  flex: 1;
  text-align: center;
  font-family: 'Dela Gothic One', cursive;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #1a1a1a;
}

.switch-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: #1a1a1a;
  transition: transform 0.3s ease;
}

.language-button:hover .switch-icon {
  transform: rotate(180deg);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .language-toggle {
    bottom: 1rem;
    right: 1rem;
  }

  .language-button {
    padding: 0.6rem 1.2rem;
    font-size: 1.1rem;
    gap: 0.75rem;
    min-width: 170px;
  }

  .flag-container {
    width: 28px;
    height: 28px;
  }

  .switch-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .language-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    gap: 0.5rem;
    min-width: 150px;
  }

  .flag-container {
    width: 24px;
    height: 24px;
  }

  .switch-icon {
    width: 18px;
    height: 18px;
  }
}
</style>


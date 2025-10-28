<template>
  <div class="language-toggle" :class="{ 'hidden': isAtFooter }" ref="languageToggle">
    <button 
      @click="toggleLanguage" 
      class="language-button"
      aria-label="Switch Language"
      :title="$t('language.switch')"
    >
      <span class="lang-code">{{ currentLang.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script>
import { setLocale } from '../i18n'

export default {
  name: 'LanguageToggle',
  data() {
    return {
      isAtFooter: false
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
  right: 2rem; /* Changed from left to right */
  z-index: 999;
  opacity: 1;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.language-toggle.hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px); /* Fade down animation */
}

.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2898ff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  min-width: 60px;
  box-shadow: 0 4px 15px rgba(40, 152, 255, 0.3);
}

.language-button:hover {
  background: #1a7acc;
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(40, 152, 255, 0.4);
}

.lang-code {
  font-weight: 700;
  letter-spacing: 1px;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .language-toggle {
    bottom: 1rem;
    right: 1rem; /* Changed from left to right */
  }

  .language-button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    min-width: 50px;
  }
}
</style>


<template>
  <div class="language-toggle">
    <button 
      @click="toggleLanguage" 
      class="language-button"
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
.language-toggle {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  min-width: 50px;
}

.language-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.lang-code {
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>

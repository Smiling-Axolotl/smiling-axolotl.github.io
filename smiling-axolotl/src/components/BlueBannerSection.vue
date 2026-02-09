<template>
  <section class="blue-banner-section">
    <!-- Top curve -->
    <div class="banner-curve banner-curve-top">
      <svg class="curve-svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#2898ff" />
      </svg>
    </div>

    <div class="blue-banner-container">
      <h2 class="blue-banner-title">
        <span 
          v-for="(letter, index) in titleLetters" 
          :key="index"
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

    <!-- Bottom curve -->
    <div class="banner-curve banner-curve-bottom">
      <svg class="curve-svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 L0,100 Q720,0 1440,100 L1440,0 Z" fill="#2898ff" />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlueBannerSection',
  computed: {
    titleLetters() {
      return this.$t('banner.title').split('');
    }
  }
}
</script>

<style scoped>
</style>

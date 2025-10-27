<template>
  <section class="blue-banner-section">
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

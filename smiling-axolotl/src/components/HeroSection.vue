<template>
  <section class="hero-section">
    <div class="white-section">
      <div class="main-content">
        <p class="tagline">{{ $t('hero.tagline') }}</p>
        <h1 class="main-title" v-html="$t('hero.title')"></h1>
        <p class="description">
          <i18n-t keypath="hero.description" tag="span">
            <template #roblox>
              <span class="inline-logo"><img :src="robloxLogo" alt="Roblox" /></span>
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
        <img :src="leftPlant" class="left" />
        <img :src="rightPlant" class="right" />
      </div>
    </div>
  </section>
</template>

<script>
import CustomButton from './CustomButton.vue';
import RobloxLogo from '../assets/hero/Roblox.svg';
import LeftPlant from '../assets/hero/Left.svg';
import RightPlant from '../assets/hero/Right.svg';

export default {
  name: 'HeroSection',
  components: {
    CustomButton
  },
  data() {
    return {
      robloxLogo: RobloxLogo,
      leftPlant: LeftPlant,
      rightPlant: RightPlant
    }
  }
}
</script>

<style scoped>
</style>

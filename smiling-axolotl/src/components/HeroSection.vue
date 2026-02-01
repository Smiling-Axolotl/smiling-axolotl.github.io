<template>
  <section id="home" class="hero-section">
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
        <CustomButton
          aria-label="Contact Us"
          variant="tertiary" class="shimmer"
          @click="openContactModal"
        >
          {{ $t('hero.cta') }}
        </CustomButton>
      </div>
    </div>

    <!-- Contact Modal -->
    <ContactModal :isOpen="isContactModalOpen" @close="closeContactModal" />
  </section>
</template>

<script>
import CustomButton from './CustomButton.vue';
import ContactModal from './ContactModal.vue';
import RobloxLogo from '../assets/hero/Roblox.svg';

export default {
  name: 'HeroSection',
  components: {
    CustomButton,
    ContactModal
  },
  data() {
    return {
      robloxLogo: RobloxLogo,
      isContactModalOpen: false
    }
  },
  methods: {
    openContactModal() {
      this.isContactModalOpen = true
    },
    closeContactModal() {
      this.isContactModalOpen = false
    }
  }
}
</script>

<style scoped>
</style>

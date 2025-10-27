<template>
  <section class="strategic-section">
    <div class="strategic-container">
      <div class="strategic-partners-wrapper">
        <div class="strategic-partners-card">
          <div class="card-background"></div>
          <div class="card-content">
            <h3 class="strategic-title">{{ $t('partners.strategic.title') }}</h3>
            <div class="strategic-partners-logos">
              <Tooltip text="Astral Labs" position="bottom">
                <img :src="astralLabsLogo" alt="Astral Labs" class="partner-logo" />
              </Tooltip>
              <Tooltip text="Creating Madness" position="bottom">
                <img :src="creatingMadnessLogo" alt="Creating Madness" class="partner-logo" />
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
                <img :src="baobabLogo" alt="Baobab Studios" class="partner-logo no-filter-logo" />
              </Tooltip>
              <Tooltip text="Second Chance Productions LLC" position="bottom">
                <img :src="secondChanceLogo" alt="Second Chance Productions LLC" class="partner-logo no-filter-logo" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tooltip from './Tooltip.vue';
import CreatingMadnessLogo from '../assets/partners/CreatingMadness.svg';
import AstralLabsLogo from '../assets/partners/AstralLabs.svg';
import BaobabLogo from '../assets/experience/Baobab.svg';
import SecondChanceLogo from '../assets/experience/SecondChanceProd.svg';

export default {
  name: 'StrategicSection',
  components: {
    Tooltip
  },
  data() {
    return {
      creatingMadnessLogo: CreatingMadnessLogo,
      astralLabsLogo: AstralLabsLogo,
      baobabLogo: BaobabLogo,
      secondChanceLogo: SecondChanceLogo
    }
  }
}
</script>

<style scoped>
</style>

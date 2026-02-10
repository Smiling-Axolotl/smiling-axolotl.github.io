<template>
  <section id="about" class="blue-banner-section">
    <div class="banner-curve banner-curve-top">
      <svg class="curve-svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#2898ff" />
      </svg>
    </div>
    <div class="grow-brand-content">
      <div class="grow-brand-container">
        <h2 class="grow-brand-title">
          <i18n-t keypath="services.title" tag="span">
            <template #brand>
              <span class="brand-highlight">{{ $t('services.brand') }}</span>
            </template>
          </i18n-t>
        </h2>
        <p class="grow-brand-subtitle">{{ $t('services.subtitle') }}</p>
        
        <div class="brand-stats">
          <StatCard
            number="111.8M"
            :label="$t('services.stats.dailyUsers')"
            :source="$t('services.stats.robloxSource')"
          />
          <StatCard
            number="27.4B"
            :label="$t('services.stats.engagementHours')"
            :source="$t('services.stats.robloxSource')"
          />
          <StatCard
            number="$980K"
            :label="$t('services.stats.avgRevenue')"
            :note="$t('services.stats.topDevsNote')"
            :source="$t('services.stats.devConfSource')"
          />
        </div>
      </div>
    </div>
    <div class="banner-curve banner-curve-bottom">
      <svg class="curve-svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 L0,100 Q720,0 1440,100 L1440,0 Z" fill="#2898ff" />
      </svg>
    </div>
  </section>
</template>

<script>
import StatCard from './StatCard.vue';

export default {
  name: 'GrowBrandSection',
  components: {
    StatCard
  }
}
</script>

<style scoped>
.grow-brand-section {
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
}

.curve-svg {
  width: 100%;
  height: 80px;
  display: block;
}

.grow-brand-content {
  background: #2898ff;
  padding: 0 0;
  position: relative;
}

.grow-brand-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.grow-brand-title {
  color: white;
  font-family: 'Dela Gothic One', cursive;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0 0 0.2rem 0;
}

.brand-highlight {
  color: #FAC020;
}

.grow-brand-subtitle {
  color: white;
  font-family: 'Dela Gothic One', cursive;
  font-size: 2.4rem;
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0 0 2rem 0;
}

@media (max-width: 768px) {
  .curve-svg {
    height: 30px;
  }

  .grow-brand-content {
    padding: 2rem 0;
  }
}
</style>

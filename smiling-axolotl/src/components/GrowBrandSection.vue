<template>
  <section class="grow-brand-section">
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
</style>

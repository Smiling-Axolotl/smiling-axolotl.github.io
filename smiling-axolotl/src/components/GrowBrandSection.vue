<template>
  <section id="about" class="grow-brand-section">
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

      <!-- Aquatic bubbles -->
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="bubble bubble-4"></div>
      <div class="bubble bubble-5"></div>
      <div class="bubble bubble-6"></div>
      <div class="bubble bubble-7"></div>
      <div class="bubble bubble-8"></div>
      <div class="bubble bubble-9"></div>
      <div class="bubble bubble-10"></div>
      <div class="bubble bubble-11"></div>
      <div class="bubble bubble-12"></div>
      <div class="bubble bubble-13"></div>
      <div class="bubble bubble-14"></div>
      <div class="bubble bubble-15"></div>
      <div class="bubble bubble-16"></div>
      <div class="bubble bubble-17"></div>
      <div class="bubble bubble-18"></div>
      <div class="bubble bubble-19"></div>
      <div class="bubble bubble-20"></div>
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
  overflow: hidden;
}

.grow-brand-container {
  position: relative;
}

/* Aquatic Bubbles */
.bubble {
  position: absolute;
  background: rgba(40, 152, 255, 0.15);
  border-radius: 50%;
  pointer-events: none;
  animation: rise 12s infinite ease-in-out;
  z-index: 1;
  bottom: -140px;
}

.bubble-1 {
  width: 80px;
  height: 80px;
  left: 5%;
  
  animation-delay: 0s;
}

.bubble-2 {
  width: 60px;
  height: 60px;
  left: 12%;
  
  animation-delay: 0.6s;
}

.bubble-3 {
  width: 100px;
  height: 100px;
  left: 20%;
  
  animation-delay: 1.2s;
}

.bubble-4 {
  width: 50px;
  height: 50px;
  left: 28%;
  
  animation-delay: 1.8s;
}

.bubble-5 {
  width: 70px;
  height: 70px;
  left: 35%;
  
  animation-delay: 2.4s;
}

.bubble-6 {
  width: 90px;
  height: 90px;
  left: 42%;
  
  animation-delay: 3s;
}

.bubble-7 {
  width: 55px;
  height: 55px;
  left: 50%;
  
  animation-delay: 3.6s;
}

.bubble-8 {
  width: 75px;
  height: 75px;
  left: 58%;
  
  animation-delay: 4.2s;
}

.bubble-9 {
  width: 65px;
  height: 65px;
  left: 65%;
  
  animation-delay: 4.8s;
}

.bubble-10 {
  width: 85px;
  height: 85px;
  left: 72%;
  
  animation-delay: 5.4s;
}

.bubble-11 {
  width: 95px;
  height: 95px;
  left: 80%;
  
  animation-delay: 6s;
}

.bubble-12 {
  width: 45px;
  height: 45px;
  left: 88%;
  
  animation-delay: 6.6s;
}

.bubble-13 {
  width: 70px;
  height: 70px;
  left: 15%;
  
  animation-delay: 7.2s;
}

.bubble-14 {
  width: 60px;
  height: 60px;
  left: 25%;
  
  animation-delay: 7.8s;
}

.bubble-15 {
  width: 80px;
  height: 80px;
  left: 38%;
  
  animation-delay: 8.4s;
}

.bubble-16 {
  width: 55px;
  height: 55px;
  left: 48%;
  
  animation-delay: 9s;
}

.bubble-17 {
  width: 90px;
  height: 90px;
  left: 62%;
  
  animation-delay: 9.6s;
}

.bubble-18 {
  width: 50px;
  height: 50px;
  left: 75%;
  
  animation-delay: 10.2s;
}

.bubble-19 {
  width: 65px;
  height: 65px;
  left: 85%;
  
  animation-delay: 10.8s;
}

.bubble-20 {
  width: 75px;
  height: 75px;
  left: 92%;
  
  animation-delay: 11.4s;
}

@keyframes rise {
  0% {
    bottom: -120px;
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  5% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.3;
  }
  95% {
    opacity: 0.1;
  }
  100% {
    bottom: 100%;
    transform: translateY(-120px) scale(0.5);
    opacity: 0;
  }
}
</style>

<template>
  <div class="stat-card">
    <div class="stat-number">{{ number }}</div>
    <div class="stat-label">
      <span v-html="label"></span>
      <Tooltip :text="source" position="bottom">
        <span class="info-icon-wrapper">
          <svg class="info-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <rect x="11" y="10" width="2" height="6" rx="1" fill="currentColor"/>
            <rect x="11" y="7" width="2" height="2" rx="1" fill="currentColor"/>
          </svg>
        </span>
      </Tooltip>
    </div>
    <div v-if="note" class="stat-note">{{ note }}</div>
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue';
export default {
  name: 'StatCard',
  components: { Tooltip },
  props: {
    number: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    note: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.info-icon-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.info-icon-svg {
  color: #666;
  transition: color 0.2s;
  margin-left: 0.5rem;
  position: relative;
  top: 0.12rem;
  display: inline-block;
}
.info-icon-wrapper:hover .info-icon-svg {
  color: #2898ff;
}
</style>

<template>
  <Tooltip :text="alt" position="bottom">
    <span class="secondary-logo" :style="{ color }">
      <span v-if="svgContent" v-html="svgContent" class="secondary-svg"></span>
      <img v-else :src="imgSrc" :alt="alt" />
    </span>
  </Tooltip>
</template>

<script>
import Tooltip from './Tooltip.vue';
export default {
  name: 'SecondaryLogo',
  components: { Tooltip },
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#2898ff',
    },
  },
  data() {
    return {
      svgContent: null,
    };
  },
  computed: {
    isSvg() {
      return this.src.endsWith('.svg');
    },
    imgSrc() {
      if (this.src.startsWith('http')) {
        return this.src;
      }
      try {
        return new URL(`../assets/${this.src}`, import.meta.url).href;
      } catch {
        return `/src/assets/${this.src}`;
      }
    },
  },
  async mounted() {
    if (this.isSvg) {
      try {
        const response = await fetch(this.imgSrc);
        let svg = await response.text();
        this.svgContent = svg;
      } catch (e) {
        this.svgContent = null;
      }
    }
  },
};
</script>

<style scoped>
.secondary-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  min-width: 120px;
  min-height: 60px;
}

.secondary-logo img,
.secondary-logo :deep(svg) {
  height: 60px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  display: block;
}

.secondary-svg {
  display: block;
  height: 60px;
  width: auto;
  max-width: 140px;
}
</style>

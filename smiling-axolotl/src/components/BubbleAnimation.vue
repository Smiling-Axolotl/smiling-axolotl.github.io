<template>
  <div class="bubbles-container">
    <div
      v-for="bubble in bubbles"
      :key="bubble.id"
      class="bubble"
      :style="bubble.style"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'BubbleAnimation',
  data() {
    return {
      bubbles: [],
      bubbleId: 0,
    }
  },
  mounted() {
    this.startBubbleAnimation();
  },
  beforeUnmount() {
    this.stopBubbleAnimation();
  },
  methods: {
    createBubble() {
      const bubble = {
        id: this.bubbleId++,
        style: this.generateBubbleStyle(),
      };
      
      this.bubbles.push(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        this.removeBubble(bubble.id);
      }, 8000); // 8s animation duration + buffer
    },

    generateBubbleStyle() {
      // Random size between 4px and 20px
      const size = Math.random() * 16 + 4;
      
      // Random horizontal position
      const leftPosition = Math.random() * 100;
      
      // Random animation duration between 6-10 seconds
      const duration = Math.random() * 4 + 6;
      
      // Random delay before starting
      const delay = Math.random() * 2;
      
      // Random opacity between 0.3 and 0.8
      const opacity = Math.random() * 0.5 + 0.3;
      
      // Slight horizontal drift
      const drift = (Math.random() - 0.5) * 50; // -25px to +25px
      
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${leftPosition}%`,
        opacity: opacity,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--drift': `${drift}px`,
      };
    },

    removeBubble(id) {
      const index = this.bubbles.findIndex(bubble => bubble.id === id);
      if (index > -1) {
        this.bubbles.splice(index, 1);
      }
    },

    startBubbleAnimation() {
      // Create initial bubbles
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          this.createBubble();
        }, i * 1000);
      }
      
      // Create new bubbles periodically
      this.bubbleInterval = setInterval(() => {
        // Random chance to create 1-2 bubbles
        const bubbleCount = Math.random() > 0.7 ? 2 : 1;
        for (let i = 0; i < bubbleCount; i++) {
          setTimeout(() => {
            this.createBubble();
          }, i * 500);
        }
      }, 2000);
    },

    stopBubbleAnimation() {
      if (this.bubbleInterval) {
        clearInterval(this.bubbleInterval);
      }
    },
  }
}
</script>

<style scoped>
.bubbles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.bubble {
  position: absolute;
  bottom: -20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(40, 152, 255, 0.3));
  border-radius: 50%;
  animation: bubbleFloat 7s linear infinite;
  box-shadow: 
    inset 0 0 10px rgba(255, 255, 255, 0.3),
    0 0 15px rgba(40, 152, 255, 0.2);
}

@keyframes bubbleFloat {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  
  10% {
    opacity: 1;
  }
  
  50% {
    transform: translateY(-50vh) translateX(var(--drift, 0px)) scale(1.1);
  }
  
  90% {
    opacity: 0.8;
  }
  
  100% {
    transform: translateY(-100vh) translateX(calc(var(--drift, 0px) * 1.5)) scale(0.8);
    opacity: 0;
  }
}

/* Add some variety with different bubble types */
.bubble:nth-child(3n) {
  background: linear-gradient(135deg, rgba(173, 216, 230, 0.6), rgba(40, 152, 255, 0.4));
  animation-timing-function: ease-in-out;
}

.bubble:nth-child(5n) {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(135, 206, 235, 0.3));
  box-shadow: 
    inset 0 0 8px rgba(255, 255, 255, 0.5),
    0 0 12px rgba(135, 206, 235, 0.3);
}

.bubble:nth-child(7n) {
  animation-duration: 9s !important;
  background: linear-gradient(135deg, rgba(240, 248, 255, 0.7), rgba(40, 152, 255, 0.2));
}
</style>

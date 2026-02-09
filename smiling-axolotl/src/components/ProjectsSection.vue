<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <h2 class="projects-title">
        <i18n-t keypath="projects.title" tag="span">
          <template #projects>
            <span class="projects-highlight">{{ $t('projects.projects') }}</span>
          </template>
        </i18n-t>
      </h2>
      
      <div class="projects-carousel">
        <button 
          class="carousel-nav carousel-prev" 
          @click="prevSlide"
          :aria-label="$t('projects.previous')"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="carousel-track-container">
          <div 
            class="carousel-track" 
            :class="{ 'animating': isAnimating }"
          >
            <div 
              v-for="(project, index) in visibleProjects" 
              :key="`${project.title}-${index}`"
              class="project-card"
              :class="{ 
                'center': index === 1,
                'side': index !== 1 
              }"
            >
              <div class="project-image-container">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="project-image"
                />
                <div class="project-content">
                  <div class="project-badges">
                    <span 
                      v-for="(badge, badgeIndex) in project.badges" 
                      :key="badgeIndex"
                      class="project-badge"
                      :class="`badge-${badge.toLowerCase()}`"
                    >
                      {{ badge }}
                    </span>
                  </div>
                  <h3 class="project-title">{{ project.title }}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Gradient overlays for edge cards -->
          <div class="carousel-gradient carousel-gradient-left"></div>
          <div class="carousel-gradient carousel-gradient-right"></div>
        </div>

        <button 
          class="carousel-nav carousel-next" 
          @click="nextSlide"
          :aria-label="$t('projects.next')"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <CustomButton 
        variant="tertiary" 
        class="shimmer discover-btn"
        @click="discoverMore"
        :aria-label="$t('projects.discover')"
      >
        {{ $t('projects.discover') }}
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </CustomButton>
    </div>
  </section>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  name: 'ProjectsSection',
  components: {
    CustomButton
  },
  data() {
    return {
      currentIndex: 0,
      isAnimating: false,
      slideDirection: '',
      allProjects: [
        {
          title: 'Brasa, Border Shefy',
          image: new URL('../assets/projects/project1.svg', import.meta.url).href,
          badges: ['PARTNERSHIP', 'THIRD-PARTY']
        },
        {
          title: 'Be a Wizard! Tycoon!',
          image: new URL('../assets/projects/project2.svg', import.meta.url).href,
          badges: ['OWNERSHIP']
        },
        {
          title: 'Catch The Brainrot',
          image: new URL('../assets/projects/project3.svg', import.meta.url).href,
          badges: ['PARTNERSHIP', 'THIRD-PARTY']
        },
        {
          title: 'Wizard Academy',
          image: new URL('../assets/projects/project2.svg', import.meta.url).href,
          badges: ['OWNERSHIP', 'GAME-JAM']
        },
        {
          title: 'Space Adventure',
          image: new URL('../assets/projects/project1.svg', import.meta.url).href,
          badges: ['PARTNERSHIP']
        }
      ]
    }
  },
  computed: {
    visibleProjects() {
      const total = this.allProjects.length;
      const prev = (this.currentIndex - 1 + total) % total;
      const curr = this.currentIndex;
      const next = (this.currentIndex + 1) % total;
      
      return [
        this.allProjects[prev],
        this.allProjects[curr],
        this.allProjects[next]
      ];
    }
  },
  methods: {
    nextSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.slideDirection = 'next';
      
      this.currentIndex = (this.currentIndex + 1) % this.allProjects.length;
      
      setTimeout(() => {
        this.isAnimating = false;
        this.slideDirection = '';
      }, 600);
    },
    prevSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.slideDirection = 'prev';
      
      this.currentIndex = (this.currentIndex - 1 + this.allProjects.length) % this.allProjects.length;
      
      setTimeout(() => {
        this.isAnimating = false;
        this.slideDirection = '';
      }, 600);
    },
    discoverMore() {
      window.open('https://www.roblox.com/communities/12277287/Smiling-Axolotl', '_blank');
    }
  }
}
</script>

<style scoped>
.projects-section {
  background: white;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.projects-title {
  font-family: 'Dela Gothic One', cursive;
  font-size: 3rem;
  color: #1a1a1a;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 3rem;
}

.projects-highlight {
  color: #2898ff;
}

.projects-carousel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.carousel-track-container {
  flex: 1;
  overflow: visible;
  padding: 2rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-track {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
}

.carousel-track.animating .project-card {
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.project-card {
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
}

.project-card.side {
  width: 28%;
  opacity: 0.6;
  transform: scale(0.85);
}

.project-card.center {
  width: 38%;
  opacity: 1;
  transform: scale(1);
  z-index: 10;
}

.project-card:hover {
  opacity: 1;
}

.project-card.center:hover {
  transform: scale(1.03);
}

.project-card.side:hover {
  transform: scale(0.88);
}

.project-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.project-card.center .project-image-container {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

.project-badge {
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-family: 'Dela Gothic One', cursive;
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.project-card.center .project-badge {
  font-size: 0.7rem;
  padding: 0.45rem 1rem;
}

/* Badge color variants */
.badge-ownership {
  background: #2898ff;
  color: white;
}

.badge-partnership {
  background: #FAC020;
  color: #1a1a1a;
}

.badge-third-party {
  background: #FF4757;
  color: white;
}

.badge-game-jam {
  background: #9b59b6;
  color: white;
}

.project-title {
  font-family: 'Dela Gothic One', cursive;
  font-size: 1.1rem;
  color: white;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  padding: 1.5rem;
  padding-top: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 70%, transparent 100%);
  margin: -1.5rem;
  margin-top: auto;
}

.project-card.center .project-title {
  font-size: 1.3rem;
}

/* Gradient overlays for edge cards */
.carousel-gradient {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 150px;
  pointer-events: none;
  z-index: 15;
}

.carousel-gradient-left {
  left: 0;
  background: linear-gradient(to right, white 0%, transparent 100%);
}

.carousel-gradient-right {
  right: 0;
  background: linear-gradient(to left, white 0%, transparent 100%);
}

.carousel-nav {
  background: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  z-index: 20;
  position: relative;
}

.carousel-nav:hover {
  background: #2898ff;
  color: white;
  transform: scale(1.15);
  box-shadow: 0 6px 20px rgba(40, 152, 255, 0.4);
}

.carousel-nav:active {
  transform: scale(1.05);
}

.carousel-nav svg {
  width: 28px;
  height: 28px;
  color: #2898ff;
  transition: color 0.3s ease;
}

.carousel-nav:hover svg {
  color: white;
}

.discover-btn {
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.discover-btn .btn-icon {
  width: 20px;
  height: 20px;
}

/* Mobile responsive */
@media (max-width: 1024px) {
  .project-card.side {
    width: 26%;
  }

  .project-card.center {
    width: 42%;
  }

  .carousel-gradient {
    width: 100px;
  }
}

@media (max-width: 768px) {
  .projects-title {
    font-size: 2rem;
  }

  .project-card.side {
    display: none;
  }

  .project-card.center {
    width: 90%;
    transform: scale(1);
  }

  .carousel-nav {
    width: 50px;
    height: 50px;
  }

  .carousel-nav svg {
    width: 24px;
    height: 24px;
  }

  .projects-carousel {
    gap: 1rem;
  }

  .carousel-gradient {
    display: none;
  }

  .project-title {
    font-size: 1rem;
  }

  .project-badge {
    font-size: 0.6rem;
    padding: 0.3rem 0.7rem;
  }

  .project-card.center .project-badge {
    font-size: 0.6rem;
    padding: 0.3rem 0.7rem;
  }

  .project-card.center .project-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 3rem 0;
  }

  .projects-container {
    padding: 0 1rem;
  }

  .project-card.center {
    width: 100%;
  }

  .project-content {
    padding: 1rem;
  }

  .project-title {
    padding: 1rem;
  }
}
</style>

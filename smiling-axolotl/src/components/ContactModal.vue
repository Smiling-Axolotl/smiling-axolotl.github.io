<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container">
        <button class="close-button" @click="closeModal" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="modal-content">
          <h2 class="modal-title">{{ $t('contact.modalTitle') }}</h2>
          <p class="modal-subtitle">{{ $t('contact.modalSubtitle') }}</p>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
            class="contact-form"
          >
            <!-- Honeypot field for spam protection -->
            <input type="hidden" name="form-name" value="contact" />
            <div class="honeypot">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </div>

            <!-- Subject Field -->
            <div class="form-group">
              <label for="subject">{{ $t('contact.subject') }}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                v-model="formData.subject"
                :placeholder="$t('contact.subjectPlaceholder')"
                required
              />
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email">{{ $t('contact.email') }}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                v-model="formData.email"
                :placeholder="$t('contact.emailPlaceholder')"
                required
              />
            </div>

            <!-- Message Field -->
            <div class="form-group">
              <label for="message">{{ $t('contact.message') }}</label>
              <textarea 
                id="message" 
                name="message" 
                v-model="formData.message"
                :placeholder="$t('contact.messagePlaceholder')"
                rows="6"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              <span v-if="!isSubmitting">{{ $t('contact.send') }}</span>
              <span v-else>{{ $t('contact.sending') }}</span>
            </button>

            <!-- Success Message -->
            <div v-if="submitSuccess" class="success-message">
              {{ $t('contact.successMessage') }}
            </div>

            <!-- Error Message -->
            <div v-if="submitError" class="error-message">
              {{ $t('contact.errorMessage') }}
            </div>
          </form>
        </div>

        <!-- Aquatic decorations -->
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
        <div class="bubble bubble-4"></div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ContactModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        subject: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: false
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        // Reset form and messages when modal closes
        this.resetForm();
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    resetForm() {
      this.formData = {
        subject: '',
        email: '',
        message: ''
      };
      this.submitSuccess = false;
      this.submitError = false;
    },
    async handleSubmit(e) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        const formData = new FormData(e.target);
        
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
          this.submitSuccess = true;
          this.formData = {
            subject: '',
            email: '',
            message: ''
          };
          
          // Close modal after 2 seconds
          setTimeout(() => {
            this.closeModal();
          }, 2000);
        } else {
          this.submitError = true;
        }
      } catch (error) {
        console.error('Form submission error:', error);
        this.submitError = true;
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 20, 40, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-container {
  position: relative;
  background: linear-gradient(135deg, #2898ff 0%, #1e7acc 100%);
  border-radius: 24px;
  max-width: 550px;
  width: 100%;
  max-height: 85vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.modal-content {
  padding: 1.75rem 2rem 1.5rem 2rem;
}

.modal-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin: 0 0 0.25rem 0;
  text-align: center;
}

.modal-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.25rem 0;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.honeypot {
  position: absolute;
  left: -9999px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.form-group input,
.form-group textarea {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  padding: 0.65rem 0.875rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.submit-button {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background: white;
  color: #2898ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-top: 0.25rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  padding: 0.65rem;
  background: rgba(76, 175, 80, 0.9);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
}

.error-message {
  padding: 0.65rem;
  background: rgba(244, 67, 54, 0.9);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
}

/* Aquatic Bubbles */
.bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  pointer-events: none;
  animation: rise 8s infinite ease-in-out;
}

.bubble-1 {
  width: 60px;
  height: 60px;
  bottom: -60px;
  left: 10%;
  animation-delay: 0s;
}

.bubble-2 {
  width: 40px;
  height: 40px;
  bottom: -40px;
  right: 15%;
  animation-delay: 2s;
}

.bubble-3 {
  width: 80px;
  height: 80px;
  bottom: -80px;
  left: 70%;
  animation-delay: 4s;
}

.bubble-4 {
  width: 50px;
  height: 50px;
  bottom: -50px;
  right: 40%;
  animation-delay: 6s;
}

@keyframes rise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    transform: translateY(-600px) scale(0.5);
    opacity: 0;
  }
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    padding: 1.5rem 1.5rem 1.25rem 1.5rem;
  }

  .modal-title {
    font-size: 1.4rem;
  }

  .modal-subtitle {
    font-size: 0.8rem;
  }

  .contact-form {
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 1.25rem 1.25rem 1rem 1.25rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-subtitle {
    font-size: 0.75rem;
  }

  .submit-button {
    font-size: 0.9rem;
    padding: 0.65rem 1.25rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.85rem;
    padding: 0.6rem 0.75rem;
  }

  .form-group textarea {
    min-height: 70px;
  }
}
</style>

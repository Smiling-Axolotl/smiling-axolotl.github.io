<template>
    <button :class="['app-btn', variant, extraClass]">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        variant: {
            type: String,
            default: 'primary', // 'primary' or 'secondary'
        },
        extraClass: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped>
.app-btn {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 20px;
    font-family: 'Dela Gothic One', cursive;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    text-decoration: none;
}

.app-btn.shimmer {
  position: relative; /* Crucial for pseudo-element positioning */
  display: inline-block;
  overflow: hidden;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  z-index: 1;
}

.app-btn.shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%; /* Start off-screen to the left */
  width: 75%; /* Width of the shimmer itself */
  height: 100%;
  background: linear-gradient(
    100deg, /* Angle of the shimmer */
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 80%
  );
  transform: skewX(-25deg); /* Angle the shimmer shape */
  transition: left 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth, custom timing */
  z-index: -1; /* Place shimmer behind button text but above background */
}
  
.app-btn.shimmer:hover::before,
.app-btn.shimmer:focus-visible::before {
  left: 125%; /* Move shimmer across and off-screen to the right */
}

.app-btn:hover {
    transform: translateY(-2px);
    outline: none;
}

.app-btn:active {
    transform: scale(.95) translateY(2px);
}

.app-btn.primary {
    background: #2898FF;
    color: white;
}

.app-btn.primary:hover {
    background: color-mix(in srgb, #2898FF, black 20%);
    box-shadow: 0 0 20px rgba(255, 255, 255, .3);
}

.app-btn.secondary {
    background: white;
    color: #2898FF;
    border: 2px solid #2898FF;
}

.app-btn.secondary:hover {
    background: #2898FF;
    color: white;
    border: 2px solid #2898FF;
    box-shadow: 0 0 0 2px white;
}
</style>

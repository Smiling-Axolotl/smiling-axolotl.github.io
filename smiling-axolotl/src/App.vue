<template>
  <div class="min-h-screen flex flex-col bg-white w-full">
    <!-- Header with wave curve -->
    <header class="bg-blue-400 text-white relative w-full">
      <div class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center space-x-3">
        <img src="./assets/logoAxolotl.svg" alt="Smiling Axolotl Logo" class="w-10 h-10" />
        <img src="./assets/logo.svg" alt="Smiling Axolotl Logo" class="w-10 h-10" />
      </div>
      <!-- SVG wave bottom curve -->
      <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg class="block w-full h-12 md:h-16" viewBox="0 0 1440 45" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,30 C720,60 720,0 1440,30 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-12">
      <div class="flex-1 text-center md:text-left md:pr-12">
        <h3 class="text-gray-600 font-bold uppercase tracking-wide mb-2">
          Created by players for players
        </h3>
        <h1 class="text-4xl md:text-6xl font-extrabold text-blue-500 leading-tight mb-6">
          Building Immersive<br class="hidden md:block" /> Experiences
        </h1>
        <p class="text-gray-700 mb-8">
          We’re a new game development studio building immersive experiences
          for brands, artists, and communities.
        </p>
        <button
          class="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition"
        >
          Work With Us
        </button>
      </div>
      <div class="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src="./assets/axolotl.svg"
          alt="Axolotl Illustration"
          class="w-80 md:w-96 opacity-90"
        />
      </div>
    </main>
  </div>
</template>

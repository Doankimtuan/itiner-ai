<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="dark:border-gray-800 bg-transparent absolute z-10 w-full">
      <nav
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <!-- Logo Section -->
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="flex items-center gap-2">
            <h1 class="text-2xl font-bold text-white">ItinerAI</h1>
          </NuxtLink>
          <!-- Decorative Flip-flops -->
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.to"
            class="text-white hover:text-gray-200 transition-colors"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Member Area Button -->
          <UButton
            to="/member"
            variant="outline"
            class="border-white text-white hover:bg-white hover:text-teal-600 transition-colors"
          >
            會員專區
          </UButton>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800">
      <div class="container mx-auto p-4">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          © 2024 BonVoyage. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navigationItems = [
  { label: "熱門景點", to: "/hot-spots" },
  { label: "VR專區", to: "/vr" },
  { label: "出國旅遊", to: "/international" },
  { label: "台灣旅遊", to: "/taiwan" },
  { label: "熱搜遊記", to: "/blog" },
  { label: "我的行程", to: "/itinerary" },
];
</script>

<style scoped>
/* Optional: Add custom styles for hover effects or transitions */
.router-link-active {
  @apply font-medium;
}

@media (max-width: 640px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .flex.items-center.gap-6 {
    flex-direction: column;
    gap: 2;
  }

  .flex.items-center.gap-4 {
    flex-direction: column;
    gap: 2;
  }

  header {
    padding: 1rem;
  }

  footer {
    text-align: center;
  }
}
</style>

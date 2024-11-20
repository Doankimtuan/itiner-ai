<template>
  <div class="relative min-h-[600px]">
    <!-- Hero Section -->
    <div class="relative">
      <!-- Content -->
      <div
        class="absolute top-0 left-0 w-full h-full p-12 flex flex-col justify-center"
      >
        <div class="space-y-5 font-['Montserrat'] text-white">
          <p class="text-sm tracking-wider">MOUNTAINS | MUSEUMS | BEACHES</p>
          <h2 class="text-4xl font-bold leading-tight">
            Life is a journey<br />
            Not a destination.
          </h2>
        </div>
      </div>

      <!-- Background Image -->
      <div>
        <img
          src="~/assets/images/bg-header.png"
          alt="Aerial view of ocean"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Search Bar -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl">
      <UCard class="p-4">
        <div class="flex items-center gap-4">
          <USelect
            v-model="hotelType"
            :options="['飯店']"
            placeholder="飯店"
            class="w-40"
          />
          <UInput
            placeholder="輸入目的地、飯店名稱....."
            icon="i-heroicons-magnifying-glass"
            class="flex-grow"
          />
          <UDatePicker v-model="checkIn" placeholder="Check-in" class="w-40" />
          <UDatePicker
            v-model="checkOut"
            placeholder="Check-out"
            class="w-40"
          />
          <USelect
            v-model="guests"
            :options="['4 adults']"
            placeholder="Guests"
            class="w-40"
          />
          <UButton color="orange" variant="solid" label="搜尋" class="px-8" />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const hotelType = ref("飯店");
const checkIn = ref(null);
const checkOut = ref(null);
const guests = ref("4 adults");
</script>

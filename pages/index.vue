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
      <UCard class="p-4 bg-white/40 border-none shadow-lg">
        <div class="flex items-center gap-4">
          <UInputMenu
            v-model="selectedCity"
            :items="filteredCities"
            :loading="isLoadingSearchCity"
            placeholder="Choose a city"
            icon="i-heroicons-magnifying-glass"
            class="flex-grow"
            @input="searchCities"
          />
          <UDatePicker
            v-model="checkIn"
            placeholder="Check-in"
            :initial-value="new Date('2019-06-19')"
            class="w-40"
          />
          <UDatePicker
            v-model="checkOut"
            placeholder="Check-out"
            :initial-value="new Date('2019-06-24')"
            class="w-40"
          />
          <USelect
            v-model="guests"
            :options="['4 adults']"
            icon="i-heroicons-user-group"
            placeholder="Guests"
            class="w-40"
          />
          <UButton
            color="primary"
            variant="solid"
            label="搜尋"
            class="px-8 bg-orange-400 hover:bg-orange-500"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchCity } from "~/hooks/useSearchCity";
import type { ICity } from "~/types/home";

const selectedCity = ref<ICity | undefined>(undefined);
const cities = ref<ICity[]>([]);
const { mutate: searchCity, isPending: isLoadingSearchCity } = useSearchCity({
  handleSuccess: handleSearchSuccess,
});

const filteredCities = computed<ICity[]>(() => {
  console.log("==========", cities.value);
  return cities.value.map((city) => ({
    name: city.name,
    country: city.country,
  }));
});

async function handleSearchSuccess(data: unknown) {
  console.log("========== data", data);
}

async function searchCities(query: { target: { value: string } }) {
  if (!query || query.target.value.length < 2) {
    cities.value = [];
    return;
  }
  searchCity(query.target.value);
}

const checkIn = ref<Date>(new Date("2019-06-19"));
const checkOut = ref<Date>(new Date("2019-06-24"));
const guests = ref<string>("4 adults");
</script>

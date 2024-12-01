<template>
  <div class="relative min-h-[600px]">
    <!-- Hero Section -->
    <div class="relative">
      <!-- Content -->
      <div
        class="absolute top-0 left-0 w-full h-full p-12 flex flex-col justify-center"
      >
        <div class="space-y-5 font-['Montserrat'] text-white pl-20">
          <p class="text-sm tracking-wider">MOUNTAINS | MUSEUMS | BEACHES</p>
          <h2 class="text-5xl font-bold leading-tight">
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
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4"
    >
      <UCard class="p-4 bg-white/40 border-none shadow-lg">
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <UInputMenu
            v-model="selectedCity"
            :loading="homeStore.loadingSearchCity"
            placeholder="Choose a city"
            icon="i-heroicons-magnifying-glass"
            class="flex-grow"
            :search="searchCities"
            :debounce="300"
            searchable
            option-attribute="name"
          />
          <UPopover :popper="{ placement: 'bottom-start' }">
            <UInput
              v-model="formattedDateRange"
              readonly
              icon="i-heroicons-calendar-days-20-solid"
              placeholder="Select Dates"
              class="w-full sm:w-64"
            />
            <template #panel="{ close }">
              <div
                class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800"
              >
                <DatePicker v-model="journeyTime" @close="close" />
              </div>
            </template>
          </UPopover>

          <USelect
            v-model="guests"
            :options="['4 adults']"
            icon="i-heroicons-user-group"
            placeholder="Guests"
            class="w-full sm:w-40"
          />
          <UButton
            color="primary"
            variant="solid"
            label="搜尋"
            class="w-full sm:w-auto px-8 bg-orange-400 hover:bg-orange-500"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format, sub } from "date-fns";
import { useHomeStore } from "~/stores/home";
import type { ICity, IJourneyTime } from "~/types/home";

const guests = ref<string>("4 adults");
const selectedCity = ref<ICity | undefined>(undefined);
const homeStore = useHomeStore();
const journeyTime = ref<IJourneyTime>({
  start: sub(new Date(), { days: 14 }),
  end: new Date(),
});

async function searchCities(query: string) {
  if (!query || query.length < 0) {
    return Promise.resolve([]);
  }

  const result = await homeStore.searchCity(query);
  return result;
}

const formattedDateRange = computed(() => {
  if (journeyTime.value.start && journeyTime.value.end) {
    return `${format(journeyTime.value.start, "d MMM, yyy")} - ${format(journeyTime.value.end, "d MMM, yyy")}`;
  }
});
</script>

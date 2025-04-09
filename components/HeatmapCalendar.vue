<template>
  <div class="flex w-full flex-col items-center py-4">
    <div class="mb-4 flex items-center space-x-4">
      <button
        @click="prevYear"
        class="cursor-pointer rounded bg-gray-200 px-2 py-1 text-white hover:bg-gray-300"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <h2 class="w-80 text-center text-xl font-semibold text-gray-800">
        sessions en {{ currentYear }}
      </h2>
      <button
        @click="nextYear"
        class="cursor-pointer rounded bg-gray-200 px-2 py-1 text-white hover:bg-gray-300"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
    <div class="grid grid-flow-col grid-cols-53 grid-rows-7 gap-1">
      <div
        v-for="(count, i) in heatmapData"
        :key="i"
        :title="`Jour ${i + 1} : ${count} session(s)`"
        :class="['h-2 w-2', getColor(count)]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps<{
  heatmap: Record<string, number>;
}>();

const currentYear = ref(new Date().getFullYear());
const heatmapData = computed(() => {
  return generateHeatmapData(currentYear.value, props.heatmap);
});

function generateHeatmapData(
  year: number,
  heatmap: Record<string, number>,
): number[] {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const days = isLeap ? 366 : 365;
  return Array.from({ length: days }, (n, i) => {
    const date = addDays(new Date(year, 0, 1), i);
    return heatmap[date.toISOString().split("T")[0]] || 0;
  });
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date); // create a new Date instance to avoid mutating the original
  result.setDate(result.getDate() + days);
  return result;
}

function prevYear() {
  currentYear.value--;
}

function nextYear() {
  currentYear.value++;
}

function getColor(count: number): string {
  if (!count) return "bg-gray-200";
  if (count === 1) return "bg-blue-100";
  if (count <= 3) return "bg-blue-300";
  if (count <= 5) return "bg-blue-500";
  return "bg-blue-700";
}
</script>

<style scoped>
.grid-cols-53 {
  grid-template-columns: repeat(53, 0.4rem);
}
</style>

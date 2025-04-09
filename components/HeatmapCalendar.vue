<template>
  <div class="flex w-full flex-col items-center py-4">
    <h2 class="mb-4 text-center text-xl font-semibold text-gray-800">
      Répartition des sessions en 2025
    </h2>
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
const heatmapData = Array.from({ length: 366 }, () =>
  Math.floor(Math.random() * 5),
); // Placeholder

function getColor(count: number): string {
  if (count === 0) return "bg-gray-200";
  if (count === 1) return "bg-blue-100";
  if (count === 2) return "bg-blue-300";
  if (count === 3) return "bg-blue-500";
  return "bg-blue-700";
}
</script>

<style scoped>
.grid-cols-53 {
  grid-template-columns: repeat(53, 0.4rem);
}
</style>

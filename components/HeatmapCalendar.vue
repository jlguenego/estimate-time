<template>
  <div class="mx-auto w-full max-w-4xl">
    <h2 class="mb-4 text-center text-xl font-semibold text-gray-800">
      Répartition des sessions
    </h2>
    <div class="grid-cols-53 grid grid-rows-7 gap-1">
      <div
        v-for="(count, i) in heatmapData"
        :key="i"
        :title="`Jour ${i + 1} : ${count} session(s)`"
        :class="['h-3 w-3 rounded sm:h-4 sm:w-4', getColor(count)]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const heatmapData = Array.from({ length: 371 }, () =>
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
  grid-template-columns: repeat(53, minmax(0, 1fr));
}
</style>

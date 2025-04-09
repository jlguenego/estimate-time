<template>
  <div class="w-full max-w-4xl mx-auto">
    <h2 class="text-xl font-semibold text-gray-800 mb-4 text-center">
      Répartition des sessions
    </h2>
    <div class="grid grid-cols-53 grid-rows-7 gap-1">
      <div
        v-for="(count, i) in heatmapData"
        :key="i"
        :title="`Jour ${i + 1} : ${count} session(s)`"
        :class="['w-3 h-3 sm:w-4 sm:h-4 rounded', getColor(count)]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const heatmapData = Array.from({ length: 371 }, () =>
  Math.floor(Math.random() * 5)
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

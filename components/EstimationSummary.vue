<template>
  <div
    class="w-full max-w-xl bg-gray-50 rounded-xl p-6 shadow-md text-center space-y-4"
  >
    <h2 class="text-xl font-semibold text-gray-800">Estimation</h2>
    <div
      class="flex flex-col sm:flex-row justify-center gap-6 text-2xl font-bold text-blue-700"
    >
      <div>
        <span class="block text-sm font-medium text-gray-500">Temps total</span>
        {{ hours }} h
      </div>
      <div>
        <span class="block text-sm font-medium text-gray-500">Sessions</span>
        {{ sessions }}
      </div>
      <div>
        <span class="block text-sm font-medium text-gray-500">Journées</span>
        {{ workdays }} j
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hours: number;
  sessions: number;
  workdays: number;
}>();
</script>

<template>
  <div class="w-full rounded-xl bg-gray-50 p-6 text-center shadow-md">
    <h2 class="text-xl font-semibold text-gray-800">Estimation</h2>
    <div
      class="flex flex-col justify-center gap-6 text-2xl font-bold text-blue-700 sm:flex-row"
    >
      <div>
        <span class="block text-sm font-medium text-gray-500">
          Total duration
        </span>
        {{ hours }} h
      </div>
      <div>
        <span class="block text-sm font-medium text-gray-500"> Sessions </span>
        {{ sessions }}
      </div>
      <div>
        <span class="block text-sm font-medium text-gray-500">
          Working days
        </span>
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

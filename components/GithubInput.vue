<template>
  <form
    class="flex w-full max-w-xl flex-col items-stretch gap-4 sm:flex-row"
    @submit.prevent="emitEstimate"
  >
    <input
      v-model="repo"
      type="text"
      placeholder="ex : facebook/react"
      class="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base"
    />
    <button
      type="submit"
      class="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      Estimer
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const repo = ref("");

// Émission d’un événement vers le parent
const emit = defineEmits<{
  (e: "estimate", value: string): void;
}>();

const emitEstimate = () => {
  if (repo.value.trim()) {
    emit("estimate", repo.value.trim());
  }
};
</script>

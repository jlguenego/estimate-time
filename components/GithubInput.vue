<template>
  <form
    class="w-full max-w-xl flex flex-col sm:flex-row items-stretch gap-4"
    @submit.prevent="emitEstimate"
  >
    <input
      v-model="repo"
      type="text"
      placeholder="ex : facebook/react"
      class="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
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

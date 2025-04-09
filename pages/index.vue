<script setup lang="ts">
import { useEstimateStore } from "~/stores/estimate";

const estimate = useEstimateStore();

const handleEstimate = (repo: string) => {
  estimate.estimateFromRepo(repo);
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div
      class="flex max-w-192 flex-col items-center rounded-2xl bg-white px-12 py-4 text-gray-900 shadow-2xl"
    >
      <!-- Titre principal -->
      <Header />

      <!-- Formulaire d'entrée GitHub -->
      <GithubInput @estimate="handleEstimate" />

      <!-- Résumé de l'estimation -->
      <EstimationSummary
        :hours="estimate.hours"
        :sessions="estimate.sessions"
        :workdays="estimate.workdays"
      />

      <!-- Dataviz calendrier thermique -->
      <HeatmapCalendar :heatmap="estimate.heatmap" />
    </div>
  </div>
</template>

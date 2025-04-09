<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 p-6">
    <div
      class="flex flex-col items-center space-y-12 rounded-2xl bg-white px-12 py-8 text-gray-900 shadow-2xl"
    >
      <!-- Titre principal -->
      <Header />

      <!-- Formulaire d'entrée GitHub -->
      <GithubInput @estimate="handleEstimate" />

      <!-- Résumé de l'estimation -->
      <EstimationSummary :hours="24" :sessions="48" :workdays="3" />

      <!-- Dataviz calendrier thermique -->
      <HeatmapCalendar />
    </div>
  </div>
</template>

<script setup lang="ts">
// Pas besoin de script ici, tout passe par les composants

const handleEstimate = (repo: string) => {
  // Logique pour gérer l'estimation ici
  console.log("Estimation demandée pour le dépôt :", repo);
};
</script>

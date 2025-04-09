<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center p-6">
    <div
      class="rounded-lg shadow-lg min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 py-10 space-y-12"
    >
      <!-- Titre principal -->
      <Header />

      <!-- Formulaire d'entrée GitHub -->
      <GithubInput @estimate="handleEstimate" />

      <!-- Illustration vectorielle -->
      <Illustration />

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

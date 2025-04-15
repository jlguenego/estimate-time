<template>
  <div class="flex min-h-screen justify-center bg-gray-100 p-4">
    <div
      class="flex max-w-192 flex-col items-center rounded-2xl bg-white px-12 py-4 text-gray-900 shadow-2xl"
    >
      <h1 class="mb-4 text-2xl font-bold text-blue-600">
        Réglages de l’estimation
      </h1>

      <p>
        Une session correspond à au moins un commit. On estime que pour commiter
        le développeur et les concepteurs auront passé au moins un temps minimum
        de durée de session. Une session peut contenir plusieurs commits. Dans
        ce cas, la durée de la session est la somme des durées entre chaque
        commit, additionnée à la durée de la session.
      </p>

      <label class="my-6 block">
        <span class="font-bold">Durée d'une session (en minutes) :</span>
        <input
          v-model.number="settings.sessionDuration"
          type="number"
          class="w-full rounded border px-2 py-1"
          min="1"
        />
      </label>

      <NuxtLink
        to="/"
        class="rounded bg-blue-600 px-4 py-2 text-white"
        @click="onSave"
      >
        Enregistrer
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from "~/stores/settings.store";

const settings = useSettingsStore();

const onSave = () => {
  const estimate = useEstimateStore();
  estimate.resetStore();
};
</script>

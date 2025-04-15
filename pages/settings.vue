<template>
  <div class="flex min-h-screen justify-center bg-gray-100 p-4">
    <div
      class="flex max-w-192 flex-col items-center rounded-2xl bg-white px-12 py-4 text-gray-900 shadow-2xl"
    >
      <h1 class="mb-4 text-2xl font-bold text-blue-600">Settings</h1>

      <p>
        A session corresponds to at least one commit. It is estimated that to
        make a commit, the developer and designers will have spent at least a
        minimum session duration. A session may contain several commits. In that
        case, the session duration is the sum of the time intervals between each
        commit, added to the minimum session duration.
      </p>

      <label class="my-6 block">
        <span class="font-bold"> Minimum session duration (in minutes) : </span>
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

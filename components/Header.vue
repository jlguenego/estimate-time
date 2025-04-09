<template>
  <header class="flex w-full flex-col gap-4 border-b-2 border-blue-200 pb-8">
    <div class="text-3xl font-bold text-gray-900">Estimate-Time</div>
    <div class="flex flex-wrap justify-between gap-4">
      <div class="flex max-w-96 flex-col gap-2">
        <h1 class="text-8xl font-bold text-gray-900">
          Workload
          <br />
          Estimation
        </h1>
        <h2 class="sm:text-3xl">
          Enter a github project url and estimate the time it took to a
          developer to make it.
        </h2>
      </div>
      <div class="flex justify-center">
        <img
          src="/illustrations/estimate-time.svg"
          alt="Illustration estimation de charge"
          class="w-96 object-contain"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Aucune logique nécessaire ici
</script>

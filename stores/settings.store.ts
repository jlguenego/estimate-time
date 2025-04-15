// stores/settings.ts
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  // ⚙️ Paramètre : durée d'une session (en minutes)
  const sessionDuration = ref<number>(
    getFromLocalStorage("sessionDuration", 30),
  );

  // Watch pour enregistrer automatiquement les changements
  watch(sessionDuration, (newVal) => {
    localStorage.setItem("sessionDuration", newVal.toString());
  });

  function getFromLocalStorage(key: string, defaultValue: number): number {
    const raw = localStorage.getItem(key);
    return raw ? Number(raw) : defaultValue;
  }

  return {
    sessionDuration,
  };
});

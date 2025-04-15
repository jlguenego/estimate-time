// stores/settings.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  // ⚙️ Paramètre : durée d'une session (en minutes)
  const sessionDuration = ref<number>(30); // Valeur par défaut de 30 minutes

  return {
    sessionDuration,
  };
});

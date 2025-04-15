export const useEstimateStore = defineStore("estimate", () => {
  const repo = ref("jlguenego/estimate-time");
  const sessions = ref(0);
  const hours = ref(0);
  const workdays = ref(0);

  const heatmap = ref<Record<string, number>>({});

  function resetStore() {
    sessions.value = 0;
    hours.value = 0;
    workdays.value = 0;
    heatmap.value = {};
  }

  async function estimateFromRepo() {
    const settingsStore = useSettingsStore();
    const sessionDuration = settingsStore.sessionDuration; // en minutes
    const sessionGapThreshold = sessionDuration;

    console.log("sessionDuration (min):", sessionDuration);
    console.log("sessionGapThreshold (min):", sessionGapThreshold);

    resetStore();

    const [owner, name] = repo.value.split("/");
    if (!owner || !name) return;

    let page = 1;
    const perPage = 100;
    const maxPages = 10;
    let allCommits = [];

    while (page <= maxPages) {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${name}/commits?per_page=${perPage}&page=${page}`,
      );
      const data = await res.json();

      if (!Array.isArray(data)) {
        console.error("Erreur API GitHub", data);
        break;
      }

      allCommits.push(...data);
      if (data.length < perPage) break;
      page++;
    }

    const timestamps = allCommits
      .map((c) => c.commit?.author?.date)
      .filter(Boolean)
      .map((d) => new Date(d).getTime())
      .sort((a, b) => a - b);

    const sessionsList = [];
    let currentSession: number[] = [];

    for (let i = 0; i < timestamps.length; i++) {
      const current = timestamps[i];
      const previous = timestamps[i - 1];

      if (i === 0 || current - previous > sessionGapThreshold * 60 * 1000) {
        if (currentSession.length > 0) sessionsList.push(currentSession);
        currentSession = [current];
      } else {
        currentSession.push(current);
      }
    }
    if (currentSession.length > 0) sessionsList.push(currentSession);

    sessions.value = sessionsList.length;

    let totalMinutes = 0;

    for (const session of sessionsList) {
      if (session.length === 1) {
        totalMinutes += sessionDuration;
      } else {
        let sessionMinutes = sessionDuration;
        for (let i = 1; i < session.length; i++) {
          const delta = (session[i] - session[i - 1]) / (60 * 1000); // minutes
          sessionMinutes += delta;
        }
        totalMinutes += sessionMinutes;
      }

      const dateKey = new Date(session[0]).toISOString().slice(0, 10);
      heatmap.value[dateKey] = (heatmap.value[dateKey] || 0) + 1;
    }

    hours.value = +(totalMinutes / 60).toFixed(1);
    workdays.value = Math.ceil(hours.value / 8);
  }

  return {
    repo,
    sessions,
    hours,
    workdays,
    estimateFromRepo,
    heatmap,
    resetStore,
  };
});

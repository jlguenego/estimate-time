import { formatISO, parseISO } from "date-fns"; // facultatif, sinon JS natif
export const useEstimateStore = defineStore("estimate", () => {
  const repo = ref("");
  const sessions = ref(0);
  const hours = ref(0);
  const workdays = ref(0);

  const heatmap = ref<Record<string, number>>({});

  async function estimateFromRepo(repoId: string) {
    repo.value = repoId;
    heatmap.value = {}; // reset
    sessions.value = 0;
    hours.value = 0;
    workdays.value = 0;

    const [owner, name] = repoId.split("/");
    if (!owner || !name) return;

    let page = 1;
    const perPage = 100;
    const maxPages = 10;
    let keepGoing = true;

    while (keepGoing && page <= maxPages) {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${name}/commits?per_page=${perPage}&page=${page}`,
      );
      const data = await res.json();

      if (!Array.isArray(data)) {
        console.error("Erreur API GitHub", data);
        break;
      }

      for (const commit of data) {
        const dateStr = commit.commit?.author?.date;
        if (dateStr) {
          const dateKey = dateStr.slice(0, 10); // 'YYYY-MM-DD'
          heatmap.value[dateKey] = (heatmap.value[dateKey] || 0) + 1;
        }
      }

      keepGoing = data.length === perPage;
      page++;
    }

    sessions.value = Object.values(heatmap.value).reduce((a, b) => a + b, 0);
    hours.value = +(sessions.value * 0.5).toFixed(1);
    workdays.value = Math.ceil(hours.value / 8);
  }

  return { repo, sessions, hours, workdays, estimateFromRepo, heatmap };
});

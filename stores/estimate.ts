export const useEstimateStore = defineStore("estimate", () => {
  const repo = ref("");
  const sessions = ref(0);
  const hours = ref(0);
  const workdays = ref(0);

  async function estimateFromRepo(repoId: string) {
    repo.value = repoId;
    const [owner, name] = repoId.split("/");
    if (!owner || !name) return;

    let page = 1;
    const perPage = 100;
    const maxPages = 10; // ← Limite fixée ici (modifiable)
    let totalCommits = 0;
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

      totalCommits += data.length;
      keepGoing = data.length === perPage;
      page++;
    }

    if (page > maxPages) {
      window.alert("Limite de pages atteinte, estimation partielle.");
    }

    sessions.value = totalCommits;
    hours.value = +(totalCommits * 0.5).toFixed(1);
    workdays.value = Math.ceil(hours.value / 8);
  }

  return { repo, sessions, hours, workdays, estimateFromRepo };
});

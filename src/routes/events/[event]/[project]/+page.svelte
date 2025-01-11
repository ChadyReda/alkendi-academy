<script>
  // @ts-nocheck
  import tableData from "../../../../data/business-event-teams.json";
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  const matchedData = tableData.find(
    (item) => item.route === $page.params.project
  );
</script>

<main class="h-screen px-8">
  <div class="breadcrumbs text-sm">
    <ul>
      <li>
        <a href={`${base}/events/${$page.params.event}`} class="btn btn-sm">
          back to list
        </a>
      </li>
      <li>Project</li>
    </ul>
  </div>
  <div>
    <h1 class="text-4xl font-bold py-4">{matchedData?.ProjectName}</h1>
    {#each matchedData.Teams as team_member}
      <div class="btn btn-active mr-2">{team_member}</div>
    {/each}
    <p class="text-lg py-3">{matchedData.Topic}</p>
  </div>
</main>

<script>
  
  import tableData from "../../../../data/business-event-teams.json"
  import {page} from "$app/stores"

</script>

  
<div class="p-6 maincont">
    <table class=" border-1 border-white w-full border-collapse mx-auto text-lg rounded-lg shadow-lg">
        <caption class="text-2xl font-bold">Teams</caption>
      <thead>
        <tr class="text-left text-black">
          <th class="border border-gray-300 px-6 py-4">Team Members</th>
          <th class="border border-gray-300 px-6 py-4">Topic</th>
          <th class="border border-gray-300 px-6 py-4">Project Name</th>
        </tr>
      </thead>
      <tbody>
        {#each tableData as { Teams, Topic, ProjectName, Color, route }}
          <tr class="odd:bg-white even:bg-gray-50 text-gray-800">
            <td class="border border-gray-300 px-6 py-4" style="color: {Color}">
              {Teams.join(', ')}
            </td>
            <td class="border border-gray-300 px-6 py-4" style="color: {Color}">
              {Topic}
            </td>
            <td class="border border-gray-300 px-6 py-4" style="color: {Color}">
                <a class="link" href={$page.params.event + "/" +route}>{ProjectName}</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
</div>

<style>
    table{
      background-color: white;
      height: 800px;
    }
    table thead{
      height: 60px;
      text-align: left;
    }
    table td, table th {
    border: 1px solid black;
    }
    .maincont{
      border-radius: 20px;
    }
</style>
<script>
  export let name;
  export let status;
  export let description;
  export let badges;
  export let image;
  export let route;
</script>

<a href={`events/`+route} class="event-card card bg-base-100 max-w-96 min-w-[340px] shadow-xl">
    <figure>
      <img
        src={image}
        alt="Shoes" />
    </figure>
    <div class="card-body p-6">
      <h2 class="card-title">
        {name}
        <div class="badge badge-secondary">{status}</div>
      </h2>
      <p>{description}</p>
      <div class="card-actions justify-end">
        {#each badges as badge}
          <div class={`badge-class badge border-${badge.color} text-${badge.color}-500`}>{badge.name}</div>
        {/each}
      </div>
    </div>
</a>

<style>
  .event-card{
    border: 1px solid rgba(200, 200, 200, 0.2);
  }
  .badge-class{
    padding: 5px 10px;
    text-decoration: underline;
  }
</style>
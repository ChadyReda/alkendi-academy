<script>
    import events from "../../data/events.json"
    import EventCard from "$lib/components/event.svelte"
</script>
<main class="p-6 h-svh">
    <h1 class="text-3xl font-bold mb-8">Hosted Events:</h1>
    <div>
        {#each events as event (event.name)}
            <EventCard name={event.name} route={event.route} status={event.status} description={event.description} image={event.image} badges={event.badges} />
        {/each}
    </div>
</main>

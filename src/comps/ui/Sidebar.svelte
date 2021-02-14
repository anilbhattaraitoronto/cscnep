<script>
    export let homeData;
</script>

<main>
    <h2>Executive</h2>
    <ul>
        {#each homeData.execCommittee as mem}
            <li>{mem.name}<br /> <em><b>{mem.position}</b></em></li>
        {/each}
    </ul>
    <div class="mission">
        <h3>Our Mission</h3>
        <p>{homeData.mission}</p>
    </div>
</main>

<style>
    main {
        text-align: center;
    }
    li {
        list-style: none;
    }
</style>

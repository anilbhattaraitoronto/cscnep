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
</main>

<style>
    main {
        text-align: center;
        padding: 8px 0;
        background: rgb(252, 250, 250);
    }
    li {
        list-style: none;
        padding: 8px 0;
    }
</style>

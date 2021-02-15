<script>
    export let homeData;
</script>

<main>
    <h2>Executive (ad hoc)</h2>
    <ul>
        {#each homeData.execCommittee as mem}
            <li>{mem.name}<br /> <em><b>{mem.position}</b></em></li>
        {/each}
    </ul>
</main>

<style>
    main {
        text-align: right;
        padding: 0 8px;
        background: rgb(252, 250, 250);
        letter-spacing: 1px;
        font-size: 95%;
    }
    h2 {
        padding-bottom: 20px;
        color: rgb(101, 99, 99);
    }
    li {
        list-style: none;
        padding: 8px 0;
    }
    @media (max-width: 700px) {
        main {
            text-align: left;
        }
    }
</style>

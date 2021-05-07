<script>
    import { staticData } from "../../stores/staticData.js";
</script>

{#if $staticData}
    <main>
        <h2>Upcoming events</h2>
        <ul>
            {#each $staticData.events as event}
                <li>{event.title}</li>
            {/each}
        </ul>
        <h2>Board of Directors</h2>
        <ul>
            {#each $staticData.execCommittee as mem}
                <li>{mem.name}<br /> <em><b>{mem.position}</b></em></li>
            {/each}
        </ul>
    </main>
{/if}

<style>
    main {
        text-align: right;
        padding: 0 8px;
        background: rgb(240, 237, 237);
        letter-spacing: 1px;
        font-size: 95%;
    }
    h2 {
        padding: 8px 0;
        color: rgb(101, 99, 99);
    }
    ul {
        padding: 8px 0;
    }
    li {
        list-style: none;
        padding: 8px;
        margin: 4px auto;
        background: white;
        box-shadow: 1px 1px 1px lightgray;
        border: 1px solid transparent;
        transition: 250ms all ease-in-out;
    }
    li:hover {
        border-color: rgb(198, 192, 192);
    }
    @media (max-width: 700px) {
        main {
            text-align: left;
        }
    }
</style>

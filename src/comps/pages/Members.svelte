<script>
    export let homeData;
</script>

<main>
    <h2>Members</h2>
    <ul>
        {#each homeData.members as mem}
            <div class="member">
                <h3>{mem.name}</h3>
                <img src={mem.profilePic} alt="{mem.name} profile picture" />
                <p>Chitwan Location: {mem.chitwanLocation}</p>
                <details>
                    <summary>Bio</summary>
                    <p>{mem.bio}</p>
                </details>
            </div>
        {/each}
    </ul>
</main>

<style>
    main {
        padding: 0 8px;
        background: rgb(240, 237, 237);
        letter-spacing: 1px;
        font-size: 95%;
    }
    summary {
        cursor: pointer;
    }
    h2 {
        padding: 8px 0;
        color: rgb(101, 99, 99);
        text-align: center;
    }
    ul {
        padding: 8px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .member {
        padding: 8px;
        margin: 4px auto;
        background: white;
        box-shadow: 1px 1px 1px lightgray;
        border: 1px solid transparent;
        transition: 250ms all ease-in-out;
        min-width: 300px;
    }
    .member:hover {
        border-color: rgb(198, 192, 192);
    }
    @media (max-width: 700px) {
        ul {
            grid-template-columns: 1fr;
        }
    }
</style>

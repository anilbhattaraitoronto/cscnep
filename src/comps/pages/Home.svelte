<script>
    export let siteData;
</script>

<svelte:head>
    <title>🇳🇵 CSC - Welcome 🇳🇵</title>
</svelte:head>
<main>
    <div>
        <figure>
            <img
                src="https://images.unsplash.com/photo-1562462159-bc2c0c305fdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80"
                alt="Setting sun in Chitwan National Park"
                title="Setting sun in Chitwan National Park"
                class="landing-image"
            />
            <figcaption>
                Setting sun reflected on Rapti River in Chitwan National Park.
                <i>Source</i>:
                <a
                    href="https://images.unsplash.com/photo-1562462159-bc2c0c305fdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80"
                    target="_blank"
                    rel="noreferrer">Meera Pankhania</a
                >
            </figcaption>
        </figure>
    </div>
    <div class="objectives">
        <div>
            <h2>Our Objectives</h2>
            <ul>
                {#each siteData.objectives as objective}
                    <li>{objective}</li>
                {/each}
            </ul>
        </div>

        <img
            src="https://images.unsplash.com/photo-1602129346879-b36d26670330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Rice paddy in Chitwan"
            title="Rice paddy in Chitwan"
            class="objective-image"
            rel="noreferrer"
        />
    </div>
</main>

<style>
    .landing-image {
        display: block;
        width: 100%;
        height: auto;
        margin: auto;
    }
    figcaption {
        margin-top: 20px;
        font-size: 14px;
    }
    .objectives {
        background: rgb(252, 250, 250);
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content: center;
        align-items: center;
        margin: 40px 0 20px 0;
    }
    .objective-image {
        max-width: 100%;
        max-height: auto;
        padding-right: 8px;
    }
    ul {
        padding: 20px 0;
        margin-top: 20px;
    }
    li {
        list-style: none;
        padding: 16px 0;
        line-height: 1.6;
    }
</style>

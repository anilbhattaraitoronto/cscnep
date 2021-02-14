<script>
    export let siteData;
</script>

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
                <i>Source</i>: Meera Pankhania,
                <a
                    href="https://images.unsplash.com/photo-1562462159-bc2c0c305fdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80"
                    target="_blank">Unsplash photo</a
                >
            </figcaption>
        </figure>
    </div>
    <div class="objectives">
        <ul>
            <h2>Our Objectives</h2>
            {#each siteData.objectives as objective}
                <li>{objective}</li>
            {/each}
        </ul>
        <img
            src="https://images.unsplash.com/photo-1602129346879-b36d26670330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
            class="objective-image"
        />
    </div>
</main>

<style>
    .landing-image {
        display: block;
        width: 100%;
        margin: auto;
    }
    .objectives {
        background: rgb(244, 240, 240);
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content: center;
        align-items: center;
        margin: 40px 0 20px 0;
    }
    .objective-image {
        max-width: 100%;
        padding-right: 8px;
    }
    ul {
        padding: 20px;
        margin-top: 20px;
    }
    li {
        list-style: none;
        padding: 16px 0;
        line-height: 1.6;
    }
</style>

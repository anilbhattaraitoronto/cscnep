<script>
    export let siteData;
</script>

<main>
    <h1>{siteData.siteTitle}</h1>
    <div class="landing-image">
        <figure>
            <img
                src="https://images.unsplash.com/photo-1562462159-bc2c0c305fdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80"
                alt="Setting sun in Chitwan National Park"
                title="Setting sun in Chitwan National Park"
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
    <ul>
        <h2>Our Objectives</h2>
        {#each siteData.objectives as objective}
            <li>{objective}</li>
        {/each}
    </ul>
</main>

<style>
    img {
        display: block;
        width: 100%;
        margin: auto;
    }
</style>

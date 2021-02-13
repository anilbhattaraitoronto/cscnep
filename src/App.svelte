<script>
    import Router from "svelte-spa-router";
    import Header from "./comps/ui/Header.svelte";
    //importing pages
    import Home from "./comps/pages/Home.svelte";
    import About from "./comps/pages/About.svelte";
    import Contact from "./comps/pages/Contact.svelte";
    import Footer from "./comps/ui/Footer.svelte";

    let routes = {
        "/": Home,
        "/about": About,
        "/contact": Contact,
    };

    export let siteData;
</script>

<div class="header">
    <Header />
</div>

<main class="container">
    <main class="pages">
        <Router {routes} />
    </main>
    <footer>
        <Footer />
    </footer>
</main>

<style>
    .container {
        width: 100%;
        margin: auto;
        position: relative;
        padding: 0 20px;
        max-width: 1200px;
    }
    .header {
        width: 100%;
        margin: auto;
        background: lightgray;
        box-shadow: 0 1px 0 gray;
    }
</style>

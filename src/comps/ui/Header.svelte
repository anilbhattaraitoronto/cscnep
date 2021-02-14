<script>
</script>

<main>
    <header>
        <!-- <a href="#/"> <h1>CSC</h1> </a> -->
        <h1 class="masthead">CSC</h1>
        <nav>
            <a href="#/">Home</a>
            <a href="#/about">About</a>
            <a href="#/contact">Contact </a>
        </nav>
    </header>
</main>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: auto;
        padding: 16px 0;
    }
    header h1 {
        margin-left: 20px;
    }
    a {
        display: inline-block;
        margin-right: 16px;
    }
    .masthead {
        text-align: center;
        font-size: calc(4vw + 10px);
        letter-spacing: 12px;
        color: rgb(101, 99, 99);
    }
    .masthead::after {
        content: "Chitwan Society of Canada";
        display: block;
        font-size: 11px;
        color: red;
        font-style: italic;
        letter-spacing: 1px;
    }
</style>

<script>
    import Navbar from './Navbar.svelte';
</script>

<div class="header">
    <div class="hero">    
        <h2>
            Diseño Web
        </h2>
        <h3>
            Software
        </h3>
        <h4>
            Bases de datos
        </h4>
    </div>
    <div class="navbar">
        <Navbar />
    </div>

</div>

<style>
	.hero {
        position: relative;
        width: 100%;
        padding: 2em;
		background-image: url('/hero.jpg');
        background-size: cover;
        background-position: center;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		text-align: center;
		font-size: 1.5em;
        color: white;
        min-height: 15em;
        text-shadow: 0px 0px 5px var(--yellow);
        border-radius: 0 0 10% 25%;
    }
    .navbar {
        position: absolute;
        top: 0;
        width: 100%;
        max-width: var(--header-width);
    }
    @media(max-width: 400px) {
        .header {
            display: flex;
            flex-direction: column-reverse;
        }
        .navbar {
            position: relative;
        }
    }

</style>

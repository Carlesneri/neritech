<script>
	import Header from './Header.svelte'
	import Main from './Main.svelte'
	import Footer from './Footer.svelte'
</script>

<main>
	<Header />
	<Main />
	<Footer />
</main>

<style>
	main {
		max-width: var(--header-width);
		margin: 0 auto;
	}
</style>
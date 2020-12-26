<script>
	import Header from "./Header.svelte";
	import Main from "./Main.svelte";
	import Footer from "./Footer.svelte";
	import Cookies from "./Cookies.svelte";
	import Modal from "./Modal.svelte";

	let modalOpen = false;

	function openModal(modal) {
		modalOpen = modal;
	}

</script>

<main>
	<Header />
	<Main />
	<Footer {openModal}/>
	<Cookies {openModal} />
	{#if modalOpen}
		<Modal {modalOpen} {openModal}/>
	{/if}
</main>

<style>
	main {
		max-width: var(--header-width);
		margin: 0 auto;
	}
</style>



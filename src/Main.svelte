<script>
	import ContactForm from './ContactForm.svelte';
	import Info from './Info.svelte';
	import Portfolio from './Portfolio.svelte';
</script>

<main>


	<div class="text">
		<h1>
			Diseño de páginas web en Gandia
		</h1>
		<ul>
			<li>
				Desarrollo y despliegue de sitios web totalmente personalizados. 
			</li>
			<li>
				Páginas únicas y personalizadas sin plantillas.
			</li>
			<li>
				Respaldo de datos en bases de datos.
			</li>
			<li>
				Diseño de software.
			</li>
			<li>
				Optimización y SEO para posicionamiento en buscadores.
			</li>
		</ul>
	</div>
	
	<ContactForm />
	
	<Info />

	<Portfolio />

</main>

<style>
	main {
		margin: 1rem auto;	
		padding: 0 1rem;
		text-align: center;
	}
	.text {
		position: relative;
		margin: 2rem auto 0;
		text-align: center;
		font-size: 1.2rem;
		font-weight: 700;
	}
	.text:before {
		content: '';
		background-color: var(--bgc);
		height: 2em;
		width: 90%;
		border-radius: 50% 50% 0 0;
		position: absolute;
		top: -2.3em;
		left: 10%;
		overflow: hidden;
	}
	li {
		list-style: none;
	}
</style>
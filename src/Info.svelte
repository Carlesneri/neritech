<div id="info">
    <div class="picture">
        <img src="./avatar.jpg" alt="Carlesneri">
    </div>
    <div class="info-text">
        <p>
            ¡Hola! Soy Carlos y soy desarrollador por cuenta propia con formación en HTML, CSS, JavaScript, Nodejs, Git, React, Svelte, MongoDB, Puppeteer, C, Python, Flutter y muchas tecnologías más. 
        </p>
        <p>
            Si estás interesado en desarrollar un proyecto a un precio muy competitivo ponte en contacto conmigo a través del <a href="#contact">formulario</a> y te responderé personalmente lo antes posible. 
        </p>
        <p>
            Te garantizo un resultado de calidad, si no quedas satisfecho se te devolverá el dinero sin problemas.
        </p>
    </div>
</div>

<style>
    #info {
        position: relative;
        display: flex;
        justify-content: center;
    }
    .picture {
        position: absolute;
        margin: 0 auto;
        /* bottom: 0; */
        padding: 1rem;
        z-index: -1;
        border-radius: 50%;
        border: 5px solid var(--yellow);
        overflow: hidden;
        width: 300px;
    }
    .picture img{
        width: 100%;
        border-radius: 50%;
        border: 2px solid var(--yellow);
        padding: 1rem;
    }
    .info-text {
        font-size: 1.1rem;
        margin-top: 250px;
        background-color: var(--bgc);
        padding: 2rem;
        border-radius: 3px;
    }
    .info-text a {
        font-weight: bold;
        text-decoration: underline;
    }
</style>
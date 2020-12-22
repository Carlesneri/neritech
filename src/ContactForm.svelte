<script>
    let name;
    let email;
    let text;

    let message = ''

    async function submitForm(event){
        event.preventDefault()

        if(!name || !email || !text) {
            message = 'Por favor, completa todos los campos'
        } else {
            message = "Enviando..."
            console.log(name, email, text);
            try {
                await sendForm(name, email, text);
                name = email = text = ''
                message = "El mensaje se ha enviado correctamente"

            } catch (error) {
                message = error

            }
        }
    }

    function sendForm(name, email, text) {
        // throw new Error("Lo sentimos, ha habido un error" );
    }

</script>

<div class="contact-form-wrapper" id="contact">
    <form id="contactForm">
        <div class="title">Formulario de contacto</div>
        <input type="text" placeholder="Nombre" required bind:value={name}>
        <input type="email" placeholder="Email" required bind:value={email}>
        <textarea name="text" id="text" rows="5" bind:value={text} placeholder="Escribe aquí tu comentario" required></textarea>
        <button on:click={submitForm} >
            Enviar
        </button>
        <div class="message">
            {message}
        </div>
    </form>
</div>

<style>
    .contact-form-wrapper {
        margin: 2rem 0;
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    #contactForm {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
    }
    .title {
        text-align: center;
        font-size: 2em;
    }
    input, textarea, button{
        font-size: 1rem;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 600;
        color: var(--yellow);
        margin: 1em;
        padding: 1em;
        outline: none;
        border: none;
    }
    textarea {
        resize: none;
    }
    button {
        cursor: pointer;
        transition: all .2s ease;
    }
    button:hover {
        color: white;
        background-color: var(--yellow);
    }
    .message {
        font-size: 1.3rem;
        text-align: center;
    }
</style>
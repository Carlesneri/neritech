<script>
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import 'firebase/auth';
    import {scale, slide, fly, fade} from 'svelte/transition';

    import firebaseConfig from '../firebase-config';

    firebase.initializeApp(firebaseConfig);

    firebase.auth().signInAnonymously()

    const db = firebase.firestore()
    
    let name = '';
    let email = '';
    let text = '';

    let message = ''

    let isSending = false

    let emailPattern = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},*[\W]*)+$/

    
    async function submitForm(event){
        event.preventDefault()

        email = emailPattern.test(email) ? email : ''

        let isSendingMessage 

        if(!name.trim() || !email.trim() || !text.trim()) {
            message = 'Por favor, completa todos los campos'
        } else {
            isSending = true

            if(isSending){
                    setTimeout(() => isSending && (message = 'Enviando      '), 300)
                    setTimeout(() => isSending && (message = `Enviando .    `), 1300)
                    setTimeout(() => isSending && (message = `Enviando . .  `), 2300)
                    setTimeout(() => isSending && (message = `Enviando . . .`), 3300)
                }

            // message = 'Enviando      '
            isSendingMessage = setInterval(() => {
                console.log('Interval');

                if(isSending){
                    setTimeout(() => isSending && (message = 'Enviando      '), 300)
                    setTimeout(() => isSending && (message = `Enviando .    `), 1300)
                    setTimeout(() => isSending && (message = `Enviando . .  `), 2300)
                    setTimeout(() => isSending && (message = `Enviando . . .`), 3300)
                }
            }, 4300)

            try {
                clearInterval(isSendingMessage)
                
                setTimeout(async () => {
                    isSending = false

                    if(!navigator.onLine) {
                        message = 'No estás conectado a internet. Conéctate y vuelve a enviar el formulario.'    

                    }else{
                        await sendForm(name, email, text);
                
                        message = `El mensaje se ha enviado correctamente.\n
                        En breve serás respondido en el correo ${email}.\n 
                        Recuerda revisar la bandeja de correo no deseado.\n
                        Gracias.`

                        name = email = text = ''

                    }                    

                }, 4300)  

            } catch (error) {
                isSending = false

                clearInterval(isSendingMessage)

                setTimeout(() => {
                    message = "No se ha podido enviar el mensaje"

                }, 4300)

            }
        }
    }

    async function sendForm(name, email, text) {
        const date = Date().toLocaleString()
        return await db.collection('messages').doc().set({
            name,
            email,
            text, 
            date
        })
        
    }

</script>

<div class="contact-form-wrapper" id="contact">
    <form id="contactForm">
        <div class="title">Formulario de contacto</div>
        <input type="text" placeholder="Nombre"  bind:value={name}>
        <input type="email" placeholder="Email"  bind:value={email}>
        <textarea name="text" id="text" rows="5" bind:value={text} placeholder="Escribe aquí tu comentario"></textarea>
        <button type="submit" on:click={submitForm} >
            Enviar
        </button>
        <div class="message-wrapper">
            {#if message}
            <p class="message" transition:scale>
                {message}
            </p>
        {/if}
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
    .message-wrapper {
        min-height: 2em;
    }
    .message {
        font-family: inherit;
        font-size: 1.3rem;
        text-align: center;
    }
</style>
<script>
    const year = new Date().getFullYear();

    export let openModal;

</script>

<footer>

    <div class="logos">
        <div class="logo">
            <img src="./html.png" alt="html" title="html5">
        </div>
        <div class="logo">
            <img src="./css.png" alt="css" title="css3">
        </div>
        <div class="logo">
            <img src="./js.png" alt="js" title="javascript">
        </div>
        <div class="logo">
            <img src="./node.svg" alt="node" title="nodejs">
        </div>
        <div class="logo">
            <img src="./mongodb.png" alt="mongodb" title="mongodb">
        </div>
        <div class="logo">
            <img src="./react.png" alt="react" title="react">
        </div>
        <div class="logo">
            <img src="./svelte.png" alt="svelte" title="svelte">
        </div>
        <div class="logo">
            <img src="./puppeteer.png" alt="puppeteer" title="puppeteer">
        </div>
    </div>
    <div class="foot">
        <div class="copy">
            Copyright &copy; {year} neritechdev.web.app
        </div>
        <div class="privacity link" on:click={openModal('privacity')}>
            &#8250; política de privacidad
        </div>
        <div class="cookies link" on:click={openModal('cookies')}>
            &#8250; cookies
        </div>
        <div class="legal link" on:click={openModal('legal')}>
            &#8250; aviso legal
        </div>

    </div>
</footer>

<style>
    footer {
        padding: 2rem;
        text-align: center;
    }
    .logos {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .logo {
        margin: .5rem;
        width: 60px;
    }
    .logo img {
        width: 100%;
    }
    .foot {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }
    .foot div {
        margin: .5rem 1rem;
    }
    @media(max-width: 600px) {
        .foot {
            flex-direction: column;
            flex-flow: column-reverse;
            justify-content: center;
            align-items: center;
        }
        .link {
            width: fit-content;
        }
    }
</style>
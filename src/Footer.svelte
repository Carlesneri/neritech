<script>
    const year = new Date().getFullYear();
</script>

<footer>

    <div class="logos">
        <div class="logo">
            <img src="./html.png" alt="html">
        </div>
        <div class="logo">
            <img src="./css.png" alt="css">
        </div>
        <div class="logo">
            <img src="./js.png" alt="js">
        </div>
        <div class="logo">
            <img src="./node.svg" alt="node">
        </div>
        <div class="logo">
            <img src="./mongodb.png" alt="mongodb">
        </div>
        <div class="logo">
            <img src="./react.png" alt="react">
        </div>
        <div class="logo">
            <img src="./svelte.png" alt="svelte">
        </div>
        <div class="logo">
            <img src="./puppeteer.png" alt="puppeteer">
        </div>
    </div>
    <div class="foot">
        <div class="copy">
            Copyright &copy; {year} neritechdev.web.app
        </div>
        <div class="privacity link">
            &#8250; política de privacidad
        </div>
        <div class="cookies link">
            &#8250; cookies
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
        }
    }
</style>
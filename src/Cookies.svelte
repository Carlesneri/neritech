<script>
    export let openModal;

    let cookiesAccepted = getCookie('cookies-accepted') || false

    function acceptCookies() {
        setCookie("cookies-accepted", "true", 30);
        cookiesAccepted = true
    }

    function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function setCookie(cname, cvalue, exdays) {
        var d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
</script>

{#if !cookiesAccepted}
<div class="cookies-wrapper">
    <div id="cookies" class="cookies">
        <div class="text-button">
            <p>
                Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso. 
            </p>
            <div class="link">
                <button on:click={() => acceptCookies()}>Aceptar</button>
            </div>
        </div>
        <div class="links">
            <div class="link" on:click={openModal('cookies')}>
                Política de cookies
            </div>
            <div class="link" on:click={openModal('legal')}>
                Aviso Legal
            </div>
        </div>
    </div>
</div>
{/if}

<style>
    .cookies-wrapper {
        position: fixed;
        display: flex;
        justify-content: center;
        bottom: 0;
        width: 100%;
        padding: 1rem;
    }
    .cookies {
        box-shadow: 0 0 5px 3px var(--yellow);
        display: flex;
        flex-direction: column;
        max-width: var(--main-width);
        padding: 1rem;
        background-color: var(--bgc);
        opacity: .9;
    }
    .text-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .links {
        display: flex;
        justify-content: space-evenly;
    }
    @media(max-width: 700px){
        .text-button{
            flex-direction: column;
        }
    }
</style>
<script>
</script>

<nav>
    <div class="nav">

        <div class="brand">
            Neritech
        </div>
        <ul>
            <li>
                <div class="link">
                    <a href="#info">
                        &#8250; info
                    </a>
                </div>
            </li>
            <li>
                <div class="link">
                    <a href=#contact>
                        &#8250; contactar
                    </a>
                </div>
            </li>
        </ul>
    </div>
</nav>

<style>
    nav {
        position: absolute;
        width: 100%;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

    }
    .brand {
        font-size: 2.5em;
        font-weight: 900;
        color: white;
        /* color: var(--yellow); */
    }
    nav ul{
        display: flex;
        /* padding: 1rem; */
    }
    nav li {
        margin: 0 1rem;
        list-style: none;
    }
    nav .link, nav .link a{
        font-weight: 800;
        transition: all .2s ease;
    }
    @media(max-width: 400px) {
        nav {
            position: relative;
        }
        .nav {
            flex-direction: column;
        }
    }

</style>
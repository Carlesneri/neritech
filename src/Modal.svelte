<script>
    import LegalAdModal from './LegalAdModal.svelte'
    import Privacity from './PrivacityModal.svelte'
    import CookiesModal from './CookiesModal.svelte'
    import { scale } from 'svelte/transition'
    
    export let modalOpen, openModal

        
</script>

<div class="modal" transition:scale>
    <div class="modal-content">
        {#if modalOpen === 'legal'}
            <LegalAdModal {openModal}/>
        {:else if  modalOpen === 'privacity'}
            <Privacity {openModal}/>
        {:else if  modalOpen === 'cookies'}
            <CookiesModal />
        {/if}
        <button class="link" on:click={() => openModal(false)}>
            Cerrar
        </button>
    </div>
</div>

<style>
    .modal{
        position: fixed;
        max-width: 1000px;
        max-height: 100vh;
        min-width: 80%;
        min-height: 80%;
        bottom: 0;
        top: 0;
        margin: 2rem;
        overflow: auto;
    }
    .modal-content{
        min-width: 70%;
        min-height: 70%;
        padding: 2rem;    
        color: white;    
        background-color: var(--brown);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    /* .modal-content button{
        min-width:  5rem;
        margin-top: 1rem;
        margin-left: 50%;
        transform: translateX(-50%);
        border: none;
        background-color: #297aa3;
        padding: 1rem;
        border-radius: 5px;
        color: white;
        font-family: inherit;
        font-size: inherit;
    } */
</style>
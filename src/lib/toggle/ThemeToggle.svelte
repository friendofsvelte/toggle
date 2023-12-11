<script lang="ts">
    import {onMount} from "svelte";
    import {scale} from "svelte/transition";
    import Moon from "$lib/toggle/icons/Moon.svelte";
    import Sun from "$lib/toggle/icons/Sun.svelte";
    import {isDarkMode, toggleDarkMode, initDarkMode} from "$lib/toggle/toggleUtils";


    onMount(() => {
        initDarkMode();
    });
    export let className: string = '';
</script>


{#if $isDarkMode !== null}
    <button
            class="dark-mode-button {className}"
            class:isDarkMode={$isDarkMode}
            in:scale
            on:click={toggleDarkMode}>
        {#if $isDarkMode}
            <Moon/>
        {:else}
            <Sun/>
        {/if}
    </button>
{:else}
    <div class="dark-mode-button"/>
{/if}



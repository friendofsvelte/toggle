<script lang="ts">
    import {scale} from "svelte/transition";
    import Moon from "$lib/toggle/icons/Moon.svelte";
    import Sun from "$lib/toggle/icons/Sun.svelte";
    import {appearance} from "$lib/toggle/toggle.svelte";
    import TrackAppearance from "$lib/toggle/TrackAppearance.svelte";

    let {class: className = ''} = $props();
</script>

<TrackAppearance/>
{#if appearance.dark !== null}
    <button
            class="dark-mode-button {className}"
            class:isDarkMode={appearance.dark}
            in:scale
            onclick={()=>appearance.dark=!appearance.dark}>
        {#if appearance.dark}
            <Moon/>
        {:else}
            <Sun/>
        {/if}
    </button>
{:else}
    <div class="dark-mode-button"/>
{/if}



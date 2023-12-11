<script>
import {ThemeToggle, isDarkMode} from "$lib";
</script>


<svelte:component this={ThemeToggle} />

Is dark mode: {$isDarkMode}

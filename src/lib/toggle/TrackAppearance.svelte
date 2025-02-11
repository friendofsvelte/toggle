<script lang="ts">
    import {appearance} from "$lib/toggle/toggle.svelte";
    import {onMount} from "svelte";

    const init = () => {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('appearanceMode='))
        ?.split('=')[1];

      if (cookieValue) {
        appearance.dark = cookieValue === 'dark';
      }
      else if (document.documentElement.classList.contains('dark')) {
        appearance.dark = true;
      } else if (document.documentElement.classList.contains('light')) {
        appearance.dark = false;
      } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        appearance.dark = prefersDarkMode.matches;
      }

      // Add listener for system preference changes
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
      prefersDarkMode.addEventListener('change', (e) => {
        appearance.dark = e.matches;
      });
    }
    const track = () => {
        if (appearance.dark != null) {
            document.cookie = `appearanceMode=${appearance.dark ? 'dark' : 'light'}; path=/; max-age=31536000`;
            if (appearance.dark) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
            }
        }
    }
    $effect(track);
    onMount(init);
</script>
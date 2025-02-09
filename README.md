# Svelte Dark Mode Toggle

A simple dark mode toggle for Svelte and SvelteKit app.

## Features

- In-app toggle between light and dark mode
- System toggle between light and dark mode
- Persist user preference in cookies
- Server-side rendering supported
- No dependencies

## Installation

```bash
npm i @friendofsvelte/toggle
```

## Usage

In your `src/+layout.svelte` (recommended) or `+page.svelte` file, add the following code:

```svelte
<script>
    import {ThemeToggle, appearance} from "@friendofsvelte/toggle";
    import "@friendofsvelte/toggle/styles/Toggle.css";
</script>

<ThemeToggle/>
Is dark mode: {appearance.dark}
```

In your `src/hooks.server.ts` file, add the following code:

```ts
import {sequence} from "@sveltejs/kit/hooks";
import {handleAppearance} from "@friendofsvelte/toggle";

export const handle = sequence(
    handleAppearance
);
```

Add `class="%appearanceMode%"` in your `app.html` file:

```html
<html lang="en" class="%appearanceMode%">
```

Done 🎉, you can now toggle between light and dark mode.

## Previews

**System toggle**
![system_mode](https://github.com/friendofsvelte/toggle/assets/42182303/d9a4c7a4-7f84-4f02-b2a7-5010067c07b5)

**In-app toggle**
![in_app_mode](https://github.com/friendofsvelte/toggle/assets/42182303/6d8f4862-a971-4c7c-b0a9-a5e9c95ddc5f)

## Custom action

You can also use the `toggle` action to toggle the theme programmatically. Use
the follow utility function to achieve this:

```ts
import {
    apperance
} from "@friendofsvelte/toggle";
````

- `appearance` is a class object that stores `dark` boolean state on it.
- setting `appearance.dark = false` with automatically update the UI to light mode.
- `ThemeToggle` is the default component that uses `appearance` to toggle the theme.

```svelte
<script lang="ts">
    import {scale} from "svelte/transition";
    import Moon from "$lib/toggle/icons/Moon.svelte";
    import Sun from "$lib/toggle/icons/Sun.svelte";
    import { appearance } from "@friendofsvelte/toggle";
    import TrackAppearance from '@friendofsvelte/toggle';

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
```

Now, add the following code in your tailwind `app.css`:
```css
@variant dark (&:where(.dark, .dark *));
```

this works for Tailwind V4 users.

# About Friend Of Svelte

----------------------

![Friend Of Svelte Logo](https://avatars.githubusercontent.com/u/143795012?s=200&v=4)

[Friend Of Svelte](https://github.com/friendofsvelte) is a community driven project to help Svelte developers to find
and
develop awesome Svelte resources.

If you like this project, you can be one of the friend by contributing to the project. Memberships are open for
everyone.

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

In your `+layout.svelte` or `+page.svelte` file, add the following code:

```svelte
<script>
    import {ThemeToggle, isDarkMode} from "@friendofsvelte/toggle";
    import "@friendofsvelte/toggle/styles/Toggle.css";
</script>

<ThemeToggle/>
Is dark mode: {$isDarkMode}
```

In your `src/hooks.server.ts` file, add the following code:

```ts
import {sequence} from "@sveltejs/kit/hooks";
import {handleAppearance} from "@friendofsvelte/toggle";

export const handle = sequence(
        handleAppearance
);
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
    isDarkMode, metaPerformDarkMode, toggleDarkMode, performDarkMode, initDarkMode
} from "@friendofsvelte/toggle";
````

- `isDarkMode` is a boolean writable store that indicates if the appearance
  is dark or not.
- `metaPerformDarkMode` that accepts a boolean value to set the appearance.
- `toggleDarkMode` uses the `isDarkMode` store to toggle the appearance.
- `performDarkMode` uses the `metaPerformDarkMode` and passes the value of
  `isDarkMode` to it.
- `initDarkMode` is a function that initializes the `isDarkMode` store with
  the value of the `prefers-color-scheme` media query or the `appearanceMode` cookie,
  and initialize a listener.

About Friend Of Svelte
----------------------

![Friend Of Svelte Logo](https://avatars.githubusercontent.com/u/143795012?s=200&v=4)

[Friend Of Svelte](https://github.com/friendofsvelte) is a community driven project to help Svelte developers to find
and
develop awesome Svelte resources.

If you like this project, you can be one of the friend by contributing to the project. Memberships are open for
everyone.

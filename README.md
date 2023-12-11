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
  import { ThemeToggle } from '@friendofsvelte/toggle';
  import "@friendofsvelte/toggle/styles/Toggle.css";
</script>

<ThemeToggle />
```

In your `src/hooks.server.ts` file, add the following code:

```ts
import {sequence} from "@sveltejs/kit/hooks";
import server from "@friendofsvelte/toggle";

export const handle = sequence(
    server
);
```

Done 🎉, you can now toggle between light and dark mode.

## Previews

**System toggle**
![image](https://github.com/friendofsvelte/toggle/assets/42182303/6b23bd1b-710e-4d86-ab38-cb827cb2505f)

**In-app toggle**
![image](https://github.com/friendofsvelte/toggle/assets/42182303/049d546e-b139-402d-bf0a-78d10d33d339)

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

[Friend Of Svelte](https://github.com/friendofsvelte) is a community driven project to help Svelte developers to find and
develop awesome Svelte resources.

If you like this project, you can be one of the friend by contributing to the project. Memberships are open for
everyone.
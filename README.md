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
  import { Toggle } from '@friendofsvelte/toggle';
</script>

<Toggle />
```

In your `src/hooks.server.ts` file, add the following code:

```ts
import {sequence} from "@sveltejs/kit/hooks";
import handleAppearance from "@friendofsvelte/toggle";

export const handle = sequence(
    handleAppearance
);
```

Done 🎉, you can now toggle between light and dark mode.

## Previews

**System toggle**
![image](https://github.com/friendofsvelte/toggle/assets/42182303/6b23bd1b-710e-4d86-ab38-cb827cb2505f)

**In-app toggle**
![image](https://github.com/friendofsvelte/toggle/assets/42182303/049d546e-b139-402d-bf0a-78d10d33d339)

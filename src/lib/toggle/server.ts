import type {Handle} from '@sveltejs/kit';

/*
    This is a hook that will be called before the page is rendered. It will add the appearanceMode to the page.
    > Note: Make sure to add `class="%appearanceMode%">` to the `html` tag of `app.html` file in your SvelteKit project.
 */
export const handleAppearance: Handle = (async ({event, resolve}) => {
    const appearanceMode = event.cookies.get('appearanceMode') ?? '';
    return resolve(event, {
        transformPageChunk: ({html}) => html
            .replace('%appearanceMode%', appearanceMode)
    });
});
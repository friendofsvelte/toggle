import type {Writable} from "svelte/store";
import {get, writable} from "svelte/store";


export function metaPerformDarkMode(is_dark_mode_: boolean) {
    document.cookie = `appearanceMode=${is_dark_mode_ ? 'dark' : 'light'}; path=/; max-age=31536000`;
    if (is_dark_mode_) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
}


export function initDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        isDarkMode.set(true)
    } else if (document.documentElement.classList.contains('light')) {
        isDarkMode.set(false)
    }
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    const is_dark_mode = get(isDarkMode);
    if (is_dark_mode === null) {
        isDarkMode.set(prefersDarkMode.matches);
        performDarkMode();
    }
    prefersDarkMode.addEventListener('change', e => {
        isDarkMode.set(e.matches);
        performDarkMode();
    });
}

export function toggleDarkMode() {
    isDarkMode.update(is_dark_mode => !is_dark_mode);
    performDarkMode();
}

export function performDarkMode() {
    const is_dark_mode = get(isDarkMode);
    if (is_dark_mode !== null) {
        metaPerformDarkMode(is_dark_mode);
    }
}

export let isDarkMode: Writable<boolean | null> = writable(null);

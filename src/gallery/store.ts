import type { SvelteComponent, SvelteComponentDev } from 'svelte/internal';
import { writable } from 'svelte/store';
import Gallery from './Gallery.svelte';

export const componentStore = writable<object>(Gallery);

export function navigateTo(component: object) {
    componentStore.set(component);
}

export function navigateHome(component: object) {
    navigateTo(Gallery);
}

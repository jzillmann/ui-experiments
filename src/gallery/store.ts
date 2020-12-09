import { derived, writable } from 'svelte/store';
import Gallery from './Gallery.svelte';

import SingleActionButton from '../singleActionButton/SingleActionButton.svelte';
import StepProgressExperiment from '../stepProgress/StepProgressExperiment.svelte';

interface ShowcaseDefinition {
    id: string;
    component: object;
    date: string;
}

export const showcases: ShowcaseDefinition[] = [
    {
        id: 'stepProgress',
        component: StepProgressExperiment,
        date: 'December 2020',
    },
    {
        id: 'processingButton',
        component: SingleActionButton,
        date: 'November 2020',
    },
];

const home = 'gallery';
let initalComponentId: string = getParameterByName('showcase') || home;
window.history.replaceState(initalComponentId, null, `?showcase=${initalComponentId}`);

const selectedComponentId = writable<string>(initalComponentId);
export const selectedComponent = derived(selectedComponentId, (id) => {
    if (id === home) {
        return Gallery;
    }
    const showcase = showcases.find((s) => s.id === id);
    if (showcase) {
        return showcase.component;
    }
    //TODO draft error component
});

window.onpopstate = function (event: PopStateEvent) {
    if (event.state) {
        selectedComponentId.set(event.state);
    }
};

export function navigateTo(showcaseId: string) {
    window.history.pushState(showcaseId, null, `?showcase=${showcaseId}`);
    selectedComponentId.set(showcaseId);
}

export function navigateHome() {
    window.history.pushState(home, null, `/`);
    selectedComponentId.set(home);
}

function getParameterByName(name: string): string {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

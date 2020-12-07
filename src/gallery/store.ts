import { derived, writable } from 'svelte/store';
import Gallery from './Gallery.svelte';

import SingleActionButton from '../singleActionButton/SingleActionButton.svelte';
import StepProgressExperiment from '../stepProgress/StepProgressExperiment.svelte';

interface ShowcaseDefinition {
    name: string;
    component: object;
    date: string;
}

export const showcases: ShowcaseDefinition[] = [
    {
        name: 'processingButton',
        component: SingleActionButton,
        date: 'November 2020',
    },
    {
        name: 'stepProgress',
        component: StepProgressExperiment,
        date: 'December 2020',
    },
];

const home = 'gallery';
let initalComponentName: string = getParameterByName('showcase') || home;
window.history.replaceState(initalComponentName, null, `?showcase=${initalComponentName}`);

const selectedComponentName = writable<string>(initalComponentName);
export const selectedComponent = derived(selectedComponentName, (name) => {
    if (name === home) {
        return Gallery;
    }
    const showcase = showcases.find((s) => s.name === name);
    if (showcase) {
        return showcase.component;
    }
    //TODO draft error component
});

window.onpopstate = function (event: PopStateEvent) {
    if (event.state) {
        selectedComponentName.set(event.state);
    }
};

export function navigateTo(showcaseName: string) {
    window.history.pushState(showcaseName, null, `?showcase=${showcaseName}`);
    selectedComponentName.set(showcaseName);
}

export function navigateHome() {
    window.history.pushState(home, null, `/`);
    selectedComponentName.set(home);
}

function getParameterByName(name: string): string {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

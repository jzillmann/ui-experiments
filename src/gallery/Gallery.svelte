<script>
    import SingleActionButton from '../singleActionButton/SingleActionButton.svelte';
    import StepProgressExperiment from '../stepProgress/StepProgressExperiment.svelte';
    import { navigateTo } from './store';

    const components = [SingleActionButton, StepProgressExperiment];
</script>

<div class="grid grid-cols-3 gap-2">
    {#each components as component}
        <div
            class="showcase p-4 hover:bg-blue-400 cursor-pointer"
            on:click|stopPropagation={() => navigateTo(component)}>
            <svelte:component this={component} />
        </div>
    {/each}
</div>

<style>
    .showcase {
        transition: all 0.27s;
        transform: scale(0.8);
    }
    .showcase:hover {
        transform: scale(1);
    }
</style>

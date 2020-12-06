<script lang="typescript">
    import TailwindCss from './TailwindCSS.svelte';
    import SingleActionButton from './singleActionButton/SingleActionButton.svelte';
    import StepProgressExperiment from './stepProgress/StepProgressExperiment.svelte';
</script>

<TailwindCss />

<div class="container mx-auto">
    <StepProgressExperiment />
    <SingleActionButton />
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>

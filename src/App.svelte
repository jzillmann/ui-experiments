<script lang="typescript">
    import TailwindCss from './TailwindCSS.svelte';
    import SingleActionButton from './singleActionButton/SingleActionButton.svelte';
</script>

<TailwindCss />

<div class="container mx-auto">
    <SingleActionButton />
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>

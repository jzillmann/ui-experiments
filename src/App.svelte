<script lang="typescript">
    import TailwindCss from './TailwindCSS.svelte';
    import { selectedComponent, navigateHome } from './gallery/store';
</script>

<TailwindCss />

<div class="fixed top-0 w-full h-9 bg-green-600 z-10">
    <div class="w-auto block mt-1 text-xl font-mono font-bold text-center cursor-pointer" on:click={navigateHome}>
        Gallery
    </div>
</div>
<div class="mt-16 container mx-auto relative">
    <svelte:component this={$selectedComponent} />
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>

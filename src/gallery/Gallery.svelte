<script>
    import { showcases, navigateTo } from './store';
</script>

<div class="grid grid-cols-3 gap-2">
    {#each showcases as showcase}
        <div class="showcase hover:bg-blue-300 cursor-pointer" on:click|stopPropagation={() => navigateTo(showcase.id)}>
            <svelte:component this={showcase.component} />
        </div>
    {/each}
</div>

<style>
    .showcase {
        transition: all 0.27s;
        transform: scale(0.8);
    }
    .showcase:hover {
        transform: scale(0.9);
    }
</style>

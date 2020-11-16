<script>
    import { blur } from 'svelte/transition';

    import SvgIcon from '../svg/SvgIcon.svelte';
    import { clipboard } from '../svg/svgs';

    export let title: string;

    let openDescription = false;
    let openDesciptionElement: HTMLElement;

    function toogleOpen() {
        openDescription = !openDescription;
    }
</script>

<div class="flex items-center justify-center">
    <div class="text-2xl font-bold">{title}</div>
    <span bind:this={openDesciptionElement} on:click={toogleOpen} class="ml-1 cursor-pointer">
        <SvgIcon {...clipboard} extraClass={openDescription ? 'text-gray-600' : ''} />
    </span>
</div>

{#if openDescription}
    <div class="text-center mb-6" transition:blur={{ duration: 180 }}>
        <slot name="description" />
    </div>
{/if}

<slot name="content" />

<style>
    .open {
        @apply text-blue-600;
    }
</style>

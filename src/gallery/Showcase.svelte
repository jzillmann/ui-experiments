<script>
    import { blur } from 'svelte/transition';
    import { receive, send } from './crossfade';

    import SvgIcon from '../svg/SvgIcon.svelte';
    import { clipboard } from '../svg/svgs';

    export let id: string;
    export let title: string;

    let openDescription = false;
    let openDesciptionElement: HTMLElement;

    function toogleOpen() {
        openDescription = !openDescription;
    }
</script>

<div in:receive={{ key: id }} out:send={{ key: id }} class="absolute w-full">
    <div class="mb-10">
        <div class="flex items-center justify-center">
            <div class="text-2xl font-bold">{title}</div>
            <span
                bind:this={openDesciptionElement}
                on:click={toogleOpen}
                class="ml-1 cursor-pointer"
                class:openDescription>
                <SvgIcon {...clipboard} />
            </span>
        </div>

        {#if openDescription}
            <div class="text-center mt-6 mb-20" transition:blur={{ duration: 180 }}>
                <slot name="description" />
            </div>
        {/if}
    </div>

    <slot name="content" />
</div>

<style>
    .openDescription {
        @apply text-indigo-200;
    }
</style>

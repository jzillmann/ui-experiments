<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    export let stepCount: number;
    export let activeStep: number;
    export let activeColor: string;
    export let complete = false;
    $: rest = 1 / stepCount / 2;

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut,
    });
    $: progress.set((activeStep + 1) / stepCount - rest + (complete ? rest : 0));
</script>

<div class="w-full">
    <div class="h-6 grid" style="grid-template-columns: repeat({stepCount}, minmax(0, 1fr));">
        {#each Array(stepCount) as _, step}
            <div
                style="grid-column: {step + 1};"
                class="row-start-1 justify-self-center self-center step rounded-full flex items-center justify-center {step <= activeStep ? activeColor : 'bg-gray-400'}"
                class:active={step === activeStep}
                class:completed={step < activeStep}
                class:future={step > activeStep}>
                {step + 1}
            </div>
        {/each}
        <div
            class="-mt-1 col-span-full mx-auto row-start-1 justify-self-center self-center w-full"
            style="z-index: -100;">
            <progress class="w-full h-2" value={$progress} />
        </div>
    </div>
</div>

<style>
    .step {
        @apply h-8;
        @apply w-8;
        transition: all 0.27s;
        transition-delay: 0.2s;
    }
    .active {
        @apply font-bold;
        @apply border-4;
        border-style: double solid;
        transform: scale(1.2);
    }
    .completed {
        filter: blur(1px) brightness(90%);
    }
    .future {
        filter: contrast(10%);
        filter: blur(2px);
    }
    progress[value]::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    progress[value]::-webkit-progress-value {
        @apply bg-blue-600;
    }
</style>

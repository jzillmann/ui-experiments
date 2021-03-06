<script>
    import { blur } from 'svelte/transition';
    import slideX from './slideX';
    import Showcase from '../gallery/Showcase.svelte';
    import StepProgress from './StepProgress.svelte';

    let numberOfSteps = 4;
    $: steps = [...Array(numberOfSteps)].map((_, i) => `Step ${i}`);
    let currentStep = -1;
    let complete = false;

    function setStepCount(number: number) {
        numberOfSteps = number;
        currentStep = -1;
    }
    function next() {
        if (currentStep < steps.length - 1) {
            currentStep++;
        } else {
            complete = true;
        }
    }
    function prev() {
        if (complete == true) {
            complete = false;
        } else if (currentStep > 0) {
            currentStep--;
        }
    }
    function cancel() {
        currentStep = -1;
        complete = false;
    }
</script>

<Showcase id="stepProgress" title="Step Progress">
    <div slot="description">
        <div class="grid grid-cols-2">
            <div class="flex justify-center">
                <div class="font-bold mr-2">Challenge:</div>
                <ul class="list-disc list-inside text-left max-w-2xl">
                    <li>Implement a horizontal step progress bar.</li>
                    <li>Should be visually appealing.</li>
                </ul>
            </div>
            <div class="flex justify-center">
                <div class="font-bold mr-2">Notes:</div>
                <ul class="list-disc list-inside text-left max-w-2xl">
                    <li>Passing in the color is half backed.</li>
                    <li>To make that work it's probably a good idea to move away from '&lt;progress/&gt;'</li>
                </ul>
            </div>
        </div>
    </div>

    <div slot="content" class="flex justify-center w-full">
        <div class="w-full">
            <div class="flex items-center space-x-2 mb-6">
                <div class="">Number of steps: {numberOfSteps}</div>
                <button class="px-1 w-4 bg-gray-400" on:click={() => setStepCount(numberOfSteps - 1)}>-</button>
                <button class="px-1 w-4 bg-gray-400" on:click={() => setStepCount(numberOfSteps + 1)}>+</button>
            </div>
            <StepProgress stepCount={steps.length} activeStep={currentStep} {complete} activeColor="bg-blue-600" />
            <div class="flex justify-center space-x-4 mt-12">
                <button
                    class="py-1 px-3 bg-gray-400 rounded"
                    on:click={next}>{currentStep == steps.length - 1 ? 'Complete' : 'Next'}</button>
                <button class="py-1 px-3 bg-gray-400 rounded" on:click={prev}>Prev</button>
                <button class="py-1 px-3 bg-gray-400 rounded" on:click={cancel}>Cancel</button>
            </div>
            <div class="flex justify-center space-x-1 mt-10">
                {#if currentStep >= 0 && !complete}
                    <div transition:blur>Active Step:</div>
                    <div class="flex whitespace-no-wrap w-32">
                        {#key currentStep}
                            <div transition:slideX>{steps[currentStep]}</div>
                        {/key}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</Showcase>

<script>
    import Showcase from '../gallery/Showcase.svelte';
    import Button from './Button.svelte';
    import EitherOr from './EitherOr.svelte';
    import { refresh, save } from '../svg/svgs';

    let pressed = false;
    let changed = false;

    function handleClick() {
        pressed = true;
        new Promise((r) => setTimeout(r, 900)).then(() => {
            pressed = false;
            changed = !changed;
        });
    }
</script>

<Showcase id="processingButton" title="Single Action Button">
    <div slot="description">
        <div class="font-bold">Challenge:</div>
        <div class="flex justify-center">
            <ul class="list-disc list-inside text-left max-w-2xl">
                <li>Implement a <i>click - fetch - done</i> button pattern + a button turning into another one.</li>
                <li>Get that visually somewhat right.</li>
                <li>
                    Experiment with it structurally:
                    <ul class="ml-4 list-disc list-inside">
                        <li>
                            What styles are best - in terms of re-usability - defined inside the button, which outside ?
                        </li>
                        <li>How to couple the logic ? Use a promise, a Svelte store, something different ?</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

    <div slot="content">
        <div class="flex justify-around space-x-4">
            <div>
                <div class="font-bold mb-3">Static</div>
                <Button name="UnPressed" svgSpec={refresh} pressed={false} extraClass="bg-yellow-600" />
                <Button name="Pressed" svgSpec={refresh} pressed={true} extraClass="bg-yellow-600" />

                <div class="mt-4 text-sm tracking-tighter">
                    <Button
                        name="UnPressed"
                        svgSpec={{ ...refresh, size: 'w-5' }}
                        pressed={false}
                        extraClass="bg-yellow-600" />
                    <Button
                        name="Pressed"
                        svgSpec={{ ...refresh, size: 'w-5' }}
                        pressed={true}
                        extraClass="bg-yellow-600" />
                </div>
                <div class="mt-4 text-sm tracking-tighter">
                    <Button
                        name="UnPressed"
                        svgSpec={{ ...save, size: 'w-5' }}
                        pressed={false}
                        extraClass="bg-blue-600" />
                    <Button name="Pressed" svgSpec={{ ...save, size: 'w-5' }} pressed={true} extraClass="bg-blue-600" />
                </div>
            </div>

            <div>
                <div class="font-bold mb-3">Dynamic</div>
                <EitherOr either={!changed}>
                    <span slot="either">
                        <Button
                            name="Refresh"
                            svgSpec={{ ...refresh, size: 'w-5' }}
                            {pressed}
                            on:click={handleClick}
                            extraClass="bg-teal-600" />
                    </span>
                    <span slot="or">
                        <Button
                            name="Save"
                            svgSpec={{ ...save, size: 'w-5' }}
                            {pressed}
                            on:click={handleClick}
                            extraClass="bg-green-600" />
                    </span>
                </EitherOr>
                <div class="mt-2">Pressed: {pressed}</div>
                <div class="mt-2">Changed: {changed}</div>
            </div>

            <div>
                <div class="font-bold mb-2">Simulation</div>
                <EitherOr either={!changed}>
                    <span slot="either">
                        <Button
                            name="Refresh"
                            svgSpec={{ ...refresh, size: 'w-5' }}
                            {pressed}
                            on:click={handleClick}
                            extraClass="bg-teal-600" />
                    </span>
                    <span slot="or">
                        <Button
                            name="Save"
                            svgSpec={{ ...save, size: 'w-5' }}
                            {pressed}
                            on:click={handleClick}
                            extraClass="bg-green-600" />
                    </span>
                </EitherOr>
                <div class="mt-2">Pressed: {pressed}</div>
                <div class="mt-2">Changed: {changed}</div>
            </div>
        </div>
    </div>
</Showcase>

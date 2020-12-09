import { crossfade, blur } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 900),

    fallback(node, params) {
        return blur(node, { duration: 270 });
    },
});

function multiKey(key: string, index: number) {
    return `${key}_${index}`;
}

export { send, receive, multiKey };

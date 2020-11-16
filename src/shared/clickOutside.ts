type OnAction = () => void;
type Options = { onAction: OnAction; excludes?: HTMLElement[] };

export default function clickOutside(node: HTMLElement, { onAction, excludes = [] }: Options) {
    const handleClick = (event: UIEvent) => {
        const clickedNode = event.target as Node;
        if (clickedNode && !node.contains(clickedNode) && !excludes.find((n) => n.contains(clickedNode))) {
            event.stopImmediatePropagation();
            onAction();
        }
    };
    document.addEventListener('click', handleClick);
    return {
        destroy() {
            document.removeEventListener('click', handleClick);
        },
    };
}

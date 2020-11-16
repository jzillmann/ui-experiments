export default function clickOutside(node, {onAction, excludes = []}) {
  const handleClick = (event) => {
    const clickedNode = event.target;
    if (clickedNode && !node.contains(clickedNode) && !excludes.find((n) => n.contains(clickedNode))) {
      event.stopImmediatePropagation();
      onAction();
    }
  };
  document.addEventListener("click", handleClick);
  return {
    destroy() {
      document.removeEventListener("click", handleClick);
    }
  };
}

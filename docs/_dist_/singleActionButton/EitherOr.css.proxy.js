// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".root.svelte-1no8mo5{perspective:1000px}.flip.svelte-1no8mo5{transition:0.6s;transform-style:preserve-3d}.or.flip.svelte-1no8mo5{transform:rotateX(-180deg)}.front.svelte-1no8mo5,.back.svelte-1no8mo5{-webkit-backface-visibility:hidden;backface-visibility:hidden}.back.svelte-1no8mo5{transform:rotateX(180deg);top:0;left:0;width:100%;height:100%}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
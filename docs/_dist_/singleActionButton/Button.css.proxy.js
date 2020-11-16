// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "button.svelte-1dq38gd{border-color:rgba(0, 0, 0, 0.1);box-shadow:0 2px #999;transition:all 0.45s}button.svelte-1dq38gd:not(.pressed):hover{filter:contrast(130%);filter:brightness(118%)}.pressed.svelte-1dq38gd{filter:brightness(90%);box-shadow:0 1px #666;transform:translateY(1px)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
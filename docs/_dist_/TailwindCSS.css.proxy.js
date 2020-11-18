// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}details{display:block}summary{display:list-item}template{display:none}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";line-height:1.5}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media(min-width: 640px){.container{max-width:640px}}@media(min-width: 768px){.container{max-width:768px}}@media(min-width: 1024px){.container{max-width:1024px}}@media(min-width: 1280px){.container{max-width:1280px}}.space-x-4>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(1rem * var(--space-x-reverse));margin-left:calc(1rem * calc(1 - var(--space-x-reverse)))}.bg-yellow-600{--bg-opacity:1;background-color:#d69e2e;background-color:rgba(214, 158, 46, var(--bg-opacity))}.bg-green-600{--bg-opacity:1;background-color:#38a169;background-color:rgba(56, 161, 105, var(--bg-opacity))}.bg-teal-600{--bg-opacity:1;background-color:#319795;background-color:rgba(49, 151, 149, var(--bg-opacity))}.bg-blue-600{--bg-opacity:1;background-color:#3182ce;background-color:rgba(49, 130, 206, var(--bg-opacity))}.rounded-md{border-radius:0.375rem}.border-b-2{border-bottom-width:2px}.cursor-pointer{cursor:pointer}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.items-center{align-items:center}.justify-center{justify-content:center}.justify-around{justify-content:space-around}.font-bold{font-weight:700}.h-1{height:0.25rem}.h-2{height:0.5rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-10{height:2.5rem}.text-sm{font-size:0.875rem}.text-2xl{font-size:1.5rem}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:0.25rem}.mt-2{margin-top:0.5rem}.mb-2{margin-bottom:0.5rem}.ml-2{margin-left:0.5rem}.mb-3{margin-bottom:0.75rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mb-6{margin-bottom:1.5rem}.max-w-2xl{max-width:42rem}.outline-none{outline:2px solid transparent;outline-offset:2px}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.pb-1{padding-bottom:0.25rem}.pt-2{padding-top:0.5rem}.pl-2{padding-left:0.5rem}.pr-3{padding-right:0.75rem}.absolute{position:absolute}.relative{position:relative}.stroke-current{stroke:currentColor}.text-left{text-align:left}.text-center{text-align:center}.tracking-tighter{letter-spacing:-0.05em}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-1{width:0.25rem}.w-2{width:0.5rem}.w-3{width:0.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-10{width:2.5rem}.z-10{z-index:10}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.transition{transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes ping{75%,100%{transform:scale(2);opacity:0}}@keyframes ping{75%,100%{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}@keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}@-webkit-keyframes spin-reverse{0%{transform:rotate(359deg)}100%{transform:rotate(0deg)}}@keyframes spin-reverse{0%{transform:rotate(359deg)}100%{transform:rotate(0deg)}}@-webkit-keyframes bounce2{0%{transform:translateY(0)}25%{transform:translateY(-15%)}100%{transform:translateY(10%)}}@keyframes bounce2{0%{transform:translateY(0)}25%{transform:translateY(-15%)}100%{transform:translateY(10%)}}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
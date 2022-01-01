// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\r\n\ttext-align: center;\r\n}\r\n\r\n.App-logo {\r\n\theight: 40vmin;\r\n\tpointer-events: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n\t.App-logo {\r\n\t\tanimation: App-logo-spin infinite 20s linear;\r\n\t}\r\n}\r\n\r\n.App-header {\r\n\tbackground-color: #282c34;\r\n\tmin-height: 100vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: calc(10px + 2vmin);\r\n\tcolor: white;\r\n}\r\n\r\n.App-link {\r\n\tcolor: #61dafb;\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n\tfrom {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\tto {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
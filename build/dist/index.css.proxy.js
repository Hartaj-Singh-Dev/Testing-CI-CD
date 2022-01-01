// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\r\n\tmargin: 0;\r\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\r\n\t\t'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\ncode {\r\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
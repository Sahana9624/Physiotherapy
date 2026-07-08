const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'Styles', 'Home.module.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const hoverRegex = /([^\n]*:hover[^{]*\{)([^}]*)(\})/g;

cssContent = cssContent.replace(hoverRegex, (match, p1, p2, p3) => {
    return `@media (hover: hover) {\n  ${p1}${p2}${p3}\n}`;
});

fs.writeFileSync(cssPath, cssContent);
console.log('Done wrapping hover rules in Home.module.css');

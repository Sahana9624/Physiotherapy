const fs = require('fs');
let data = fs.readFileSync('src/Styles/Contact.module.css', 'utf8');
data = data.replace(/\\n/g, '\n');
fs.writeFileSync('src/Styles/Contact.module.css', data);

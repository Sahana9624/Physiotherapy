const fs = require('fs');
let data = fs.readFileSync('src/Styles/Contact.module.css', 'utf8');
data += `
@media (max-width: 768px) {
  .contact-card {
    flex-direction: column-reverse;
  }
}
`;
fs.writeFileSync('src/Styles/Contact.module.css', data);

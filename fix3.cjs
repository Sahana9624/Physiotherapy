const fs = require('fs');
let data = fs.readFileSync('src/Styles/Contact.module.css', 'utf8');

// We know we recently appended a max-width 768px block at the end.
// Let's replace the whole contact-card flex-direction override if it exists.
data = data.replace(
  /@media \(max-width: 768px\) {\n  \.contact-card {\n    flex-direction: column-reverse;\n  }\n}/,
  ""
);

// We need to inject the proper order styling into the existing mobile block.
// Or we can just append a new `@media (max-width: 768px)` block at the end that sets the orders.
data += `
@media (max-width: 768px) {
  .contact-card__info {
    display: contents;
  }
  .contact-card__info h1 {
    order: 1;
  }
  .intro {
    order: 2;
  }
  .contact-card__form {
    order: 3;
  }
  .contact-card__info h2 {
    order: 4;
  }
  .detail-item {
    order: 5;
  }
}
`;

fs.writeFileSync('src/Styles/Contact.module.css', data);

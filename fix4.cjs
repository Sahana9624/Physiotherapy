const fs = require('fs');
let data = fs.readFileSync('src/Styles/Contact.module.css', 'utf8');

// replace the end of the file with the correct gap: 0 logic
data = data.replace(/@media \(max-width: 768px\) {\n  \.contact-card__info {[\s\S]*?}\n}/, `
@media (max-width: 768px) {
  .contact-card {
    gap: 0 !important;
  }
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
    margin-bottom: 2rem;
  }
  .contact-card__info h2 {
    order: 4;
  }
  .detail-item {
    order: 5;
  }
}
`);

fs.writeFileSync('src/Styles/Contact.module.css', data);

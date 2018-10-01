# parcel-plugin-handlebars-precompile
Precompile handlebars templates into javascript allowing them to be imported as a regular javascript source.

# Install

```bash
npm install --save-dev parcel-plugin-handlebars-precompile
```

# Usage
  
Import your handlebars template:  

```javascript
import templateFunction from './template.hbs';
document.body.innerHTML = templateFunction();
```

Run the parcel bundler (assuming the above javascript file is imported from `index.html`):  

```bash
parcel build index.html
```

# Credits
 - [Handlebars](https://handlebarsjs.com/) - A templates on steroids.
 - [Parcel](https://parceljs.org/) - Zero configuration bundler.

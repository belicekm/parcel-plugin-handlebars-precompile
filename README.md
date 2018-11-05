# parcel-plugin-handlebars-precompile
Precompile handlebars templates into javascript allowing them to be imported as a regular javascript source.

# Install

```bash
npm install --save-dev parcel-plugin-handlebars-precompile
```

# Usage
  
Import your handlebars template:  

```javascript
// index.js
import templateFunction from './template.hbs';
document.body.innerHTML = templateFunction();
```

Import `index.js` from your `index.html` file:

```html
<!DOCTYPE html>
<html>
  <!-- index.html -->
  ...
  <body>
    <script src="./index.js"></script>
  </body>
  ...
</html>
```

Run the parcel bundler:  

```bash
parcel build index.html
```

# Credits
 - [Handlebars](https://handlebarsjs.com/) - A templates on steroids.
 - [Parcel](https://parceljs.org/) - Zero configuration bundler.

# parcel-plugin-handlebars-precompile
Precompile handlebars templates into javascript allowing them to be imported as a regular javascript source.

# Install

```bash
npm install --save-dev parcel-plugin-handlebars-precompile
```

# Usage
  
Import your handlebars template:  

#### Using named export
```javascript
import {templateFunction as myTemplate} from './template.hbs';
document.body.innerHTML = myTemplate();
```

#### Using default export
```javascript
import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './template.hbs';

const templateFunction = Handlebars.template(template);
document.body.innerHTML = templateFunction();
```

Assuming the above javascript file is imported from `index.html`.  
Run the parcel bundler:  

```bash
parcel build index.html --no-cache
```

# Caveats

- Use `--no-cache` when calling parcel with this plugin.  
  There is an [issue](https://github.com/parcel-bundler/parcel/issues/933) with parcel caching causing troubles with
javascript output.
- Right now compatible only with `parcel@1.8.1`

# Credits
 - [Handlebars](https://handlebarsjs.com/) - A templates on steroids.
 - [Parcel](https://parceljs.org/) - Zero configuration bundler.

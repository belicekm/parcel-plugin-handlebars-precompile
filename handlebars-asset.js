const Handlebars = require('handlebars');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class HbsAsset extends JSAsset {
    async parse(code) {
        const precompiled = Handlebars.precompile(code);
        this.contents = `
                import Handlebars from 'handlebars/dist/handlebars.runtime';
                const templateFunction = Handlebars.template(${precompiled});
                export default ${precompiled};
                export {templateFunction};
                `;
        return await super.parse(this.contents);
    }
}

module.exports = HbsAsset;

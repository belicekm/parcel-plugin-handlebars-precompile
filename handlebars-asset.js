const Handlebars = require('handlebars');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class HbsAsset extends JSAsset {
    async parse(code) {
        this.contents = 'export default ' + Handlebars.precompile(code) + ';';
        return await super.parse(this.contents);
    }
}

module.exports = HbsAsset;

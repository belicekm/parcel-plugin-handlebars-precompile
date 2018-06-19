declare module "*.hbs" {
    const template: any;
    const templateFunction: (param?: any) => string;
    export default template;
    export {templateFunction};
}

declare module "*.handlebars" {
    const template: any;
    const templateFunction: (param?: any) => string;
    export default template;
    export {templateFunction};
}

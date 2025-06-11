export default class CommonFunctions {
    constructor(page) {
        this.page = page;
    }
    async navigateToUrl(url) {
        await this.page.goto(url);
    }
    
    
}

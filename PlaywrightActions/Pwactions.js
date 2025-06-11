export default class Pwactions {
    constructor(page) {
        this.page = page;
    }
    
    async clickElement(locator) {
        await this.page.click(locator);
    }

    async fillInput(locator, text) {
        await this.page.fill(locator, text);
    }

    

}

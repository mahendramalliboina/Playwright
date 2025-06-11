import Pwactions from '../PlaywrightActions/Pwactions';
import CommonFunctions from '../common-functions/common-functions.spec';

export default class Login {
    constructor(page) {
        this.page = page;
        this.pwactions = new Pwactions(page);
        this.commonFunctions = new CommonFunctions(page);
        this.inputEmail = "//input[@type='email']";
        this.inputPassword = "//input[@name='password']";
        this.buttonLogin = "//button[normalize-space()='Login']";
    }
    
    async login(username, password) {
        await this.commonFunctions.navigateToUrl('https://mahendraprod1.thrivesparrow.com/login');
        await this.pwactions.fillInput(this.inputEmail, username);
        await this.pwactions.fillInput(this.inputPassword, password);
        await this.pwactions.clickElement(this.buttonLogin);
    }
}
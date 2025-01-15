const { expect } = require('@playwright/test');

class landingPage {

    constructor(page) {   
        this.page = page;
        this.username = page.locator("//input[@id='username']");
        this.password = page.locator("//input[@id='password]");
        this.submitBtn = page.locator("//button[normalize-space()='Submit Form']");
    }

    async goTo() {
        
        // Navigate to the application
        await this.page.goto("https://demo4.mmswire.com/view/login", { waitUntil: 'load' });
    }
}
module.exports = { landingPage };
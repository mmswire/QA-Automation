const { expect } = require('@playwright/test');
const {landingPage} = require('./landingPage');

class poManager {

    constructor(page) {   
        this.page = page;
        this.lp = new landingPage(page);
    }

    getLandingPage()
    {

        return this.lp;
    }
}
module.exports = { poManager };
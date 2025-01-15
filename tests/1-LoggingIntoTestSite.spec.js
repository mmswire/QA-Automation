const {test,expect, request} = require('@playwright/test');
const {poManager} = require('../pageObject/poManager.js');


const loginDataSet = JSON.parse(JSON.stringify(require("../utils/1-LoggingIntoTestSiteTestData.json")));

for(const data of loginDataSet)
{
test(`Logging in as QA with OTP disabled ${data.clientSite}`, async ({ page }) => {

  const po = new poManager(page);
  const lp = po.getLandingPage();
  //await lp.goTo();

});
}
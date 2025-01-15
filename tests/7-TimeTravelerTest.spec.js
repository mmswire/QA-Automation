const {test,expect, request} = require('@playwright/test');
const loginDataSet = JSON.parse(JSON.stringify(require("../utils/1-LoggingIntoTestSiteTestData.json")));

for(const data of loginDataSet)
{ 
test(`Testing Time Traveler Functionality  ${data.clientSite}`, async ({ page }) => {
  
  });
}
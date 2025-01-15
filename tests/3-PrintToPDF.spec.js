const {test,expect, request} = require('@playwright/test');
const loginDataSet = JSON.parse(JSON.stringify(require("../utils/1-LoggingIntoTestSiteTestData.json")));


for(const data of loginDataSet)
{ 
test(`Generating a PDF from a page ${data.clientSite}`, async ({ page }) => {
  // Array of clients to test


});
}
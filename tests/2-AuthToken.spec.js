const {test,expect, request} = require('@playwright/test');
const loginDataSet = JSON.parse(JSON.stringify(require("../utils/1-LoggingIntoTestSiteTestData.json")));


for(const data of loginDataSet)
{ 
test(`WIRE Authentication Checks ${data.clientSite}`, async ({ page }) => {

  // Loop over the clients array and run tests for each client

});
}
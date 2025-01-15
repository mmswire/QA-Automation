const {test,expect, request} = require('@playwright/test');
const loginDataSet = JSON.parse(JSON.stringify(require("../utils/1-LoggingIntoTestSiteTestData.json")));
const {cumstomtest} = require('../utils/test-base.js');

for(const data of loginDataSet)
{ 
  cumstomtest(`Create and Edit Component Types ${data.clientSite}`, async ({ page, testDataSeriesTable }) => {

    // added fixture from test base

  });
}
  
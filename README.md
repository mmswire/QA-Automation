# QA-Automation

## Table of Contents
- [Prerequisites](#prerequisites)
- [Running Playwright Tests](#running-playwright-tests)
- [Generating Reports](#generating-reports)
- [Running Tests in Headless Mode](#running-tests-in-headless-mode)
- [Page Object Model (POM)](#page-object-model-pom)
- [Parameterized Tests](#parameterized-tests)
- [Pipeline](#storing-secrets-securely)

##1. Prerequisites
Before you start running Playwright tests, ensure you have the following prerequisites installed:

Node.js (v22 or above) - Download Node.js
Playwright package - Can be installed via npm

Install Playwright
`npx playwright test`

##2. Running Playwright Tests
   
`npx playwright test`
This will run all test files in the tests directory by default.

##4. Generating Reports
   
  `npx playwright test --reporter=html`

This will generate an HTML report in the playwright-report directory by default.

Generating JSON Report

  `npx playwright test --reporter=json`

You can also specify where to output the report

##4. Running Tests in Headless Mode
By default, Playwright runs tests in headless mode (without a UI). However, you can explicitly set the headless mode if you need to confirm the environment.

  `npx playwright test --headed`

To run with UI (headed mode), remove the --headed flag or use:

##5. Page Object Model (POM)
This frameworks supports (POM) which  a design pattern used to create objects that serve as an interface to interact with a webpage. The idea is to create reusable components representing parts of wire web application, making tests cleaner and more maintainable.
Please follow the standard provided under landing page object model

##6. Parameterized Tests
This frame work supports parameterized tests using JSON data. This allows you to run the same test with different inputs.
Each Is set at the moment is set to run atleast three times looping acrosss different client sites

##7. Pipeline
   Pipe line will run based on a push or pull request to master . The pipline can also be schedualed to run at anytime.
   There is only one secret currently stored and that is webook for Automation results channel on slack 




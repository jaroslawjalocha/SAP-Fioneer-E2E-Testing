# SAP-Fioneer E2E Testing

This repository contains end-to-end automated tests for the SAP Fioneer website, designed to validate the functionality of financial service software solutions. The tests are created for a recruitment task and demonstrate basic navigation and form validation capabilities.

## Prerequisites

Before running the tests, make sure you have the following installed:
- Node.js (LTS version recommended)
- npm (usually comes with Node.js)
- Google Chrome

## Installation

To set up the testing environment, clone the repository and install the necessary dependencies:

```sh
git clone https://github.com/jaroslawjalocha/SAP-Fioneer-E2E-Testing.git
cd SAP-Fioneer-E2E-Testing
npm install
```
Additionally, install Allure Commandline to generate test reports:
```
npm install -g allure-commandline --save-dev

```

## Running Tests

To run the full suite of tests, execute the following command in your terminal:

```bash
npx wdio run wdio.conf.js
```
## Test Suite Details

The test suite includes several test files, each targeting specific functionalities within the application:

- `financialControlTest.js`
  - Verifies navigation to the Financial Control page after hovering and clicking on the menu options. It ensures that the correct page is loaded.
  
- `contactFormValidationTest.js`
  - Checks the form validation messages on the contact page by attempting to submit an empty contact form and verifying that appropriate error messages are displayed.
  
- `homePageBookmarksVisibilityTest.js`
  - Ensures the visibility of various bookmarks/tabs on the home page, such as Banking, Insurance, Finance & ESG, Services, Partners, and Resources.

## Project Structure

The project follows the standard Page Object Model (POM) pattern, with a separate directory for PageObjects and Tests.

- **PageObjects**: Contains scripts that define page objects for the SAP Fioneer application.
- **Tests**: Includes test files that implement the actual test cases.

After running tests, results are generated and stored in the `allure-results` directory. To view a detailed test report, run the following command:

```sh
 allure generate allure-results --clean


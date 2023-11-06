const MainPage = require('../PageObjects/MainPage');
const expect = require('chai').expect;

describe('Finance & ESG bookmark navigation', () => {
    // Hook to run before all tests - navigates to the main page
    before(async () => {
        await MainPage.open();
    });

    it('should navigate to Financial Control page after hovering and clicking on the options', async () => {
        // Hover over the Finance & ESG menu option
        await MainPage.hoverFinanceAndEsg();

        // Click the Financial Control link and wait for navigation
        await MainPage.clickFinancialControl();

        // Verify that the current URL is as expected
        expect(await browser.getUrl()).to.equal('https://www.sapfioneer.com/finance-esg/financial-control/', 'The URL after clicking Financial Control does not match the expected URL');
    });
});
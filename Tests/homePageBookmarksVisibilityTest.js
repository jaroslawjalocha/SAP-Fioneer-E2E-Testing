const MainPage = require('../PageObjects/MainPage');
const expect = require('chai').expect;

describe('SAP-Fioneer page navigation', () => {
    // Hook to run before all tests - navigates to the main page
    before(async () => {
        await MainPage.open();
    });
    // Test case to verify if the Banking tab is displayed
    it('should display Banking tab', async () => {
        // Check if the Banking tab is visible
        await MainPage.waitForLinkBankingDisplayed();
        expect(await MainPage.linkBanking.isDisplayed()).to.be.true;
    });
    // Test case to verify if the Insurance tab is displayed
    it('should display Insurance tab', async () => {
        expect(await MainPage.linkInsurance.isDisplayed()).to.be.true;
    });
    // Test case to verify if the Finance And Esg tab is displayed
    it('should display Finance And Esg tab', async () => {
        expect(await MainPage.linkFinanceAndEsg.isDisplayed()).to.be.true;
    });
    // Test case to verify if the Services And Esg tab is displayed
    it('should display Services tab', async () => {
        expect(await MainPage.linkServices.isDisplayed()).to.be.true;
    });
    // Test case to verify if the Partners And Esg tab is displayed
    it('should display Partners tab', async () => {
        expect(await MainPage.linkPartners.isDisplayed()).to.be.true;
    });
    // Test case to verify if the Company And Esg tab is displayed
    it('should display Company tab', async () => {
        expect(await MainPage.linkCompany.isDisplayed()).to.be.true;
    });
    // Test case to verify if the Resources And Esg tab is displayed
    it('should display Resources tab', async () => {
        expect(await MainPage.linkResources.isDisplayed()).to.be.true;
    });
});


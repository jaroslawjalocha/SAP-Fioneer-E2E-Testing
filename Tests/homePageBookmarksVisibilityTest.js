const MainPage = require('../PageObjects/MainPage');
const expect = require('chai').expect;

describe('SAP-Fioneer page navigation', () => {
    before(async () => {
        await MainPage.open();
    });

    it('should display Banking tab', async () => {
        expect(await MainPage.linkBanking.isDisplayed()).to.be.true;
    });

    it('should display Insurance tab', async () => {
        expect(await MainPage.linkInsurance.isDisplayed()).to.be.true;
    });

    it('should display Finance And Esg tab', async () => {
        expect(await MainPage.linkFinanceAndEsg.isDisplayed()).to.be.true;
    });

    it('should display Services tab', async () => {
        expect(await MainPage.linkServices.isDisplayed()).to.be.true;
    });

    it('should display Partners tab', async () => {
        expect(await MainPage.linkPartners.isDisplayed()).to.be.true;
    });

    it('should display Company tab', async () => {
        expect(await MainPage.linkCompany.isDisplayed()).to.be.true;
    });

    it('should display Resources tab', async () => {
        expect(await MainPage.linkResources.isDisplayed()).to.be.true;
    });

    after(async () => {
        let allWindows = await browser.getWindowHandles();
        for (let window of allWindows) {
            await browser.switchToWindow(window);
            await browser.closeWindow();
        }
    });


});


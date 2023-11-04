const MainPage = require('../PageObjects/MainPage');
const expect = require('chai').expect;

describe('Finance & ESG bookmark navigation', () => {
    before(async () => {
        await MainPage.open();
    });

    it('should navigate to Financial Control page after hovering and clicking on the options', async () => {
        await MainPage.hoverFinanceAndEsg();
        expect(await MainPage.linkFinancialControl.isDisplayed()).to.be.true;
        await MainPage.clickFinancialControl();
        expect(await browser.getUrl()).to.equal('https://www.sapfioneer.com/finance-esg/financial-control/');
    });

    after(async () => {
        let allWindows = await browser.getWindowHandles();
        for (let window of allWindows) {
            await browser.switchToWindow(window);
            await browser.closeWindow();
        }
    });


});
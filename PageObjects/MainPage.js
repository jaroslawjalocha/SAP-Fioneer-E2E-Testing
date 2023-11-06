const { $ } = require('@wdio/globals')
const Page = require('./Page');

class MainPage extends Page {
    // Define selectors using getter methods
    get linkBanking() {
        return $('#menu-item-29961');
    }
    get linkInsurance() {
        return $('#menu-item-29972');
    }
    get linkFinanceAndEsg() {
        return $('#menu-item-29979');
    }
    get linkServices() {
        return $('#menu-item-29985');
    }
    get linkPartners() {
        return $('#menu-item-26');
    }
    get linkCompany() {
        return $('#menu-item-26834');
    }
    get linkResources() {
        return $('#menu-item-26831');
    }
    get linkFinancialControl() {
        return $('//span[normalize-space()="Financial Control"]');
    }
    get buttonGetInTouch() {
        return $('=Get in touch');
    }
    // Methods to interact with elements
    async hoverFinanceAndEsg() {
        await this.linkFinanceAndEsg.moveTo();
    }
    async clickGetInTouch() {
        await this.buttonGetInTouch.click();
    }
    async waitForLinkBankingDisplayed() {
        await this.linkBanking.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Banking tab is not displayed after 5s'
        });
    }
    async clickFinancialControl() {
        await this.linkFinancialControl.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'The Financial Control link is not displayed after 5 seconds'
        });
        await this.linkFinancialControl.waitForClickable({
            timeout: 5000,
            timeoutMsg: 'The Financial Control link is not clickable after 5 seconds'
        });
        await this.linkFinancialControl.click();
    }
    // Open the main page
    open() {
        return super.open('');
    }

}

module.exports = new MainPage();

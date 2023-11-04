const { $ } = require('@wdio/globals')
const Page = require('./Page');

class MainPage extends Page {

    get linkBanking() {
        return $('//a[contains(@class, "nav-top-link") and contains(text(), "Banking")]');
    }
    get linkInsurance() {
        return $('//a[contains(@class, "nav-top-link") and contains(text(), "Insurance")]');
    }
    get linkFinanceAndEsg() {
        return $('//a[contains(@class, "nav-top-link") and contains(text(), "Finance & ESG")]');
    }
    get linkServices() {
        return $('//a[contains(@class, "nav-top-link") and contains(text(), "Services")]');
    }
    get linkPartners() {
        return $('//a[contains(@class, "nav-top-link") and contains(text(), "Partners")]');
    }
    get linkCompany() {
        return $('//a[contains(@class, "nav-top-link") and contains(text(), "Company")]');
    }
    get linkResources() {
        return $('//a[contains(@class, "nav-top-link") and contains(text(), "Resources")]');
    }
    get linkFinancialControl() {
        return $('//span[normalize-space()="Financial Control"]');
    }
    async hoverFinanceAndEsg() {
        await this.linkFinanceAndEsg.moveTo();
        // Możesz potrzebować dodatkowej logiki, aby poczekać na pojawienie się opcji po najechaniu myszą
      }
      async clickFinancialControl() {
        await this.linkFinancialControl.click();
        // Możesz potrzebować dodatkowej logiki, aby poczekać na pojawienie się opcji po najechaniu myszą
      }
    open() {
        return super.open('');
    }

}

module.exports = new MainPage();

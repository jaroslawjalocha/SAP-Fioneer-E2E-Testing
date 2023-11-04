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

    open() {
        return super.open('');
    }
}

module.exports = new MainPage();

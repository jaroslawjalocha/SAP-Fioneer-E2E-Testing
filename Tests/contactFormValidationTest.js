const MainPage = require('../PageObjects/MainPage');
const ContactPage = require('../PageObjects/ContactPage');
const expect = require('chai').expect;

describe('Contact form validation', function () {
    before(async function () {
        await MainPage.open();
    });

    it('should display validation messages when submitting an empty contact form', async function () {
        // Navigate to contact page
        await MainPage.clickGetInTouch();
        expect(await browser.getUrl()).to.equal('https://www.sapfioneer.com/contact/', 'Did not navigate to contact page');
        
        // Work within the iframe
        await ContactPage.switchToIframe();
        await ContactPage.clickSubmit();

        // Check for validation messages
        expect(await ContactPage.alertFirstname.isDisplayed(), 'First name validation message did not appear').to.be.true;
        expect(await ContactPage.alertLastname.isDisplayed(), 'Last name validation message did not appear').to.be.true;
        expect(await ContactPage.alertEmail.isDisplayed(), 'Email validation message did not appear').to.be.true;
        expect(await ContactPage.alertCountry.isDisplayed(), 'Country validation message did not appear').to.be.true;
        expect(await ContactPage.alertHowCanIHelpYou.isDisplayed(), 'How can we help you validation message did not appear').to.be.true;
        expect(await ContactPage.alertConsent.isDisplayed(), 'Consent validation message did not appear').to.be.true;
        expect(await ContactPage.alertAllConsent.isDisplayed(), 'All consent validation message did not appear').to.be.true;
    });
});

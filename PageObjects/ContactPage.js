const { $ } = require('@wdio/globals')
const Page = require('./Page');

class ContactPage extends Page {

  // Define selectors using getter methods
  get buttonSubmit() {
    return $('.hs-button.primary.large');
  }
  get alertFirstname() {
    return $('.hs_firstname .hs-error-msg');
  }
  get alertLastname() {
    return $('.hs_lastname .hs-error-msg');
  }
  get alertEmail() {
    return $('.hs_email .hs-error-msg');
  }
  get alertCountry() {
    return $('.hs_country__new_ .hs-error-msg');
  }
  get alertHowCanIHelpYou() {
    return $('.hs_how_can_we_help_you_ .hs-error-msg');
  }
  get alertConsent() {
    return $('.hs\\_LEGAL\\_CONSENT\\.processing .hs-error-msg');
  }
  get alertAllConsent() {
    return $('.hs_error_rollup .hs-main-font-element');
  }
  // Methods to interact with elements
  async clickSubmit() {
    await this.buttonSubmit.click();
  }
  async switchToIframe() {
    await browser.switchToFrame(await $('iframe[id="hs-form-iframe-0"]'));
  }
}

module.exports = new ContactPage();

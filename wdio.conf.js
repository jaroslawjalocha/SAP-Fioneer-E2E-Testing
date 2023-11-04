exports.config = {
    runner: 'local',

    specs: [
        './Tests/homePageBookmarksVisibilityTest.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome'
    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://www.sapfioneer.com/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (error !== undefined) {
            browser.takeScreenshot();
        }
    },

    onPrepare: function (config, capabilities) {

    },
    onComplete: function (exitCode, config, capabilities, results) {

    },
}

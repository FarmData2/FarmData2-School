const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  video: false,
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  e2e: {
    supportFile: './cypress/support/e2e.js',
    specPattern: './*.e2e.cy.js',
  },
});

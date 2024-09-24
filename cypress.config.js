const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', cucumber());
    },
    baseUrl: "https://advantageonlineshopping.com",
    specPattern: "cypress/e2e/step_definitions/*.feature", 
    reporter: 'mochawesome', 
    reporterOptions: {
      reportDir: 'cypress/reports', 
      overwrite: true, 
      html: true
    },
  },
});

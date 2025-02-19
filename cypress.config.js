const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportHeight: 430,
  viewportWidth: 932,
  video: false,
  e2e: {
    baseUrl: 'https://cars.vueling.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

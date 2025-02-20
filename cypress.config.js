const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportHeight: 430,
  viewportWidth: 932,
  video: false,
  e2e: {
    baseUrl: 'https://cars.vueling.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 15000, // Espera más tiempo antes de fallar
    pageLoadTimeout: 60000, // Espera más tiempo a que la página cargue
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

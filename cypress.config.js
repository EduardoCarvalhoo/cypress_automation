const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
  projectId: "nqxz33",
  e2e: {
    baseUrl: 'https://buggy.justtestit.org/',
    viewportWidth: 1300,
    viewportHeight: 800,
    video: false,
    screenshotOnRunFailure: true,
    specPattern: '**/*.feature',
    supportFile: false,
    
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )
      
      return config
    },
  },
})
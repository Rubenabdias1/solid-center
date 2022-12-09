import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,

  projectId: 'vw7mp1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

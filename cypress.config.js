const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://qa-test.dmzrwbdiwhv33.amplifyapp.com/login'
    },
  },
);

import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: true,
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Web chrome Desktop',
      testIgnore: /.*\.api\.spec\.ts/, // Ignora los tests de API en este proyecto
      use: { ...devices['Desktop Chrome'] },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */

    /* Test against mobile viewports. */
     {
       name: 'Mobile Web Android',
       testIgnore: /.*\.api\.spec\.ts/, // Ignora los tests de API en este proyecto
       use: { ...devices['Pixel 5'] },
     },
     {
      name: 'Mobile Web iOS',
      testIgnore: /.*\.api\.spec\.ts/,
      use: { ...devices['iPhone 12'] },
    },
     {
        name: 'api',
        testMatch: /.*\.api\.spec\.ts/,
        use: {
          baseURL: 'https://reqres.in',
          headless: true,
          screenshot: 'off',
          trace: 'off',
          video: 'off',
          extraHTTPHeaders: {
            'Accept': 'application/vnd.github.v3+json',
            'x-api-key': 'reqres-free-v1',
            'Authorization': `token ${process.env.API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      },
      

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

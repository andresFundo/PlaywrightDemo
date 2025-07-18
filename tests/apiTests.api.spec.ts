import { test, expect } from '@playwright/test';
import { AuthenticationApi } from './api-steps/authenticationApi';
import dotenv from 'dotenv';
import { ApiDataHelper } from './api-utils/apiDataHelper';
dotenv.config();


test('Login to generate a new token', async ({ request }, testInfo) => {
  const authentication = new AuthenticationApi(request);
  const user = process.env.API_USER as string;
  const password = process.env.API_PASSWORD as string;
  const requestBody = { email: user, password };

  await ApiDataHelper.attachJson(testInfo, 'Request Body', requestBody);

  const response = await authentication.login(user, password);
  const responseBody = await response.json();
  await ApiDataHelper.attachJson(testInfo, 'Response Body', responseBody);

  expect(response.ok()).toBeTruthy();
});
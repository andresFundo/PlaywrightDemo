import { test, expect } from '@playwright/test';
import { ApplyNowPage } from './page-object/applyNowPage';
import { ScreenshotHelper } from './web-utils/screenshotHelper';
import dotenv from 'dotenv';
dotenv.config();

test('apply now options', async ({ page }, testInfo) => {
  await page.goto('https://app-qa.fundo.com/apply-now?PID=9898');

  const applyNowPage = new ApplyNowPage(page);

  await applyNowPage.completeApplyNow();
  await ScreenshotHelper.attachScreenshot(page, testInfo, 'Apply Now Page process');
  
  
});


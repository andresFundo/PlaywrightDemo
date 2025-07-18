import { TestInfo } from '@playwright/test';

export class ApiDataHelper {
  static async attachJson(testInfo: TestInfo, name: string, data: unknown) {
    await testInfo.attach(name, {
      body: Buffer.from(JSON.stringify(data, null, 2)),
      contentType: 'application/json',
    });
  }
}
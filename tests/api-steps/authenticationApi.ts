import { APIRequestContext, APIResponse } from '@playwright/test';
import { ENDPOINTS } from '../api-utils/endpoints';

export class AuthenticationApi {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string): Promise<APIResponse> {
    return await this.request.post(ENDPOINTS.LOGIN, {
      data: { email, password },
    });
  }
}
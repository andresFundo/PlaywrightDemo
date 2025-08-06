import { faker } from '@faker-js/faker';

export function generateFakeEmail(): string {
  return faker.internet.email();
}
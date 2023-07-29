export enum RegisterStep {
  Credentials = 'credentials',
  Personal = 'personal',
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType?: AccountType;
}

export type AccountType = 'professional' | 'personal';

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

export interface RegisterResponse { status: number; message: string }

export type AccountType = 'professional' | 'personal';

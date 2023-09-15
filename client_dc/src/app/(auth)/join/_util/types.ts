export type FormValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  job: string;
  age: number;
  emailAcceptance: boolean;
  personalInfoConsent: boolean;
};

export type FormValuesWithoutBooleans = Omit<FormValues, 'emailAcceptance' | 'personalInfoConsent'>;

export type FormError = {
  [key in keyof FormValues]?: string;
};

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  job: string;
  age: number;
  emailAcceptance: boolean;
  personalInfoConsent: boolean;
};

export type SignUpValuesWithoutBooleans = Omit<
  SignUpValues,
  'emailAcceptance' | 'personalInfoConsent'
>;

export type SignUpError = {
  [key in keyof SignUpValues]?: string;
};

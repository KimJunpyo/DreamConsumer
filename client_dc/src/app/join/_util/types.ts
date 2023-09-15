export type FormValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  job: string;
  age: number;
  emailAcceptance: boolean;
};

export type FormError = {
  [key in keyof FormValues]?: string;
};

export type LoginValues = {
  email: string;
  password: string;
};

export type LoginErrors = {
  [key in keyof LoginValues]?: string;
};

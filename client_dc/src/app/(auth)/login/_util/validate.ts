import type { LoginValues, LoginErrors } from './types';
import { LOGIN_ERROR_MESSAGE } from './constants';

export const validate = (values: LoginValues) => {
  const errors: LoginErrors = {};

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(values.email)) {
    errors.email = LOGIN_ERROR_MESSAGE.EMAIL;
  }

  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
  if (!passwordPattern.test(values.password)) {
    errors.password = LOGIN_ERROR_MESSAGE.PASSWORD;
  }

  return errors;
};

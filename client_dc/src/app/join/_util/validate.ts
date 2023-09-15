import type { FormValues, FormError } from './types';
import { SIGN_UP_ERROR_MESSAGE } from './constants';

export const validate = (values: FormValues) => {
  const errors: FormError = {};

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(values.email)) {
    errors.email = SIGN_UP_ERROR_MESSAGE.EMAIL;
  }

  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
  if (!passwordPattern.test(values.password)) {
    errors.password = SIGN_UP_ERROR_MESSAGE.PASSWORD;
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = SIGN_UP_ERROR_MESSAGE.COFIRM_PASSWORD;
  }

  const namePattern = /^[a-zA-Z가-힣]{2,}$/;
  if (!namePattern.test(values.userName)) {
    errors.userName = SIGN_UP_ERROR_MESSAGE.NAME;
  }

  // if (!values.job) {
  //   errors.job = SIGN_UP_ERROR_MESSAGE.JOB;
  // }

  // if (!values.age) {
  //   errors.age = SIGN_UP_ERROR_MESSAGE.AGE;
  // }

  return errors;
};

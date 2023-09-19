'use client';

import { Input, Checkbox, Button } from '@/components';
import useForm from '@/hooks/useForm';
import { validate } from './_util/validate';
import { SIGN_UP_INPUT_LIST, JOB_LIST } from './_util/constants';
import { useState, useMemo } from 'react';
import type { SignUpError, SignUpValuesWithoutBooleans } from './_util/types';
import SocialLogin from '../_components/SocialLogin';
import { generateRange } from '@/common/functions';
import { join } from '../_util/api';

export default function Join() {
  const initialValue = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    job: '',
    age: 0,
    emailAcceptance: false,
    personalInfoConsent: false,
  };
  const { values, handleChange } = useForm(initialValue);
  const [errors, setErrors] = useState<SignUpError>({});
  const AGE_RANGE = useMemo(() => generateRange(1950, 2015), []);

  const signUp = async () => {
    const errors = validate(values);
    setErrors(errors);

    const isValid = Object.keys(errors).length === 0;

    const body = {
      userName: values.userName,
      email: values.email,
      password: values.password,
      job: values.job,
      age: Number(values.age),
      emailAcceptance: values.emailAcceptance,
    };

    if (isValid) await join(body);
  };

  return (
    <div className='m-auto'>
      <section className='bg-blue-primary px-11 py-4'>
        <h1 className='text-white text-4xl font-nb my-5'>회원가입</h1>
        {SIGN_UP_INPUT_LIST.map((form) => (
          <div className='my-2 font-nr' key={form.label}>
            <div className='flex items-center gap-2'>
              <label className='text-white text-sm font-medium font-nr whitespace-nowrap'>
                {form.label}
              </label>
              <p className='text-red-text text-xs'>{errors[form.inputName as keyof SignUpError]}</p>
            </div>
            <Input
              inputType={form.inputType}
              inputName={form.inputName}
              value={values[form.inputName as keyof SignUpValuesWithoutBooleans]}
              handler={handleChange}
            />
          </div>
        ))}
        {/* TODO: select component 개발 완료시 수정 */}
        {/* <select name='job' onChange={handleChange}>
          {JOB_LIST.map((job) => (
            <option key={job} value={job}>
              {job}
            </option>
          ))}
        </select>
        <select name='age' onChange={handleChange}>
          {AGE_RANGE.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select> */}
      </section>
      <section className='px-11 pt-4 font-nr'>
        <div className='pb-4'>
          <div className='flex items-center gap-2'>
            <Checkbox
              value={values.personalInfoConsent}
              inputName='personalInfoConsent'
              handler={handleChange}
            >
              개인정보 수집 및 이용
            </Checkbox>
            <p className='text-red-text text-xs'>{errors.personalInfoConsent}</p>
          </div>
          <Checkbox
            value={values.emailAcceptance}
            inputName='emailAcceptance'
            handler={handleChange}
          >
            (선택) 이메일 수신 동의
          </Checkbox>
        </div>
        {/* TODO: button component 수정사항 반영시 수정 */}
        <Button title='회원가입' items='redLarge' />
        <SocialLogin />
      </section>
    </div>
  );
}

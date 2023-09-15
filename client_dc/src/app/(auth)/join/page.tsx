'use client';

import { Input, Checkbox, Button } from '@/components';
import useForm from '@/hooks/useForm';
import { validate } from './_util/validate';
import { SIGN_UP_INPUT_LIST } from './_util/constants';
import { useState } from 'react';
import type { FormError, FormValuesWithoutBooleans } from './_util/types';
import SocialLogin from '../_components/SocialLogin';

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
  const [errors, setErrors] = useState<FormError>({});

  const signUp = () => {
    const errors = validate(values);
    setErrors(errors);

    const isValid = Object.keys(errors).length === 0;
    // 추후 api 요청 로직 작성
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
              <p className='text-red-text text-xs'>{errors[form.inputName as keyof FormError]}</p>
            </div>
            <Input
              inputType={form.inputType}
              inputName={form.inputName}
              value={values[form.inputName as keyof FormValuesWithoutBooleans]}
              handler={handleChange}
            />
          </div>
        ))}
        {/* <select name='job' onChange={handleChange}>
          <option value='학생'>학생</option>
          <option value='회사원'>회사원</option>
          <option value='프리랜서'>프리랜서</option>
          <option value='무직'>무직</option>
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
        <Button title='회원가입' items='redLarge' />
        <SocialLogin />
      </section>
    </div>
  );
}

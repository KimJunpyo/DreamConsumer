'use client';

import { Input, Checkbox } from '@/components';
import useForm from '@/hooks/useForm';
import { validate } from './_util/validate';
import { SIGN_UP_FORM_LIST } from './_util/constants';
import { useState } from 'react';
import type { FormError, FormValues } from './_util/types';

export default function Join() {
  const initialValue = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    job: '',
    age: 0,
    emailAcceptance: false,
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
      <section className='bg-blue-primary px-12 py-4'>
        <h1 className='text-white text-4xl font-nb my-5'>회원가입</h1>
        {SIGN_UP_FORM_LIST.map((form) => (
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
              value={values[form.inputName as keyof Omit<FormValues, 'emailAcceptance'>]}
              handler={handleChange}
            />
          </div>
        ))}
      </section>
      <section className='px-12 pt-5'>
        <Checkbox value={values.emailAcceptance} inputName='emailAcceptance' handler={handleChange}>
          이메일 수신 동의
        </Checkbox>
      </section>
    </div>
  );
}

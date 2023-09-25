'use client';

import type { LoginValues, LoginErrors } from './_util/types';
import Link from 'next/link';
import useForm from '@/hooks/useForm';
import SocialLogin from '../_components/SocialLogin';
import { useState } from 'react';
import { Input, Button } from '@/components';
import { LOGIN_INPUT_LIST } from './_util/constants';
import { validate } from './_util/validate';
import { login } from '../_util/api';

export default function Login() {
  const initialValue = { email: '', password: '' };
  const { values, handleChange } = useForm(initialValue);
  const [errors, setErrors] = useState<LoginErrors>({});

  const signIn = async () => {
    const errors = validate(values);
    setErrors(errors);

    const isValid = Object.keys(errors).length === 0;
    if (isValid) await login(values);
  };

  return (
    <div className='mx-auto'>
      <section className='bg-blue-primary px-11 py-4'>
        <h1 className='text-white text-4xl font-nb my-5 mt-[15vh]'>로그인</h1>
        {LOGIN_INPUT_LIST.map((item) => (
          <div className='my-2 font-nr' key={item.label}>
            <div className='flex items-center gap-2'>
              <label className='text-white text-sm font-medium font-nr whitespace-nowrap'>
                {item.label}
              </label>
              <p className='text-red-text text-xs'>{errors[item.inputName as keyof LoginErrors]}</p>
            </div>
            <Input
              inputType={item.inputType}
              inputName={item.inputName}
              value={values[item.inputName as keyof LoginValues]}
              handler={handleChange}
            />
          </div>
        ))}
      </section>
      <section className='px-11 pt-4 font-nr'>
        <Button
          height='h-12'
          font='font-nb'
          fontSize='text-lg'
          color='bg-red-primary'
          handler={signIn}
        >
          로그인
        </Button>
        <Link
          href='/join'
          className='font-nr block text-sm text-center text-grey-text underline underline-offset-[6px] my-6'
        >
          아직 회원이 아니신가요?
        </Link>
        <SocialLogin />
      </section>
    </div>
  );
}

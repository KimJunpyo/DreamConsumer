'use client';

import type { SignUpError, SignUpValuesWithoutBooleans } from './_util/types';
import useForm from '@/hooks/useForm';
import SocialLogin from '../_components/SocialLogin';
import { useState, useMemo } from 'react';
import { Input, Checkbox, Button, Dropdown } from '@/components';
import { SIGN_UP_INPUT_LIST, JOB_LIST } from './_util/constants';
import { validate } from './_util/validate';
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
  const [job, setJob] = useState('');
  const [age, setAge] = useState('');
  const AGE_RANGE = useMemo(() => generateRange(1950, 2015).map(String), []);

  const signUp = async () => {
    const errors = validate({ ...values, job, age: Number(age) });
    setErrors(errors);

    const isValid = Object.keys(errors).length === 0;

    const body = {
      userName: values.userName,
      email: values.email,
      password: values.password,
      job,
      age: Number(age),
      emailAcceptance: values.emailAcceptance,
    };

    if (isValid) await join(body);
  };

  return (
    <div className='m-auto'>
      <section className='bg-blue-primary px-11 py-4'>
        <h1 className='text-white text-4xl font-nb mt-[5vh] mb-5'>회원가입</h1>
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
        <div className='flex justify-between font-nr pb-2'>
          <div className='w-[48%]'>
            <div className='flex items-center gap-2'>
              <label className='text-white text-sm font-medium font-nr whitespace-nowrap'>
                직업
              </label>
              <p className='text-red-text text-xs'>{errors.job}</p>
            </div>
            <Dropdown list={JOB_LIST} width='w-full' setState={setJob} borderless={false} />
          </div>
          <div className='w-[48%]'>
            <div className='flex items-center gap-2'>
              <label className='text-white text-sm font-medium font-nr whitespace-nowrap'>
                나이
              </label>
              <p className='text-red-text text-xs'>{errors.age}</p>
            </div>
            <Dropdown list={AGE_RANGE} width='w-full' setState={setAge} borderless={false} />
          </div>
        </div>
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
        <Button
          height='h-12'
          font='font-nb'
          fontSize='text-lg'
          color='bg-red-primary'
          handler={signUp}
        >
          회원가입
        </Button>
        <SocialLogin />
      </section>
    </div>
  );
}

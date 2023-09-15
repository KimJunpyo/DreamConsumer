'use client';

import { useState } from 'react';

export default function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? !prev[name as keyof T] : value,
    }));
  };

  return { values, handleChange };
}

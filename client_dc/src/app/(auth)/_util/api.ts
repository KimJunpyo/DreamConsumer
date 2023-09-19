import { extendedFetch } from '@/common/api/instance';

export const join = async <T>(body: T) => {
  const res = await extendedFetch('/users/sign-up', { method: 'POST', body: JSON.stringify(body) });

  if (!res.ok) {
    // response body 확인 후 수정
    throw new Error('Failed to sign up');
  }

  return res.json();
};

export const login = async <T>(body: T) => {
  const res = await extendedFetch('/users/sign-in', { method: 'POST', body: JSON.stringify(body) });

  if (!res.ok) {
    // response body 확인 후 수정
    throw new Error('Failed to sign in');
  }

  return res.json();
};

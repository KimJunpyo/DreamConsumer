import { extendedFetch } from '@/common/api/instance';
import { writeData } from './types';

export const write = async (body: writeData) => {
  const res = await extendedFetch('/items', { method: 'POST', body: JSON.stringify(body) });

  if (!res.ok) {
    throw new Error('등록 실패');
  }

  return res.json();
};

import { extendedFetch } from '@/common/api/instance';

export const deleteAll = async () => {
  const res = await extendedFetch('/trashcans', { method: 'DELETE' });

  if (!res.ok) {
    // response body 확인 후 수정
    throw new Error('Failed to delete all');
  }

  return res.json();
};

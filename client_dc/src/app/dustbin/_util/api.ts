import { extendedFetch } from '@/common/api/instance';

export const getDustbin = async (id: number, searchParams: string) => {
  const res = await extendedFetch(`/trashcans/${id}?${searchParams}`, { method: 'GET' });

  if (!res.ok) {
    throw new Error('Failed to get dustbin');
  }

  return res.json();
};

export const deleteAll = async () => {
  const res = await extendedFetch('/trashcans', { method: 'DELETE' });

  if (!res.ok) {
    throw new Error('Failed to delete all');
  }

  return res.json();
};

export const deleteItems = async (items: number[]) => {
  const promises = items.map(async (id) => {
    const endpoint = `/trashcans/${id}`;
    const res = await extendedFetch(endpoint, { method: 'DELETE' });
    return res.json();
  });

  const res = await Promise.allSettled(promises);
  console.log(res);
};

export const restoreItems = async (items: number[]) => {
  const promises = items.map(async (id) => {
    const endpoint = `/trashcans/${id}`;
    const res = await extendedFetch(endpoint, { method: 'PUT' });
    return res.json();
  });

  const res = await Promise.allSettled(promises);
  console.log(res);
};

import { extendedFetch } from '@/common/api/instance';

export const search = (body: string) => {
  extendedFetch('/search', {
    method: 'POST',
    body: JSON.stringify({
      search: body,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('검색 실패');
    }
    return res.json();
  });
};

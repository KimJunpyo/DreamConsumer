'use client';

import { Item } from '@/components';
import { dustbinEditState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

export default function Items() {
  const editMode = useRecoilValue(dustbinEditState);

  const temp = [
    {
      itemId: 1,
      title: '임시 게시글 1',
      date: '2023.7.10',
      groupPurchase: false,
    },
    {
      itemId: 2,
      title: '임시 게시글 2',
      date: '2023.7.10',
      groupPurchase: false,
    },
    {
      itemId: 3,
      title: '임시 게시글 3',
      date: '2023.7.10',
      groupPurchase: false,
    },
    {
      itemId: 4,
      title: '임시 게시글 4',
      date: '2023.7.10',
      groupPurchase: true,
    },
    {
      itemId: 5,
      title: '임시 게시글 5',
      date: '2023.7.10',
      groupPurchase: false,
    },
  ];

  return (
    <section className='mt-2 px-4'>
      {temp.map((t) => (
        <Item
          key={t.itemId}
          itemId={t.itemId}
          title={t.title}
          date={t.date}
          groupPurchase={t.groupPurchase}
          editMode={editMode}
        />
      ))}
    </section>
  );
}

'use client';

import { ProgressBar, CheckCircle } from '.';
import { usePathname, useRouter } from 'next/navigation';

// TODO: 휴지통에서 편집 클릭시 왼쪽에 체크박스 표시되어야 함

type Props = {
  itemId: number;
  title: string;
  date: string;
  groupPurchase: boolean;
  progress?: number;
  price?: number;
  editMode?: boolean;
};

export default function Item({
  itemId,
  title,
  date,
  groupPurchase,
  progress,
  price,
  editMode,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const isMyPage = pathname.startsWith('/user');

  const handleClick = () => {
    if (!isMyPage) return;
    router.push(`/detail/${groupPurchase ? 'group' : 'solo'}/${itemId}`);
  };

  return (
    <div
      className='flex items-center border-b border-grey-border px-2 pt-5 pb-3'
      onClick={handleClick}
    >
      {editMode && (
        <div className='pr-2'>
          <CheckCircle color='#FF5A5A' scale={0.6} itemId={itemId} />
        </div>
      )}
      <div className='min-w-0 w-full'>
        <div className='flex justify-between items-center pb-2 px-1 gap-2'>
          <h2 className='font-nb text-grey-text whitespace-nowrap text-ellipsis overflow-hidden'>
            {title}
          </h2>
          <span className='font-nr text-xs text-grey-border w-fit whitespace-nowrap text-end'>
            {isMyPage ? '성공' : '삭제'}날짜 {date}
          </span>
        </div>
        <ProgressBar progress={progress ?? 100} displayText price={price} />
      </div>
    </div>
  );
}

// isDetailPage의 값을 ture로 주게되면 기본 색상이 흰색으로 들어갑니다.

'use client';

import BookMarkIcon from '@/components/BookMarkIcon';

interface BookMarkProps {
  isLike?: boolean;
  isDetailPage?: boolean;
}

export default function BookMark({ isLike, isDetailPage }: BookMarkProps) {
  return (
    <div>
      <BookMarkIcon isLike={isLike} isDetailPage={isDetailPage} />
    </div>
  );
}

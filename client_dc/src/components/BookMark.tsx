'use client';

import BookMarkIcon from '@/components/BookMarkIcon';

interface BookMarkProps {
  islike: boolean;
}

export default function BookMark({ islike }: BookMarkProps) {
  return (
    <div>
      <BookMarkIcon isLike={islike} />
    </div>
  );
}

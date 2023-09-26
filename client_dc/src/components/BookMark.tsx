'use client';

import LikeIcon from '@/components/likeIcon';

interface LikeProps {
  islike: boolean;
}

export default function BookMark({ islike }: LikeProps) {
  return (
    <div>
      <LikeIcon isLike={islike} />
    </div>
  );
}

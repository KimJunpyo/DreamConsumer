'use client';

import LikeIcon from '@/components/likeIcon';

interface LikeProps {
  islike: boolean;
}

export default function Like({ islike }: LikeProps) {
  return (
    <div>
      <LikeIcon isLike={islike} />
    </div>
  );
}

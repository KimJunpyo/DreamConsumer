'use client';

import { useState } from 'react';
import LikeIcon from '@/components/likeIcon';

interface LikeProps {
  handler?: (e: React.MouseEvent) => void;
}

export default function Like({ handler }: LikeProps) {
  const [click, setClick] = useState(false);
  const change = () => {
    setClick(!click);
  };

  const handleClick = (e: React.MouseEvent) => {
    change();
    if (handler) {
      handler(e);
    }
  };
  return (
    <div onClick={handleClick}>
      <LikeIcon isLike={click ? 'yellow' : 'grey'} />
    </div>
  );
}

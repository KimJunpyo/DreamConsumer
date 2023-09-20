'use client';

import { useState } from 'react';
import LikeIcon from '@/components/likeIcon';

interface LikeProps {
  handler?: (e: React.MouseEvent) => void;
}

export default function Like({ handler }: LikeProps) {
  const [click, setClick] = useState(true);
  const change = () => {
    setClick(!click);
  };
  return (
    <div
      onClick={() => {
        change();
        handler;
      }}
    >
      <LikeIcon color={click === true ? 'yellow' : 'grey'} />
    </div>
  );
}

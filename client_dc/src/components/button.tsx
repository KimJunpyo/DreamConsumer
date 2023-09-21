// props로 내려주는 값은 tailwind class 그대로 내려주세요.
// 버튼 이름으로 들어가는 children값과 font는 필수값 입니다.
// width와 height를 입력하지 않으면 full로 들어갑니다.
// font를 입력하지 않으면 기본값으로 font-nl이 들어갑니다.
// fontSize값을 입력하지 않으면 기본값으로 xs(0.75rem, 12px) 이 들어갑니다.
// color값을 입력하지 않으면 기본값으로 gray색이 들어갑니다.

'use client';

import Image from 'next/image';
import Delete from '~/image/delete.svg';
import Plus from '~/image/plus.svg';
import Refresh from '~/image/refresh.svg';

interface ButtonProps {
  children: string;
  width?: string;
  height?: string;
  font?: string;
  fontSize?: string;
  color?: string;
  icon?: 'delete' | 'plus' | 'refresh';
  handler?: (e: React.MouseEvent) => void;
}

const ICONS = {
  delete: Delete,
  plus: Plus,
  refresh: Refresh,
};

export default function Button({
  children,
  icon,
  width,
  height,
  color,
  fontSize,
  font,
  handler,
}: ButtonProps) {
  const IconImage = icon ? ICONS[icon] : null;

  return (
    <button
      className={`flex justify-center items-center ${width ? width : 'w-full'} ${
        height ? height : 'h-full'
      } ${color ? color : 'bg-grey-cancel'} ${fontSize ? fontSize : 'text-xs'} ${
        font ? font : 'font-nl'
      } text-white rounded-xl`}
      onClick={handler}
    >
      {IconImage && <Image src={IconImage} alt={icon || ''} className='mr-2' />}
      {children}
    </button>
  );
}

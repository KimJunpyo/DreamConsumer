// 버튼 이름으로 들어가는 children값과 font는 필수 값입니다.
// width와 height를 입력하지 않으면 full로 들어갑니다.
// fontSize값을 입력하지 않으면 기본값으로 xs(0.75rem, 12px) 이 들어갑니다.
// color값은 red, bule만 들어가고 아무것도 입력하지 않을 시 gray색이 들어갑니다.

'use client';

import Image from 'next/image';
import Delete from '~/image/delete.svg';
import Plus from '~/image/plus.svg';
import Refresh from '~/image/refresh.svg';

interface ButtonProps {
  children: string;
  width?: number | string;
  height?: number | string;
  font: string;
  fontSize?: number | string;
  color?: string;
  icon?: 'delete' | 'plus' | 'refresh';
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
}: ButtonProps) {
  const IconImage = icon ? ICONS[icon] : null;

  return (
    <button
      className={`flex justify-center items-center w-${width ? width : 'full'} h-${
        height ? height : 'full'
      } ${color ? `bg-${color}-primary` : 'bg-grey-cancel'} text-${
        fontSize ? fontSize : 'xs'
      } font-${font && font} text-white rounded-xl`}
    >
      {IconImage && <Image src={IconImage} alt={icon || ''} className='mr-2' />}
      {children}
    </button>
  );
}

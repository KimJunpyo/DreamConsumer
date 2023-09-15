'use client';

import Image from 'next/image';
// import Delete from '../../public/image/delete.svg';
import Delete from '~/image/delete.svg';
import Plus from '~/image/plus.svg';
import Refresh from '~/image/refresh.svg';

interface ButtonProps {
  title: string;
  icon?: 'delete' | 'plus' | 'refresh';
  items: keyof typeof itemVariants;
}

const ICONS = {
  delete: Delete,
  plus: Plus,
  refresh: Refresh,
};

const itemVariants = {
  redSmall:
    'flex justify-center items-center w-32 h-9 bg-red-primary text-xs text-white rounded-xl',
  redMedium:
    'flex justify-center items-center w-36 h-11 bg-red-primary text-xl text-white rounded-xl',
  redLarge:
    'flex justify-center items-center w-80 h-14 bg-red-primary text-xl text-white rounded-xl',

  blueSmall:
    'flex justify-center items-center w-32 h-9 bg-blue-primary text-xs text-white rounded-xl',
  blueMedium:
    'flex justify-center items-center w-36 h-11 bg-blue-primary text-xl text-white rounded-xl',
  blueLarge:
    'flex justify-center items-center w-80 h-14 bg-blue-primary text-xl text-white rounded-xl',
};

export default function Button(props: ButtonProps) {
  const IconImage = props.icon ? ICONS[props.icon] : null;

  return (
    <div className={`${itemVariants[props.items]}`}>
      {IconImage && <Image src={IconImage} alt={props.icon || ''} className='mr-2' />}
      {props.title}
    </div>
  );
}

// - 글로벌 폰트 설정해서 인트로 목업 만든 뒤 pr
// - 공동컴포넌트 부터 작업
// - jr : 공동 컴포넌트 목업만들기 이슈 하위 이슈로 관리, 이벤트 핸들러가 되는 수준정도
// - 이슈는 개인 페이지에서만

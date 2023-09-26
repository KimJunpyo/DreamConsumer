'use client';

import Image from 'next/image';
import { search } from '~/image';

export default function Search() {
  return (
    <div className='relative'>
      <Image src={search} alt='돋보기' width={20} className='absolute top-[0.4rem] left-2' />
      <input
        className='font-nr text-sm text-grey-text border border-grey-border rounded-full h-8 py-2 pl-9 pr-2 placeholder:text-grey-border'
        placeholder='삭제한 목표 검색'
      />
    </div>
  );
}

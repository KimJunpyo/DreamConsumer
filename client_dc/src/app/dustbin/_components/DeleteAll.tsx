'use client';

import Image from 'next/image';
import { dustbin } from '~/image';
import { deleteAll } from '../_util/api';

export default function DeleteAll() {
  return (
    <div
      className='flex items-center gap-1 w-fit ml-auto mr-3 mt-3 pb-[0.5px] border-b border-grey-cancel cursor-pointer'
      onClick={deleteAll}
    >
      <Image src={dustbin} alt='쓰레기통' width={18} />
      <p className='font-nr text-sm text-grey-cancel'>휴지통 비우기</p>
    </div>
  );
}

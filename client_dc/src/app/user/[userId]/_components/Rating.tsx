'use client';

import Image from 'next/image';
import { bronze, silver, gold, diamond, emerald, ruby } from '~/image/rating';

export default function Rating() {
  return (
    <div className='relative bg-white rounded-full w-14 h-14 flex items-center justify-center'>
      <Image src={diamond} alt='회원 등급' width={24} />
      <span className='bg-[#FF0101] inline-block absolute p-[4.5px] rounded-full top-1 right-1' />
    </div>
  );
}

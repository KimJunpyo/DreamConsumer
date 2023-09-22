'use client';

import Image from 'next/image';
import { useState } from 'react';
import { bronze, silver, gold, diamond, emerald, ruby } from '~/image/rating';
import RatingsModal from './RatingsModal';

export default function Rating() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className='relative bg-white rounded-full w-14 h-14 flex items-center justify-center'
        onClick={() => setShowModal(!showModal)}
      >
        <Image src={diamond} alt='회원 등급' width={24} />
        <span className='bg-[#FF0101] inline-block absolute p-[4.5px] rounded-full top-1 right-1' />
        {showModal && <span className='absolute triangle-white-top top-14' />}
      </div>
      {showModal && <RatingsModal rating='브론즈' />}
    </>
  );
}

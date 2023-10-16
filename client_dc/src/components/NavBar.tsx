'use client';

import { hamburger, alarm, profile } from '~/image';

import NavMenu from './NavMenu';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { detailState } from '@/recoil/atoms';

export default function NavBar() {
  const [menuValue, setMenuValue] = useState(false);

  const menuHandler = () => {
    setMenuValue(!menuValue);
  };
  const detaiPageState = useRecoilValue(detailState);

  return (
    <>
      <div
        className={`z-30 fixed w-full top-0 h-[84px]  ${
          detaiPageState === 'solo' ? 'bg-red-primary' : 'bg-blue-primary'
        } flex justify-between items-center`}
      >
        <Image src={hamburger} alt='menu' className='ml-4' onClick={menuHandler} />

        <div className='font-nb text-base text-white'>
          <span className='text-mint'>D</span>ream
          <span className='text-mint ml-2'>C</span>onsumer
        </div>
        <div className='flex flex-row mr-3'>
          <Image src={alarm} alt='menu' className='mr-1' />
          <Link href={'/user/1'}>
            <Image src={profile} alt='menu' />
          </Link>
        </div>
      </div>
      <div>
        <NavMenu menuValue={menuValue} handler={menuHandler} />
      </div>
    </>
  );
}

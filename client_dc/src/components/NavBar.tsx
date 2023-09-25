'use client';

import Image from 'next/image';
import Menu from '~/image/hamburger.svg';
import Alarm from '~/image/alarm.svg';
import Profile from '~/image/profile.svg';
import NavMenu from './NavMenu';

import { useState } from 'react';

export default function Nav() {
  const [menuValue, setMenuValue] = useState(false);

  const menuHandler = () => {
    setMenuValue(!menuValue);
  };

  return (
    <div className='h-[84px] bg-blue-primary flex justify-between items-center'>
      <Image src={Menu} alt='menu' className='ml-4' onClick={menuHandler} />
      <div>
        <NavMenu menuValue={menuValue} handler={menuHandler} />
      </div>
      <div className='font-nb text-base text-white'>
        <span className='text-mint'>D</span>ream
        <span className='text-mint ml-2'>C</span>onsumer
      </div>
      <div className='flex flex-row mr-3'>
        <Image src={Alarm} alt='menu' className='mr-1' />
        <Image src={Profile} alt='menu' />
      </div>
    </div>
  );
}

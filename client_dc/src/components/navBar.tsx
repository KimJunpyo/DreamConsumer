'use client';
import Image from 'next/image';
import Menu from '../../public/hamburger.svg';
import Alarm from '../../public/alarm.svg';
import Profile from '../../public/profile.svg';

export default function Nav() {
  return (
    <div className='mx-auto w-[25rem] h-[84px] bg-blue-primary flex justify-between items-center'>
      <Image src={Menu} alt='menu' className='ml-4' />
      <div className='text-base text-white'>
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

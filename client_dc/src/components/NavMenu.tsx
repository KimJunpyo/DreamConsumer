import Image from 'next/image';
import Link from 'next/link';
import { back, darkMode, logOut, myPage, service } from '~/image';
import LikeIcon from './likeIcon';
import { DeleteIcon } from '.';

interface NavMenuProps {
  menuValue: boolean;
  handler: () => void;
}

export default function NavMenu({ menuValue, handler }: NavMenuProps) {
  return (
    <>
      {menuValue && <div className=' fixed inset-0 z-5' onClick={handler}></div>}
      <div
        className={`z-20 fixed transition-all duration-300 ease-in-out ${
          menuValue ? 'left-0' : '-left-full'
        }  top-0 w-9/12 h-full drop-shadow-2xl`}
      >
        <div className='flex flex-col-reverse h-2/5 bg-blue-nav'>
          <div className='absolute top-10 right-5' onClick={handler}>
            <Image src={back} alt='back' />
          </div>
          <div className='ml-6 mb-12'>
            <p className='font-nb text-xl text-white mb-2'>
              <span className='text-mint'>D</span>ream
              <span className='text-mint ml-2'>C</span>onsumer
            </p>
            <p className='text-white mb-2'>
              <span className='font-neb text-2xl'>(UserName)</span>
              <span className='font-nr text-xl'>님 환영합니다!</span>
            </p>
            <p>
              <span className='text-white font-neb text-base'>현재</span>
              <span className='mx-1'>(다이아)</span>
              <span className='text-white font-neb text-base'>등급 입니다.</span>
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between h-3/5 bg-white '>
          <div className='flex flex-col ml-6 mt-12 font-nb text-grey-text text-lg'>
            <Link href={'/user/1'} className='flex mb-2' onClick={handler}>
              <Image src={myPage} alt='mypage' className='mr-2' />
              <p>마이페이지</p>
            </Link>
            <Link href={'/main'} className='flex mb-2' onClick={handler}>
              <div className=' mr-2'>
                <LikeIcon color='#85B6FF' />
              </div>
              <p>즐겨찾기</p>
            </Link>
            <Link href={'/user/2'} className='flex mb-2' onClick={handler}>
              <Image src={service} alt='mypage' className='mr-2' />
              <p>고객센터</p>
            </Link>
            <Link href={'/dustbin'} className='flex mb-2' onClick={handler}>
              <div className='mr-2'>
                <DeleteIcon color='#85B6FF' />
              </div>
              <p>휴지통</p>
            </Link>
          </div>
          <div className='ml-6 mb-6 font-nb text-base'>
            <div className='flex mb-2 text-grey-text'>
              <Image src={darkMode} alt='mypage' className='mr-2' />
              다크모드
            </div>
            <Link href={'/'} className='flex mb-2 text-[#d9d9d9]' onClick={handler}>
              <Image src={logOut} alt='mypage' className='mr-2' />
              로그아웃
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import intro from '~/image/introBG.svg';
import moon from '~/image/moon.svg';

export default function Home() {
  return (
    <div className='relative'>
      <Image src={intro} alt='intro' className='w-full bg-cover' />
      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 flex flex-col items-center text-white'>
        <Image src={moon} alt='moon' className='mb-2' />
        <div className='mb-2 text-3xl font-nr'>D R E A M</div>
        <div className='mb-2 text-3xl font-nr'>C O N S U M E R</div>
        <div className='mb-2 h-12 border-[1px] border-white border-dashed' />
        <div className='flex flex-col items-center text-base font-nl'>
          <div>이 세상엔</div>
          <div>갖고 싶은게 너무 많아</div>
        </div>
      </div>
      <div className='absolute left-1/2 bottom-20 transform -translate-x-1/2  text-white'>
        <div className='test-base mb-4 flex justify-center font-nb'>저희가 도와드릴께요!</div>
        <div className='flex flex-row justify-between text-xl font-neb'>
          <Link href='/join' className='border-r-2 border-white pr-3'>
            회원가입
          </Link>
          <Link href='/login' className='ml-3'>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

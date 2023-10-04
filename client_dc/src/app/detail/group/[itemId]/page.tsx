// 'use client';

import { Button } from '@/components';
import { ImgBox, MemberContainer, PercentContainer, TagsContainer } from './_components';
import Link from 'next/link';

export default function Group() {
  const totalPrice = 1200000;
  const percent = 80;
  const tags = ['#과일', '#네이버', '#제철', '#과일', '#네이버'];

  return (
    <div className='pt-[270px] flex justify-center'>
      <div className='w-9/12 mt-3'>
        <ImgBox />
        <div className='flex justify-center mt-2 w-full border-[1px] borde-[#d9d9d9] rounded-full text-base py-2'>
          <span className='font-nb mr-5'>가격</span>
          <span className='font-nl'>{totalPrice.toLocaleString('ko-KR')}원</span>
        </div>
        <div className='mt-2'>
          <PercentContainer percent={percent} totalPrice={totalPrice} />
        </div>
        <div className='mt-2'>
          <TagsContainer tags={tags} />
        </div>
        <div className='mt-2 '>
          <MemberContainer />
        </div>
        <div className='flex justify-center mt-6'>
          <div className='w-11/12 flex justify-between'>
            <Button
              font='font-neb'
              width='w-[120px]'
              height='h-9'
              rounded='rounded-lg'
              color='bg-blue-primary'
            >
              ₩ 입금하기
            </Button>
            <Button
              font='font-neb'
              width='w-[134px]'
              height='h-9'
              rounded='rounded-lg'
              color='bg-red-primary'
            >
              제품 사이트 바로가기
            </Button>
          </div>
        </div>
        <div className='flex justify-center mt-6 mb-10'>
          <Link href={'/main'}>
            <button className='border-b-[1px] border-[#b4b4b4] font-nb text-xs text-[#b4b4b4]'>
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

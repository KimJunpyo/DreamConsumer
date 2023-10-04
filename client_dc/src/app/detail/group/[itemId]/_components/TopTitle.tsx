'use client';

import { BookMark, Button, Replace } from '@/components';
import { Triangle } from '.';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TopTitle() {
  const [clickMoney, setClickMoney] = useState(false);
  const router = useRouter();
  const itemId = 123;

  const handleClickMoney = () => {
    setClickMoney(!clickMoney);
    if (clickMoney) {
      router.push(`/detail/group/${itemId}`);
    } else {
      router.push(`/detail/group/${itemId}/money`);
    }
  };
  return (
    <div className='fixed w-full'>
      <div className='relative min-h-[12rem] flex flex-col items-center w-full  bg-blue-primary'>
        <p className=' pb-3 w-3/5 font-neb text-3xl text-white text-center'>
          <Link href={`/detail/group/${itemId}`}>(비스포크 제트봇 AI 로봇청소기)</Link>
        </p>
        <div className=' flex items-center justify-between w-3/6 mb-20'>
          <span className='font-neb text-base text text-white '>매월 (10)일</span>
          <span onClick={handleClickMoney}>
            <Button
              width='w-24 '
              height='h-7'
              color={clickMoney ? 'bg-grey-text' : 'bg-white'}
              font='font-nb'
              fontSize='text-sm'
              fontColor={clickMoney ? '' : 'text-blue-primary'}
            >
              입금현황
              <span className='ml-2'>
                <Triangle clickMoney={clickMoney} />
              </span>
            </Button>
          </span>
        </div>
        <div className='absolute flex bottom-3 right-8'>
          {/* islike의 값은 데이터에서 가져오기 */}
          <span className='mr-3'>
            <BookMark detailState={false} />
          </span>
          <Replace memberButton={true} itemId={itemId} setState={setClickMoney} />
        </div>
      </div>
    </div>
  );
}

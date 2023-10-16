'use client';

import { useState } from 'react';
import { getPercentColor } from '../_util/functions';
import Link from 'next/link';
import { Button } from '@/components';
import { DEPOSIT_LIST } from '../_util/constants';

export default function Money() {
  const data = [
    { name: '명수', price: 50000, percent: 30, deposit: true },
    { name: '준표', price: 50000, percent: 50, deposit: false },
    { name: '혜인', price: 50000, percent: 80, deposit: true },
  ];

  const [selectedButton, setSelectedButton] = useState(DEPOSIT_LIST.TOTAL);
  const [getData, setGetData] = useState(data);

  const handleDepositFilter = (buttonName: string) => {
    let depositFilter;
    if (buttonName === DEPOSIT_LIST.NON_DEPOSIT) {
      depositFilter = data.filter((el) => el.deposit === false);
    } else if (buttonName === DEPOSIT_LIST.DEPOSIT) {
      depositFilter = data.filter((el) => el.deposit === true);
    } else {
      depositFilter = data;
    }

    setSelectedButton(buttonName);
    setGetData(depositFilter);
  };

  return (
    <div
      className='pt-[300px] flex flex-col items-center justify-between'
      style={{ minHeight: '95vh' }}
    >
      <div className='w-full flex flex-col items-center'>
        <div className='w-6/12 flex flex-row justify-between font-neb text-base text-[#e2e2e2]'>
          <button
            className={`${selectedButton === DEPOSIT_LIST.TOTAL && 'text-grey-text'}`}
            onClick={() => {
              handleDepositFilter(DEPOSIT_LIST.TOTAL);
            }}
          >
            {DEPOSIT_LIST.TOTAL}
          </button>
          <button
            className={`${selectedButton === DEPOSIT_LIST.NON_DEPOSIT && 'text-grey-text'}`}
            onClick={() => {
              handleDepositFilter(DEPOSIT_LIST.NON_DEPOSIT);
            }}
          >
            {DEPOSIT_LIST.NON_DEPOSIT}
          </button>
          <button
            className={`${selectedButton === DEPOSIT_LIST.DEPOSIT && 'text-grey-text'}`}
            onClick={() => {
              handleDepositFilter(DEPOSIT_LIST.DEPOSIT);
            }}
          >
            {DEPOSIT_LIST.DEPOSIT}
          </button>
        </div>
        <div className='pt-4 w-9/12 flex flex-col items-center justify-between'>
          <div className='w-full' style={{ minHeight: '46vh' }}>
            {getData.map((el, idx) => {
              const getColor = getPercentColor(el.percent);

              return (
                <div
                  className='w-full flex justify-between px-6 py-3 mb-2 font-neb text-white rounded-xl'
                  style={{ background: getColor }}
                  key={idx}
                >
                  {el.name}
                  <p>{el.price.toLocaleString('kr-KR')}원</p>
                </div>
              );
            })}
          </div>
          <div className='flex justify-between w-8/12'>
            {selectedButton === DEPOSIT_LIST.NON_DEPOSIT ? (
              <>
                <Button
                  width='w-24'
                  height='h-10'
                  rounded='rounded-lg'
                  font='font-neb'
                  fontSize='text-xs'
                >
                  취소하기
                </Button>
                <Button
                  width='w-24'
                  height='h-10'
                  rounded='rounded-lg'
                  font='font-neb'
                  fontSize='text-xs'
                  color='bg-red-primary'
                >
                  독촉하기
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <Link href={'/main'} className='mt-2'>
        <button className='border-b-[1px] border-[#b4b4b4] font-nb text-xs text-[#b4b4b4]'>
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
}

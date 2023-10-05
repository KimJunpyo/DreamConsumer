'use client';

import { ProgressBar } from '@/components';
import { getPercentColor } from '../_util/functions';

interface PercentContainerProps {
  percent: number;
  totalPrice: number;
}

export default function PercentContainer({ percent, totalPrice }: PercentContainerProps) {
  const percentColor = getPercentColor(percent);

  const currentAmount = totalPrice * (percent / 100);
  const remainingAmount = totalPrice - currentAmount;

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-11/12 flex items-center justify-between font-nb'>
        <p className='text-base'>
          <span style={{ color: `${percentColor}` }} className='mr-1'>
            {percent}%
          </span>
          달성
        </p>
        <p className='text-xs'>
          <span className='mr-1'>앞으로</span>
          <span className='mr-1' style={{ color: `${percentColor}` }}>
            {remainingAmount}
          </span>
          <span>원 남았어요!</span>
        </p>
      </div>
      <ProgressBar progress={percent} />
      <div className='w-11/12 mt-1 flex justify-end text-xs text-[#cecece]'>
        <span className='font-neb'>{currentAmount.toLocaleString('ko-KR')}</span>원 /{' '}
        {totalPrice.toLocaleString('ko-KR')}원
      </div>
    </div>
  );
}

import Label from './label';

import CircleChart from './CircleChart';
import { CheckCircle, Tag, BookMark } from '@/components';
import { useState } from 'react';

interface ItemProps {
  editValue: boolean;
}

export default function Item({ editValue }: ItemProps) {
  const [checkCircle, setCheckCircle] = useState(false);

  const handleClick = () => {
    if (editValue) {
      setCheckCircle(!checkCircle);
    }
  };

  return (
    <div
      className={`relative flex justify-between w-11/12 max-h-60 border-2 ${
        checkCircle && editValue ? 'border-red-primary' : 'border-grey-border'
      }  rounded-xl px-6 py-4 mb-2`}
      onClick={handleClick}
    >
      <div className='w-2/3 flex flex-col justify-between'>
        <div className='flex items-center mb-1'>
          <div className='mr-1'>
            <BookMark islike={true} />
          </div>
          <div className='relative'>
            <Label group='member' />
            <div className='text-[0.5rem] font-neb text-white ml-2 absolute top-1/2 transform  -translate-y-1/2'>
              공동구매
            </div>
          </div>
        </div>
        <div className=' font-neb text-grey-text text-xl mb-1 break-words'>제목</div>
        <div>
          {/* 인덱스 번호를 /3한 뒤 나머지에 따른 색 나오게 (나머지 1 == redSmall, 나머지 2 == greenSmall, 나머지 0 == purpleSmall) */}
          <Tag items='redSmall'>#2024년</Tag>
          <Tag items='greenSmall'>#리조트</Tag>
          <Tag items='purpleSmall'>#연말</Tag>
        </div>
      </div>
      <div className='w-1/3'>
        {/* 구매관련해서 props내려주기 */}
        <CircleChart percent={80} />
      </div>
      <div className='absolute right-2 top-2'>
        {editValue ? (
          <div>
            <CheckCircle color='#FF8585' check={checkCircle} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
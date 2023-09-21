import Like from '@/components/Like';
import Tags from '@/components/Tag';
import Label from '@/app/main/_components/label';
import CircleChart from './CircleChart';
import { useRecoilValue } from 'recoil';
import { clickEdit } from '@/recoil/atoms';
import { CheckCircle } from '@/components';
import { useState } from 'react';

export default function Items() {
  const editClick = useRecoilValue(clickEdit);
  const [checkCricle, setCheckCricle] = useState(false);
  const cricleCheck = () => {
    setCheckCricle(!checkCricle);
  };

  // editClick값이 true 일때 체크박스 나오게하기
  // editClick값이 true 이면 겉에 게시물을 눌렀을 때 CheckCircle값이 ture

  return (
    <div
      className={`relative flex justify-between w-11/12 max-h-60 border-2 ${
        checkCricle && editClick ? 'border-red-primary' : 'border-grey-border'
      }  rounded-xl px-6 py-4 mb-2`}
      onClick={() => {
        if (editClick) {
          cricleCheck();
        }
      }}
    >
      <div className='w-2/3 flex flex-col justify-between'>
        <div className='flex items-center mb-1'>
          <div className='mr-1'>
            <Like />
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
          <Tags items='redSmall'>#2024년</Tags>
          <Tags items='greenSmall'>#리조트</Tags>
          <Tags items='purpleSmall'>#연말</Tags>
        </div>
      </div>
      <div className='w-1/3'>
        {/* 구매관련해서 props내려주기 */}
        <CircleChart percent={80} />
      </div>
      <div className='absolute right-2 top-2'>
        {editClick ? (
          <div>
            <CheckCircle color='#FF8585' check={checkCricle} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

//itemId는 필수 값으로 수정버튼을 눌렀을때 Dynamic router의 url로 사용됩니다.
'use client';

import { useState } from 'react';
import { Button, ReplaceIcon } from '.';
import Link from 'next/link';

interface ReplaceProps {
  itemId: number | string;
  memberButton?: boolean;
  setState?: (value: boolean) => void;
}

export default function Replace({ memberButton, itemId, setState }: ReplaceProps) {
  const [clickPlace, setClickPlace] = useState(false);
  const handlePlaceState = () => {
    setClickPlace(!clickPlace);
  };
  const handleSetState = () => {
    if (setState) {
      setState(false);
    }
  };
  return (
    <div className='relative' onClick={handlePlaceState}>
      <ReplaceIcon clickPlace={clickPlace} />
      {clickPlace ? (
        <div className='absolute -left-5 bottom-8 flex flex-col-reverse'>
          <div className='mb-1'>
            <Button
              width='w-16'
              height='h-6'
              fontColor='text-blue-primary'
              color='bg-white'
              font='font-neb'
              fontSize='text-xs'
            >
              삭제
            </Button>
          </div>
          <div className='mb-1'>
            <Link href={`/edit/${itemId}`}>
              <Button
                width='w-16'
                height='h-6'
                fontColor='text-blue-primary'
                color='bg-white'
                font='font-neb'
                fontSize='text-xs'
              >
                수정
              </Button>
            </Link>
          </div>
          {memberButton && (
            <div className='mb-1' onClick={handleSetState}>
              <Link href={`/detail/group/${itemId}/member`}>
                <Button
                  width='w-16'
                  height='h-6'
                  fontColor='text-blue-primary'
                  color='bg-white'
                  font='font-neb'
                  fontSize='text-xs'
                >
                  멤버관리
                </Button>
              </Link>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
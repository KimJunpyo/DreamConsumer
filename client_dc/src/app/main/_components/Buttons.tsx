'use client';

import { Button } from '@/components';
import { mainEditState } from '@/recoil/atoms';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

export default function Buttons() {
  const clickEdit = useRecoilValue(mainEditState);

  return (
    <>
      {clickEdit ? (
        <div className='w-full fixed bottom-14 flex justify-center'>
          <Button
            font='font-neb'
            width='w-10/12'
            height='h-14'
            color='bg-red-primary'
            fontSize='text-xl'
            icon='delete'
          >
            삭제하기
          </Button>
        </div>
      ) : (
        <Link href={'/write'} className='fixed bottom-14 right-5'>
          <Button
            font='font-neb'
            width='w-36'
            height='h-12'
            color='bg-blue-primary'
            fontSize='text-xl'
            icon='plus'
          >
            등록하기
          </Button>
        </Link>
      )}
    </>
  );
}

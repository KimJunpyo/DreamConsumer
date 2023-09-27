'use client';

import { Button } from '@/components';
import { dustbinEditState } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';

export default function Buttons() {
  const [editMode, setEditMode] = useRecoilState(dustbinEditState);

  return (
    <section className={`flex w-full px-5 justify-between fixed bottom-5 ${!editMode && 'hidden'}`}>
      <Button
        width='w-[49%]'
        height='h-11'
        font='font-nb'
        fontSize='text-xl'
        color='bg-red-primary'
        icon='delete'
        rounded='rounded-lg'
      >
        영구삭제
      </Button>
      <Button
        width='w-[49%]'
        height='h-11'
        font='font-nb'
        fontSize='text-xl'
        color='bg-blue-primary'
        icon='refresh'
        rounded='rounded-lg'
      >
        복원하기
      </Button>
    </section>
  );
}

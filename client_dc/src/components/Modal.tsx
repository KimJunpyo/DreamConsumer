'use client';

// DESC: 🚨주의🚨 handler의 로직에 setShowModal(false)가 꼭 포함되어야 합니다!!

import { createPortal } from 'react-dom';
import { Button } from '.';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atoms';

type Props = {
  children: React.ReactNode;
  eventName: string;
  handler?: (e: React.MouseEvent) => void;
};

export default function Modal({ children, eventName, handler }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const modal = document.getElementById('modal')!;

  return (
    <>
      {showModal &&
        createPortal(
          <div className='w-full h-full bg-black/50 top-0 left-0 fixed flex justify-center items-center'>
            <div className='w-full bg-white fixed bottom-0 left-0 px-14 py-12 rounded-t-xl'>
              <div className='text-center'>{children}</div>
              <div className='flex justify-between pt-7'>
                <Button
                  width='w-[49%]'
                  height='h-10'
                  font='font-nb'
                  fontSize='text-base'
                  handler={() => setShowModal(false)}
                >
                  취소하기
                </Button>
                <Button
                  width='w-[49%]'
                  height='h-10'
                  font='font-nb'
                  fontSize='text-base'
                  color='bg-red-primary'
                  handler={handler}
                >
                  {eventName}
                </Button>
              </div>
            </div>
          </div>,
          modal
        )}
    </>
  );
}

import Image from 'next/image';
import { useState } from 'react';
import EditImg from '~/image/edit.svg';

interface EditProps {
  marginRight?: string;
  handler?: (e: React.MouseEvent) => void;
}

export default function Edit({ marginRight, handler }: EditProps) {
  const [editClick, setEidtClick] = useState(false);
  const change = () => {
    setEidtClick(!editClick);
  };
  // console.log(editClick);

  return (
    <div
      className={`bg-red-600 py-[2px] px-2 rounded-xl flex items-center justify-between font-neb text-xs text-blue-primary ${
        marginRight && marginRight
      }
      }`}
      onClick={() => {
        change();
        handler;
      }}
    >
      <div className='flex items-center'>
        <Image src={EditImg} alt='edit' />
        편집
      </div>
    </div>
  );
}

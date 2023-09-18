'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import DownArrow from '~/image/DownArrow.svg';
import DarkDownArrow from '~/image/DarkDownArrow.svg';

type props = {
  list: string[];
  prevIcon?: boolean;
  borderless?: boolean;
};

export default function Dropdown({ list, prevIcon, borderless }: props) {
  const [test, setTest] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [showShadow, setShowShadow] = useState<boolean>(false);

  const handleClickOption = (idx: number) => {
    setSelectedIdx(idx);
  };

  useEffect(() => {
    if (test) {
      setShowOptions(true);
      setTimeout(() => setShowShadow(true), 160);
    } else {
      setTimeout(() => setShowOptions(false), 270);
      setShowShadow(false);
    }
  }, [test]);

  return (
    <div
      className={`font-neb w-[145px] text-xs rounded-lg origin-top text-blue-primary ${
        showShadow && 'animate-show-shadow'
      }`}
      onClick={() => setTest(!test)}
    >
      <div
        className={`border border-blue-primary rounded-lg relative ${
          showOptions && 'border-b-0 rounded-b-none'
        } ${test && 'text-grey-text'}`}
      >
        <div className='flex h-7 items-center justify-center'>{list[selectedIdx]}</div>
        <Image
          src={test ? DarkDownArrow : DownArrow}
          className={`absolute top-1/2 -translate-y-1/2 ${prevIcon ? 'left-2' : 'right-2'}`}
          width={20}
          height={20}
          alt='icon'
        />
      </div>
      {showOptions && (
        <div
          className={`border border-blue-primary rounded-lg border-t-0 rounded-t-none origin-top ${
            test ? 'animate-ease-down' : 'animate-ease-up'
          }`}
        >
          {list.map(
            (option, idx) =>
              idx !== selectedIdx && (
                <div
                  className='flex h-7 items-center justify-center text-blue-primary'
                  key={idx}
                  onClick={() => handleClickOption(idx)}
                >
                  {option}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

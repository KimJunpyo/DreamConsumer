'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { downArrow, darkDownArrow, whiteDownArrow } from '~/image';

type Props = {
  list: string[];
  prevIcon?: boolean;
  borderless?: boolean;
  filled?: boolean;
  width: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  handler?: () => void;
  radio?: boolean;
};

/** using example */
{
  /* <Dropdown
        list={['전체', '개별구매', '공동구매', '즐겨찾기']}
        prevIcon={true}
        borderless={true}
        filled={false}
        width='w-28'
        setState={setState}
      />
      <Dropdown list={['학생', '회사원', '프리랜서', '무직']} width='w-44' setState={setState} />
      <Dropdown
        list={['매주', '월', '화', '수']}
        borderless={true}
        filled={true}
        width='w-32'
        setState={setState}
      /> */
}

export default function Dropdown({
  list,
  prevIcon,
  borderless,
  filled,
  width,
  setState,
  handler,
  radio,
}: Props) {
  const [clickDropdown, setClickDropdown] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [showShadow, setShowShadow] = useState<boolean>(false);

  const REMOVED_OPTIONS = ['매주', '매월'];

  const borderlessClass = `${clickDropdown ? 'border-blue-primary' : 'border-transparent'}`;
  const filledClass = `border-b-transparent text-white ${
    clickDropdown ? 'bg-grey-text border-grey-text' : 'bg-blue-primary'
  }`;

  const handleClickOption = (idx: number) => {
    setSelectedIdx(idx);
    setState(list[idx]);
    setClickDropdown(false);
  };

  useEffect(() => {
    if (clickDropdown) {
      setShowOptions(true);
      setTimeout(() => setShowShadow(true), 160);
    } else {
      setTimeout(() => setShowOptions(false), 270);
      setShowShadow(false);
    }
  }, [clickDropdown]);

  useEffect(() => {
    if (!radio) {
      setClickDropdown(false);
      setSelectedIdx(0);
    }
  }, [radio]);

  return (
    <div
      className={`relative bg-white font-neb text-xs rounded-lg origin-top text-blue-primary ${
        clickDropdown && 'rounded-b-none'
      } ${width && width} ${showShadow ? 'animate-show-shadow' : ''}`}
      onClick={handler}
    >
      <div
        className={`duration-100 h-full border border-blue-primary rounded-lg relative ${
          radio && 'bg-grey-text'
        } ${clickDropdown ? 'border-b-transparent rounded-b-none text-grey-text ' : ''}
         ${borderless ? borderlessClass : ''} ${filled ? filledClass : ''}`}
        onClick={() => {
          setClickDropdown(!clickDropdown);
        }}
      >
        <div className='flex h-full items-center justify-center'>
          {selectedIdx === 0 ? list[0] : list[selectedIdx]}
        </div>
        <Image
          src={filled ? whiteDownArrow : clickDropdown ? darkDownArrow : downArrow}
          className={`absolute top-1/2 -translate-y-1/2 ${prevIcon ? 'left-2' : 'right-2'}`}
          width={20}
          height={20}
          alt='icon'
        />
      </div>

      <div
        className={`${showOptions ? 'block' : 'hidden'}  ${
          showShadow ? 'animate-show-shadow' : ''
        } w-full absolute z-30 border rounded-lg border-t-0 rounded-t-none origin-top ${
          filled ? 'bg-grey-text border-grey-text' : 'bg-white border-blue-primary'
        } ${clickDropdown ? 'animate-ease-down' : 'animate-ease-up'}`}
      >
        {list.map(
          (option, idx) =>
            idx !== selectedIdx &&
            !REMOVED_OPTIONS.includes(option) && (
              <option
                className={`flex h-7 items-center justify-center text-blue-primary ${
                  filled ? 'text-white' : 'text-blue-primary'
                }`}
                key={idx}
                onClick={() => {
                  handleClickOption(idx);
                }}
              >
                {option}
              </option>
            )
        )}
      </div>
    </div>
  );
}

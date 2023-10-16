import Label from './label';
import CircleChart from './CircleChart';

import { CheckCircle, Tag, BookMark } from '@/components';
import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { mainEditState } from '@/recoil/atoms';

type ItemProps = {
  handler: () => void;
  itemId: number;
  checkDeleteId: (itemId: number, isChecked: boolean) => void;
};

export default function Item({ handler, itemId, checkDeleteId }: ItemProps) {
  const [checkCircle, setCheckCircle] = useState(false);
  const [clickBookMark, setClickBookMark] = useState(false);
  const mainEditValue = useRecoilValue(mainEditState);

  useEffect(() => {
    if (!mainEditValue) {
      setCheckCircle(false);
    }
  }, [mainEditValue]);

  const handleClick = () => {
    if (mainEditValue) {
      const newCheckState = !checkCircle;
      setCheckCircle(newCheckState);
      checkDeleteId(itemId, newCheckState);
    } else {
      handler();
    }
  };

  const handleBookMarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClickBookMark(!clickBookMark);
  };

  return (
    <div
      className={`relative flex justify-between w-11/12 max-h-60 border-2 ${
        checkCircle && mainEditValue ? 'border-red-primary' : 'border-grey-border'
      }  rounded-xl px-6 py-4 mb-2`}
      onClick={handleClick}
    >
      <div className='w-2/3 flex flex-col justify-between'>
        <div className='flex items-center mb-1'>
          <div className='mr-1' onClick={handleBookMarkClick}>
            <BookMark isLike={clickBookMark} />
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
          {/* {tags?.map((el, idx) => {
            return (
              <Tag key={idx} items={tagsSmallColor(idx)}>
                {el.name}
              </Tag>
            );
          })} */}

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
        {mainEditValue ? (
          <div>
            <CheckCircle color='#FF8585' check={checkCircle} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

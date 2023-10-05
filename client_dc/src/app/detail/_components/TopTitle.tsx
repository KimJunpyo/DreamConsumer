'use client';

import { BookMark, Button, Replace } from '@/components';
import { Triangle } from '../group/[itemId]/_components';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { detailState } from '@/recoil/atoms';

type TopTitlePorps = {
  pages: string;
};

export default function TopTitle({ pages }: TopTitlePorps) {
  const setDetailState = useSetRecoilState<string>(detailState);
  setDetailState(pages);

  const [clickMoney, setClickMoney] = useState(false);
  const [getData, setGetData] = useState([]);

  const params = useParams();
  const getItemId = params.itemId.toString();
  const router = useRouter();

  useEffect(() => {
    fetch(`/itmes/${getItemId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setGetData(res);
      });
  }, [pages, getItemId]);

  const handleClickMoney = () => {
    setClickMoney(!clickMoney);
    if (clickMoney) {
      router.push(`/detail/group/${getItemId}`);
    } else {
      router.push(`/detail/group/${getItemId}/money`);
    }
  };
  return (
    <div className='fixed w-full'>
      <div
        className={`mt-20 pt-2 relative min-h-[12rem] flex flex-col items-center w-full ${
          pages === 'group' ? 'bg-blue-primary' : 'bg-red-primary'
        }`}
      >
        <p className='pb-3 w-3/5 font-neb text-3xl text-white text-center'>
          <Link href={`/detail/${pages}/${getItemId}`}>(비스포크 제트봇 AI 로봇청소기)</Link>
        </p>
        {pages === 'group' && (
          <div className=' flex items-center justify-between w-3/6 mb-20'>
            <span className='font-neb text-base text text-white '>매월 (10)일</span>
            <div onClick={handleClickMoney}>
              <Button
                width='w-24 '
                height='h-7'
                color={clickMoney ? 'bg-grey-text' : 'bg-white'}
                font='font-nb'
                fontSize='text-sm'
                fontColor={clickMoney ? '' : 'text-blue-primary'}
              >
                입금현황
                <span className='ml-2'>
                  <Triangle clickMoney={clickMoney} />
                </span>
              </Button>
            </div>
          </div>
        )}

        <div className='absolute flex bottom-3 right-8'>
          {/* islike의 값은 데이터에서 가져오기 */}
          <span className='mr-3'>
            <BookMark isLike={false} isDetailPage={true} />
          </span>
          <Replace
            memberButton={pages === 'group' ? true : false}
            itemId={getItemId}
            setState={setClickMoney}
          />
        </div>
      </div>
    </div>
  );
}

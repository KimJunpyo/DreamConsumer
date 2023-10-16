'use client';

import { Button, Modal, ProgressBar } from '@/components';
import { ImgBox, TagsContainer } from '../../_components';
import Link from 'next/link';
import { calculatedDay, openNaverShop } from '@/app/write/_util/functions';
import { useRecoilState } from 'recoil';
import { modalState } from '@/recoil/atoms';
import { useState } from 'react';

export default function Solo() {
  const TEMP_OBJ = {
    itemName: 'Apple 비츠바이닥터드레 Studio3 Wireless',
    imageUrl:
      'https://shopping-phinf.pstatic.net/main_3194512/31945123620.20220421161103.jpg?type=f640',
    price: 1000000,
    tags: ['#과일', '#네이버', '#제철'],
    currentMoney: 500000,
    cycle: '5일',
    unitAmount: 100000,
  };
  const stringSaveMoney = TEMP_OBJ.currentMoney.toLocaleString('ko-KR');
  const [cnt, setCnt] = useState(0);

  let percent = ((TEMP_OBJ.currentMoney + cnt * TEMP_OBJ.unitAmount) / TEMP_OBJ.price) * 100;

  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleShowModal = () => {
    alert(TEMP_OBJ.unitAmount + '원이 저금되셨습니다.');
    // api 통신 예정
    // 현재는 임의로 TEMP_OBJ의 currentMoney에 단위 곱셈 후 덧셈 처리
    setCnt(cnt + 1);
    setShowModal(false);
  };

  const PercentColor = () => {
    const moneyLen = stringSaveMoney.length;
    if (60 + moneyLen * 3 >= 100) {
      return true;
    }
    return percent > 60 + (moneyLen < 5 ? 5 : moneyLen) * 3;
  };

  return (
    <div className='pt-[275px] flex justify-center'>
      <Modal eventName='입금하기' handler={handleShowModal}>
        <div className='flex justify-center font-nr text-[50px]'>
          <div className='text-grey-border border-b-[3px] border-grey-border'>
            {TEMP_OBJ.unitAmount}
          </div>
          <div>원</div>
        </div>
      </Modal>
      <div className='flex flex-col w-9/12 mt-3 gap-y-2'>
        <ImgBox imageUrl={TEMP_OBJ.imageUrl} />
        <div className='flex text-grey-text mt-2 w-full border-[1px] border-[#d9d9d9] rounded-full text-base py-2'>
          <span className='font-nb w-1/2 text-end mr-4'>가격</span>
          <span className='font-nl w-1/2'>{TEMP_OBJ.price.toLocaleString('ko-KR')}원</span>
        </div>
        <div className='relative'>
          <div className='flex z-10 absolute w-full h-full items-center'>
            <span
              className={`font-nb w-1/2 text-end mr-4 ${
                percent < 50 ? 'text-grey-text' : 'text-white'
              }`}
            >
              모인 금액
            </span>
            <span className={`font-nl w-1/2 ${PercentColor() ? 'text-white' : 'text-grey-text'}`}>
              {(TEMP_OBJ.currentMoney + cnt * TEMP_OBJ.unitAmount).toLocaleString('ko-KR')}원
            </span>
          </div>
          <ProgressBar progress={percent} height='h-[42px]' />
        </div>

        <div className='my-3'>
          <TagsContainer tags={TEMP_OBJ.tags} />
        </div>
        <div className='flex flex-col justify-center w-[320px] font-nb text-grey-cancel font-[15px]'>
          <p>
            매월{' '}
            <span className='text-red-text'>
              {TEMP_OBJ.cycle} {TEMP_OBJ.unitAmount.toLocaleString('ko-KR')}원
            </span>
            씩 저금으로 설정 되어 있어요.
          </p>
          <p>
            <span className='text-red-text'>
              {calculatedDay(
                TEMP_OBJ.price.toLocaleString('ko-KR'),
                TEMP_OBJ.currentMoney.toLocaleString('ko-KR'),
                TEMP_OBJ.unitAmount.toLocaleString('ko-KR'),
                'Monthly'
              )}{' '}
              뒤
            </span>
            에 구매할 수 있습니다!
          </p>
        </div>
        <div className='flex justify-center mt-6'>
          <div className='w-11/12 flex justify-center gap-x-2'>
            <Button
              font='font-neb'
              width='w-[120px]'
              height='h-10'
              rounded='rounded-lg'
              color='bg-blue-primary'
              handler={() => setShowModal(true)}
            >
              ₩ 입금하기
            </Button>

            <Button
              font='font-neb'
              width='w-[134px]'
              height='h-10'
              rounded='rounded-lg'
              color='bg-red-primary'
              handler={() => openNaverShop(TEMP_OBJ.itemName)}
            >
              제품 사이트 바로가기
            </Button>
          </div>
        </div>
        <div className='flex justify-center mt-6 mb-10'>
          <Link href={'/main'}>
            <button className='border-b border-[#b4b4b4] font-nb text-xs text-[#b4b4b4]'>
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

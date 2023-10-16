'use client';

import { Button, Modal } from '@/components';
import { modalState } from '@/recoil/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { search } from '~/image';
import { getChosung, isChosung, isHangul } from '../_util/functions';

export default function Member() {
  const data = [
    { name: '명수', key: 0, leader: false },
    { name: '민수', key: 1, leader: false },
    { name: '준표', key: 2, leader: false },
    { name: '혜인', key: 3, leader: true },
  ];

  const [showMessage, setShowMessage] = useState(false);
  const [cancelMemberKey, setCancelMemberKey] = useState<number | string>();
  const [searchValue, setSearchValue] = useState('');
  const setShowModal = useSetRecoilState(modalState);

  const leader = data.filter((el) => el.leader === true);
  const member = data.filter((el) => el.leader !== true);

  const findCancelMemaber = data.find((el) => {
    return el.key === cancelMemberKey;
  });

  const findSearchName = data.filter((el) => {
    if (!isHangul(searchValue)) {
      return el.name.includes(searchValue);
    } else if (isChosung(searchValue)) {
      return getChosung(el.name).includes(getChosung(searchValue));
    } else {
      return el.name === searchValue;
    }
  });

  const handleShowMessage = () => {
    // 현재 페이지 링크를 복사 했는데 초대링크로 바꾸기
    navigator.clipboard.writeText(window.location.href);

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleCancelMemberKey = (key: string | number) => {
    setShowModal(true);
    setCancelMemberKey(key);
  };

  return (
    <div
      className='w-full pt-[280px] flex flex-col items-center justify-between'
      style={{ minHeight: '95vh' }}
    >
      <div className='w-full flex flex-col items-center'>
        <div className='w-11/12 flex justify-between mb-10'>
          <div className='flex w-60 h-8 rounded-full bg-[#ECECEC]'>
            <Image src={search} alt='search' className='mx-2 scale-75' />
            <input
              type='text'
              placeholder='멤버 검색'
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              className='outline-none bg-[#ECECEC] placeholder-[#FFFFFF] text-white text-sm font-nb '
            />
          </div>
          <Button
            width='w-28'
            height='h-8'
            rounded='rounded-full'
            color='bg-blue-primary'
            font='font-neb'
            fontSize='text-sm'
            handler={handleShowMessage}
          >
            초대하기
          </Button>
        </div>
        <div
          className='w-full flex flex-col items-center justify-between'
          style={{ minHeight: '49vh' }}
        >
          <div className='w-full flex flex-col items-center'>
            {findSearchName.length === data.length ? (
              <>
                <div className='w-10/12 flex flex-col mb-6'>
                  <span className='font-nb text-base'>모임주</span>
                  {leader.map((el) => {
                    return (
                      <div
                        key={el.key}
                        className='w-full border-b-[1px] border-[#dadada] px-4 py-2'
                      >
                        (){el.name}
                      </div>
                    );
                  })}
                </div>
                <div className='w-10/12 flex flex-col mb-4'>
                  <span className='font-nb text-base'>멤버</span>
                  {member.map((el) => {
                    return (
                      <div key={el.key} className='flex items-center justify-between'>
                        <div className='w-full px-4 py-2'>(){el.name}</div>
                        <Button
                          color='bg-[#E6E6E6]'
                          font='font-nb'
                          fontSize='text-[10px]'
                          fontColor='text-[#9b9b9b]'
                          width='w-24'
                          height='h-6'
                          handler={() => {
                            handleCancelMemberKey(el.key);
                          }}
                        >
                          맴버 해지
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className='w-10/12 flex flex-col mb-4'>
                {findSearchName.map((el) => {
                  return (
                    <div key={el.key} className='flex items-center justify-between'>
                      <div className='w-full px-4 py-2'>(){el.name}</div>
                      {el.leader === false && (
                        <Button
                          color='bg-[#E6E6E6]'
                          font='font-nb'
                          fontSize='text-[10px]'
                          fontColor='text-[#9b9b9b]'
                          width='w-24'
                          height='h-6'
                          handler={() => {
                            handleCancelMemberKey(el.key);
                          }}
                        >
                          맴버 해지
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div
            className={`w-full bg-red-primary py-3 text-center text-white text-xs font-nb transition-all duration-300 ease-in-out ${
              showMessage ? 'opacity-100' : 'opacity-0'
            } `}
          >
            초대 링크가 복사되었습니다.
          </div>
        </div>
      </div>

      <Link href={'/main'} className='mt-2'>
        <button className='border-b-[1px] border-[#b4b4b4] font-nb text-xs text-[#b4b4b4]'>
          홈으로 돌아가기
        </button>
      </Link>

      <Modal eventName='해지하기'>
        <p className='font-nb text-base text-grey-text mb-4'>(){findCancelMemaber?.name}</p>
        <p className='font-nb text-xl text-red-primary mb-2'>멤버를 해지하시겠습니까?</p>
        <p className='font-nr text-sm text-grey-text'>
          {findCancelMemaber?.name}님은 더 이상 해당 게시물에 접근할 수 없습니다.
        </p>
      </Modal>
    </div>
  );
}

'use client';

import { useState } from 'react';

import { Search, Item, Pagination, Buttons } from './_components';
import { Dropdown, Edit } from '@/components';

export default function Main() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [curruntPage, setCurruntPage] = useState(1);
  const [selectValue, setSelectValue] = useState('');

  const offset = (curruntPage - 1) * postsPerPage;
  const totalPosts = data.slice(offset, offset + postsPerPage).map((el, idx) => {
    return <Item key={idx} />;
  });

  const setPage = (page: number) => {
    setCurruntPage(page);
  };

  return (
    <div className=' flex flex-col justify-between items-center mt-20' style={{ height: '75vh' }}>
      <div className='fixed top-16 z-30 flex justify-center'>
        <Search />
      </div>
      <div className=' z-10 fixed flex items-center justify-between w-full pt-14 px-6 mb-5 bg-white'>
        <p className='font-neb text-base text-grey-text'>생성된 목표</p>
        <div className='flex items-center justify-between font-neb text-xs text-blue-primary'>
          <div>
            <Edit margin={'mr-2'} path='main' />
          </div>
          <div>
            <Dropdown
              list={['전체', '개별구매', '공동구매', '즐겨찾기']}
              width='w-24'
              prevIcon={true}
              borderless={true}
              filled={false}
              setState={setSelectValue}
              rightSort={true}
            />
          </div>
        </div>
      </div>
      <div className=' w-full h-full flex flex-col items-center mt-28 mb-14'>{totalPosts}</div>
      <div>
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          curruntPage={curruntPage}
          handler={setPage}
        />
      </div>

      <Buttons />
    </div>
  );
}

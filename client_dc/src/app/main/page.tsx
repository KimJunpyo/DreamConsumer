'use client';

import { useState } from 'react';
import Items from './_components/Items';
import Search from './_components/Search';
import Edit from '@/components/Edit';
import Pagination from './_components/Pagination';
import { Button } from '@/components';

export default function Main() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [curruntPage, setCurruntPage] = useState(1);
  const offset = (curruntPage - 1) * postsPerPage;
  const totalPosts = data.slice(offset, offset + postsPerPage).map((el, idx) => {
    return <Items key={idx} />;
  });

  function setPage(page: number) {
    setCurruntPage(page);
  }

  return (
    <div className='flex flex-col items-center'>
      <Search />
      <div className='flex items-center justify-between w-10/12 mt-12 mb-5'>
        <p className='font-neb text-base text-grey-text'>생성된 목표</p>
        <div className='flex items-center justify-between font-neb text-xs text-blue-primary'>
          <Edit marginRight={'mr-2'} />
          <div>전체 정렬</div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col items-center mb-14'>
        {totalPosts}
        {/* <div className='absolute bottom-28'> */}
      </div>
      <div>
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          curruntPage={curruntPage}
          handler={setPage}
        />
        <Button
          font='font-neb'
          width='w-36'
          height='h-12'
          color='bg-blue-primary'
          fontSize='text-xl'
          icon='plus'
        >
          등록하기
        </Button>
      </div>
    </div>
  );
}

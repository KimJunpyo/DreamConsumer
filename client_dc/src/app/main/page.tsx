'use client';

import { useState } from 'react';

import { Search, Item, Pagination, Buttons } from './_components';
import { Edit } from '@/components';

export default function Main() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [curruntPage, setCurruntPage] = useState(1);
  const [clickEdit, setClickEdit] = useState(false);

  const offset = (curruntPage - 1) * postsPerPage;
  const totalPosts = data.slice(offset, offset + postsPerPage).map((el, idx) => {
    return <Item key={idx} editValue={clickEdit} />;
  });

  const setPage = (page: number) => {
    setCurruntPage(page);
  };

  const handleEditClick = () => {
    setClickEdit(!clickEdit);
  };

  return (
    <div className=' flex flex-col justify-between items-center' style={{ height: '75vh' }}>
      <div className='z-10 flex justify-center'>
        <Search />
      </div>

      <div className='flex items-center justify-between w-10/12 mt-12 mb-5'>
        <p className='font-neb text-base text-grey-text'>생성된 목표</p>
        <div className='flex items-center justify-between font-neb text-xs text-blue-primary'>
          <div onClick={handleEditClick}>
            <Edit margin={'mr-2'} path='main' />
          </div>
          <div>전체 정렬</div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col items-center mb-14'>{totalPosts}</div>
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

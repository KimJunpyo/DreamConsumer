'use client';

import { useState } from 'react';
import Items from './_components/Items';
import Search from './_components/Search';
import Edit from '@/components/Edit';
import Pagination from './_components/Pagination';
import { Button } from '@/components';

import Link from 'next/link';

export default function Main() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [curruntPage, setCurruntPage] = useState(1);
  const [clickEdit, setClickEdit] = useState(false);

  const offset = (curruntPage - 1) * postsPerPage;
  const totalPosts = data.slice(offset, offset + postsPerPage).map((el, idx) => {
    return <Items key={idx} editValue={clickEdit} />;
  });

  function setPage(page: number) {
    setCurruntPage(page);
  }

  const handleEditClick = () => {
    setClickEdit(!clickEdit);
  };

  return (
    <div className=' flex flex-col justify-between items-center' style={{ height: '75vh' }}>
      <Search />
      <div className='flex items-center justify-between w-10/12 mt-12 mb-5'>
        <p className='font-neb text-base text-grey-text'>생성된 목표</p>
        <div className='flex items-center justify-between font-neb text-xs text-blue-primary'>
          <div onClick={handleEditClick}>
            <Edit marginRight={'mr-2'} value={clickEdit} />
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

      {clickEdit ? (
        <div className='w-full fixed bottom-14 flex justify-center'>
          <Button
            font='font-neb'
            width='w-10/12'
            height='h-14'
            color='bg-red-primary'
            fontSize='text-xl'
            icon='delete'
          >
            삭제하기
          </Button>
        </div>
      ) : (
        <Link href={'/write'} className='fixed bottom-14 right-5'>
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
        </Link>
      )}
    </div>
  );
}

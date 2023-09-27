'use client';

import { useState, useEffect } from 'react';
import { Search } from '.';
import { Dropdown, Edit } from '@/components';
import { SORT_OPTIONS, SORT_OPTIONS_KO } from '../_util/constants';
import { setSearchParams } from '@/common/functions';

export default function Toolbar() {
  const [sortOption, setSortOption] = useState(SORT_OPTIONS_KO[0]);

  useEffect(() => {
    const sort = SORT_OPTIONS.find((option) => option.KO === sortOption);

    if (sort) {
      setSearchParams('sort', sort.EN);
      // 정렬 API 요청
    }
  }, [sortOption]);

  return (
    <div className='flex justify-between items-center px-5 mt-7'>
      <Search />
      <div className='flex'>
        <Edit path='dustbin' />
        <Dropdown
          list={SORT_OPTIONS_KO}
          setState={setSortOption}
          width='w-[5.5rem]'
          prevIcon
          borderless
        />
      </div>
    </div>
  );
}

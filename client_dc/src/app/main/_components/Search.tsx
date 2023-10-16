import Tags from '@/components/Tag';
import Image from 'next/image';
import React, { useState } from 'react';
import SearchImg from '~/image/search.svg';
import { search } from '../_util/api';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [clickSearch, setClickSearch] = useState(false);
  const handleSearchClick = () => {
    setClickSearch(!clickSearch);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(searchValue);
    search(searchValue);
    setClickSearch(false);
  };

  return (
    <>
      <form
        className='flex justify-center w-[22rem] h-12 rounded-3xl shadow-lg bg-white z-30'
        action=''
        onSubmit={handleSubmit}
      >
        <button type='submit'>
          <Image src={SearchImg} alt='search' className='mr-2' />
        </button>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder='등록한 목표를 검색해보세요. #태그 #검색'
          className='w-9/12  font-nr text-sm placeholder-[#CECECE] outline-none '
          onClick={handleSearchClick}
        />
      </form>
      {clickSearch && (
        <div
          className='fixed w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center mt-5'
          onClick={handleSearchClick}
        >
          <p className='font-neb text-3xl text-white mb-20'>Tag 검색</p>
          <div className='w-11/12 flex flex-wrap justify-center'>
            <Tags items='redLarge'>#2024년</Tags>
            <Tags items='greenLarge'>#리조트</Tags>
            <Tags items='purpleLarge'>#연말</Tags>
            <Tags items='redLarge'>#2024년</Tags>
            <Tags items='greenLarge'>#리조트</Tags>
            <Tags items='purpleLarge'>#연말</Tags>
          </div>
        </div>
      )}
    </>
  );
}

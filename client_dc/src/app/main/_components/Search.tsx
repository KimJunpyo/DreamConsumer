import Image from 'next/image';
import SearchImg from '~/image/search.svg';

export default function Search() {
  return (
    <div className='flex justify-center w-full'>
      <div className='flex justify-center w-11/12 h-12  rounded-3xl shadow-lg'>
        <Image src={SearchImg} alt='search' className='mr-2' />
        <input
          placeholder='등록한 목표를 검색해보세요. #태그 #검색'
          className='w-9/12  font-nr text-sm placeholder-[#CECECE] outline-none '
        />
      </div>
    </div>
  );
}

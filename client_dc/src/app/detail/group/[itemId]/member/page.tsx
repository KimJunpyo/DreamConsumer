import { Button } from '@/components';
import Image from 'next/image';
import { search } from '~/image';

export default function Member() {
  const data = [
    { name: '명수', leader: false },
    { name: '준표', leader: false },
    { name: '혜인', leader: true },
  ];

  const leader = data.filter((el) => el.leader === true);
  const member = data.filter((el) => el.leader !== true);

  return (
    <div className='w-full pt-[280px] flex flex-col items-center'>
      <div className='w-11/12 flex justify-between mb-10'>
        <div className='flex w-60 h-8 rounded-full bg-[#ECECEC]'>
          <Image src={search} alt='search' className='mx-2 scale-75' />
          <input
            type='text'
            placeholder='멤버 검색'
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
        >
          초대하기
        </Button>
      </div>
      <div className='w-10/12 flex flex-col mb-6'>
        <span className='font-nb text-base'>모임주</span>
        {leader.map((el, idx) => {
          return (
            <div key={idx} className='w-full border-b-[1px] border-[#dadada] px-4 py-2'>
              (){el.name}
            </div>
          );
        })}
      </div>
      <div className='w-10/12 flex flex-col mb-4'>
        <span className='font-nb text-base'>멤버</span>
        {member.map((el, idx) => {
          return (
            <div key={idx} className='w-full px-4 py-2'>
              (){el.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

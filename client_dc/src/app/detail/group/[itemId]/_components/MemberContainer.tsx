import { ProgressBar } from '@/components';

export default function MemberContainer() {
  return (
    <div className='w-full flex flex-col items-center text-base'>
      <p className='w-11/12 flex items-center font-nb text-grey-text'>멤버별 기여도</p>

      <div className='w-full border-b-[1px] border-[#DADADA] flex justify-center'>
        <div className='w-11/12 flex justify-between py-1'>
          <div className='font-nb text-grey-text'>()(명수)</div>
          <div className='flex items-center'>
            <p className='mr-2 font-nl text-blue-primary'>30%</p>
            <ProgressBar progress={30} width='w-40' height='h-4' />
          </div>
        </div>
      </div>
    </div>
  );
}

import Items from './_components/Items';
import Search from './_components/Search';
import Edit from '@/components/Edit';

export default function Main() {
  return (
    <div className='flex flex-col items-center '>
      <Search />
      {/* <Filter /> */}
      <div className='flex items-center justify-between w-10/12 mt-12 mb-5'>
        <p className='font-neb text-base text-grey-text'>생성된 목표</p>
        <div className='flex items-center justify-between font-neb text-xs text-blue-primary'>
          <Edit marginRight={'mr-2'} />
          <div>전체 정렬</div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        {/* <Items /> */}
        <div className=' flex justify-between w-11/12 border-2 border-grey-border rounded-xl px-6 py-4'>
          <div className='w-2/3 flex flex-col'>
            <div className='mb-1'>즐겨찾기, 구매태그</div>
            <div className=' font-neb text-grey-text text-xl mb-1 break-words'>게시물</div>
            <div>태그들</div>
          </div>
          <div className='w-1/3 border-2 border-red'>오른쪽 원형그래프</div>
        </div>
      </div>
      <div>/main 페이지</div>
    </div>
  );
}

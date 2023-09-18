import Dropdown from '@/components/Dropdown';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='text-mainRed'>메인페이지임</div>
      <Dropdown list={['학생', '선생']} prevIcon={true} />
    </>
  );
}

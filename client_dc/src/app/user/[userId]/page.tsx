import Rating from './_components/Rating';
import { Item } from '@/components';
import { getFontSize } from './_util/functions';

export default function User() {
  const userName = '홍길동';
  const fontSize = getFontSize(userName.length);

  return (
    <div className='m-auto flex flex-col'>
      <section className='bg-blue-primary px-10 pt-3 pb-6 flex flex-col items-center'>
        <div className='flex items-center justify-center'>
          <Rating />
          <h2 className={`font-nb text-white ml-3 ${fontSize}`}>
            {userName}
            <span className='font-nr text-white text-3xl'> 님</span>
          </h2>
        </div>
        <div>
          <div className='flex flex-col gap-1 pt-5 whitespace-nowrap'>
            <div className='flex text-white'>
              <h3 className='font-nb mr-5'>이메일</h3>
              <p className='font-nl'>gildong@yuldo.kr</p>
            </div>
            <div className='flex text-white'>
              <h3 className='font-nb mr-5'>직ㅤ업</h3>
              <p className='font-nl'>프리랜서</p>
            </div>
            <div className='flex text-white'>
              <h3 className='font-nb mr-5'>나ㅤ이</h3>
              <p className='font-nl'>만 22세 (2001년생)</p>
            </div>
          </div>
        </div>
      </section>
      <section className='p-4'>
        <p className='font-nb text-2xl text-grey-text text-center pt-4 pb-3'>
          지금까지 00개 성공했어요!
        </p>
      </section>
    </div>
  );
}

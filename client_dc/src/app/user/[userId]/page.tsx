import Rating from './_components/Rating';

export default function User() {
  return (
    <div className='m-auto'>
      <section className='bg-blue-primary px-16 py-5 flex flex-col items-center'>
        <div className='flex items-center justify-center'>
          <Rating />
          <h2 className='font-nb text-white text-4xl ml-3'>
            홍길동
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
              <p className='font-nl'>만 23세 (2000년생)</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className='font-nb text-2xl text-grey-text text-center py-5'>
          지금까지 00개 성공했어요!
        </p>
      </section>
    </div>
  );
}

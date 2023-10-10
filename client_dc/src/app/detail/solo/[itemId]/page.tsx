import { Button, ProgressBar } from '@/components';
import { ImgBox, TagsContainer } from '../../_components';
import Link from 'next/link';

export default function Solo() {
  const totalPrice = 1200000;
  const saveMoney = 10000000000;
  const stringSaveMoney = saveMoney.toLocaleString('ko-KR');
  const percent = 100;
  const tags = ['#과일', '#네이버', '#제철'];

  const PercentColor = () => {
    const moneyLen = stringSaveMoney.length;
    if (60 + moneyLen * 3 >= 100) {
      return true;
    }
    return percent > 60 + (moneyLen < 5 ? 5 : moneyLen) * 3;
  };

  return (
    <div className='pt-[275px] flex justify-center'>
      <div className='flex flex-col w-9/12 mt-3 gap-y-2'>
        <ImgBox />
        <div className='flex text-grey-text mt-2 w-full border-[1px] border-[#d9d9d9] rounded-full text-base py-2'>
          <span className='font-nb w-1/2 text-end mr-4'>가격</span>
          <span className='font-nl w-1/2'>{totalPrice.toLocaleString('ko-KR')}원</span>
        </div>
        <div className='relative'>
          <div className='flex z-10 absolute w-full h-full items-center'>
            <span
              className={`font-nb w-1/2 text-end mr-4 ${
                percent < 50 ? 'text-grey-text' : 'text-white'
              }`}
            >
              모인 금액
            </span>
            <span className={`font-nl w-1/2 ${PercentColor() ? 'text-white' : 'text-grey-text'}`}>
              {stringSaveMoney}원
            </span>
          </div>
          <ProgressBar progress={percent} height='h-[42px]' />
        </div>

        <div className='my-3'>
          <TagsContainer tags={tags} />
        </div>
        <div className='flex flex-col justify-center w-[320px] font-nb text-grey-cancel font-[15px]'>
          <p>
            매월 <span className='text-red-text'>5일 5,000원</span>씩 저금으로 설정 되어 있어요.
          </p>
          <p>
            <span className='text-red-text'>47일 뒤</span>에 구매할 수 있습니다!
          </p>
        </div>
        <div className='flex justify-center mt-6'>
          <div className='w-11/12 flex justify-center gap-x-2'>
            <Button
              font='font-neb'
              width='w-[120px]'
              height='h-10'
              rounded='rounded-lg'
              color='bg-blue-primary'
            >
              ₩ 입금하기
            </Button>
            <Button
              font='font-neb'
              width='w-[134px]'
              height='h-10'
              rounded='rounded-lg'
              color='bg-red-primary'
            >
              제품 사이트 바로가기
            </Button>
          </div>
        </div>
        <div className='flex justify-center mt-6 mb-10'>
          <Link href={'/main'}>
            <button className='border-b border-[#b4b4b4] font-nb text-xs text-[#b4b4b4]'>
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

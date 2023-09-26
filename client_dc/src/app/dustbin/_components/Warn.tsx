import Image from 'next/image';
import { warn } from '~/image';

export default function Warn() {
  return (
    <div className='flex gap-3 justify-center my-6'>
      <Image src={warn} alt='경고' width={39} />
      <p className='font-nb text-sm text-red-text text-center'>
        휴지통의 항목은 30일 후에 <br /> 자동으로 영구삭제 됩니다.
      </p>
    </div>
  );
}

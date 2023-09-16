import Image from 'next/image';
import EditImg from '~/image/edit.svg';

interface EditProps {
  marginRight?: string;
  handler?: (e: React.MouseEvent) => void;
}

export default function Edit({ marginRight, handler }: EditProps) {
  return (
    <div
      className={`flex items-center justify-between font-neb text-xs text-blue-primary ${
        marginRight && marginRight
      }
      }`}
      onClick={handler}
    >
      <div className='flex items-center'>
        <Image src={EditImg} alt='edit' />
        편집
      </div>
    </div>
  );
}

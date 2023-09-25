import Image from 'next/image';
import { RATING_LIST } from '../_util/constants';

type Props = {
  rating: string;
};

export default function RatingsModal({ rating }: Props) {
  return (
    <div className='absolute w-[90vw] h-[5.5rem] bg-white rounded-2xl top-[10.5rem] flex justify-around p-2'>
      {RATING_LIST.map(({ image, ratingName, width }) => (
        <div key={ratingName} className='flex flex-col items-center'>
          <div className={`triangle-red-bottom ${rating !== ratingName && 'invisible'}`} />
          <Image src={image} alt={ratingName} width={width} />
          <p className='font-nr text-grey-text text-xs pt-1 absolute bottom-1.5'>{ratingName}</p>
        </div>
      ))}
    </div>
  );
}

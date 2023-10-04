'use client';

import Image from 'next/image';
import { blankImage } from '~/image';

interface ImgBoxProps {
  imageUrl?: string | null | undefined;
}

export default function ImgBox({ imageUrl }: ImgBoxProps) {
  return (
    <label
      className={`overflow-hidden flex gap-3 justify-center text-[15px] font-neb items-center h-60 ${
        !imageUrl && 'border border-grey-border border-dashed text-grey-border rounded-2xl'
      } `}
    >
      {imageUrl ? (
        <img className='object-cover w-full h-full' src={imageUrl} alt='preview' />
      ) : (
        <>
          <Image src={blankImage} alt='blank image' />
          <span>이미지 등록</span>
        </>
      )}
    </label>
  );
}

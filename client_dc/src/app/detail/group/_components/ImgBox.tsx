'use client';

import Image, { StaticImageData } from 'next/image';
import { blankImage } from '~/image';

import { useEffect, useState } from 'react';
import { testImg } from '.';

export default function ImgBox() {
  const [imageUrl, setImageUrl] = useState<string | null | undefined | StaticImageData>();
  useEffect(() => {
    setImageUrl(testImg);
  }, []);
  return (
    <label
      htmlFor='imageUpload'
      className={`overflow-hidden flex gap-3 justify-center text-[15px] font-neb items-center h-60 ${
        !imageUrl && 'border border-grey-border border-dashed text-grey-border rounded-2xl'
      } `}
    >
      {imageUrl ? (
        <Image className='object-cover w-full h-full' src={imageUrl} alt='preview' />
      ) : (
        <>
          <Image src={blankImage} alt='blank image' />
          <span>이미지 등록</span>
        </>
      )}
    </label>
  );
}

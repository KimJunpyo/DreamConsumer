'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import blankImage from '~/image/blankImage.png';
import { ImageBoxProps } from '../_util/types';

const ImageBox = ({ imageUrl, setImageUrl }: ImageBoxProps) => {
  const [imageFile, setImageFile] = useState<File | null>();

  const saveImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        console.log(1);
        setImageFile(file);
        return;
      }
      setImageFile(null);
    }
  };

  useEffect(() => {
    if (imageFile) {
      const file = new FileReader();
      file.onloadend = () => {
        setImageUrl(file.result as string);
      };
      file.readAsDataURL(imageFile);
      return;
    }
    setImageUrl(null);
  }, [imageFile, setImageUrl]);

  return (
    <form method='post' encType='multipart/form-data'>
      <label
        htmlFor='imageUpload'
        className='overflow-hidden flex gap-3 justify-center text-[15px] font-neb items-center h-64 border border-grey-border border-dashed text-grey-border rounded-2xl'
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
      <input
        className='hidden'
        type='file'
        accept='image/*'
        id='imageUpload'
        name='imageUpload'
        onChange={saveImageFile}
      />
    </form>
  );
};

export default ImageBox;

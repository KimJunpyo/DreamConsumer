'use client';

import Input from '@/components/Input';
import RightArrow from '~/image/rightArrow.svg';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import Checkbox from '@/components/Checkbox';
import BlankImage from '~/image/blankImage.png';

export default function Write() {
  const [productName, setProductName] = useState<string>('');
  const [productLink, setProductLink] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [currentFund, setCurrentFund] = useState<string>('');
  const [savingsUnit, setSavingsUnit] = useState<string>('');
  const [autoSavings, setAutoSavings] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const calculatedDay = () => {
    if (Number(productPrice) && Number(currentFund) && Number(savingsUnit)) {
      return Math.ceil((Number(productPrice) - Number(currentFund)) / Number(savingsUnit));
    }
    return 'OOO';
  };

  const openLink = () => {
    if (productLink) {
      window.open(productLink);
      return;
    }
    alert('입력하세요잉');
  };

  const saveImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
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
        setPreview(file.result as string);
      };
      console.log(1);
      file.readAsDataURL(imageFile);
      console.log(file);
      return;
    }
    setPreview(null);
  }, [imageFile]);

  return (
    <div className='flex flex-col my-4 mx-6 gap-2'>
      <form method='post' encType='multipart/form-data'>
        <label
          htmlFor='imageUpload'
          className='overflow-hidden flex gap-3 justify-center text-[15px] font-neb items-center h-64 border border-grey-border border-dashed text-grey-border rounded-2xl'
        >
          {preview ? (
            <img className='object-cover w-full h-full' src={preview} alt='preview' />
          ) : (
            <>
              <Image src={BlankImage} alt='blank image' />
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
      <label className='font-neb text-grey-text text-xl'>
        제품명
        <Input
          inputType='text'
          value={productName}
          placeholder='제품명'
          hasBorder={true}
          handler={(e) => handleChangeValue(e, setProductName)}
        />
      </label>
      <label className='font-neb text-grey-text text-xl'>
        구매 링크
        <div className='flex'>
          <Input
            inputType='text'
            value={productLink}
            placeholder='링크를 입력하세요.'
            hasBorder={true}
            handler={(e) => handleChangeValue(e, setProductLink)}
          />
          <Image className='' src={RightArrow} alt='arrow' onClick={openLink} />
        </div>
      </label>
      <label className='font-neb text-grey-text text-xl'>
        태그
        <Input
          inputType='text'
          value={tag}
          placeholder=',로 구분할 수 있습니다.'
          hasBorder={true}
          handler={(e) => handleChangeValue(e, setTag)}
        />
      </label>
      <div className='flex gap-3'>
        <div className='font-neb text-grey-text text-xl grow'>구매 방식</div>
        <Button title='개인' items='blueSmall' />
        <Button title='공동구매' items='blueSmall' />
      </div>
      <label className='font-neb text-grey-text text-xl'>
        가격
        <Input
          inputType='text'
          value={productPrice}
          placeholder='제품의 가격을 입력해주세요.'
          hasBorder={true}
          handler={(e) => handleChangeValue(e, setProductPrice)}
        />
      </label>
      <label className='font-neb text-grey-text text-xl'>
        보유 자금
        <Input
          inputType='text'
          value={currentFund}
          placeholder='보유하신 자금의 금액을 입력해주세요.'
          hasBorder={true}
          handler={(e) => handleChangeValue(e, setCurrentFund)}
        />
      </label>
      <div className='font-neb text-grey-text text-xl'>저금 계획 주기</div>
      <label className='font-neb text-grey-text text-xl'>
        저금 단위 금액
        <Input
          inputType='text'
          value={savingsUnit}
          placeholder='저금 금액을 입력해주세요.'
          hasBorder={true}
          handler={(e) => handleChangeValue(e, setSavingsUnit)}
        />
      </label>
      <Checkbox value={autoSavings} inputName='aa' handler={() => setAutoSavings(!autoSavings)}>
        저금 금액 자동으로 업데이트 하기
      </Checkbox>
      <hr className='border border-grey-text' />
      <div className='font-neb text-grey-text text-[15px] self-center'>
        <span className='text-red-text'>{calculatedDay()}</span> 일 뒤에 구매할 수 있어요 !
      </div>
      <div className='mt-2 self-center'>
        <Button title='등록하기' icon='plus' items='blueLarge' />
      </div>
    </div>
  );
}

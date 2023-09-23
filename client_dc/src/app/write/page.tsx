'use client';

import Input from '@/components/Input';
import RightArrow from '~/image/rightArrow.svg';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import Checkbox from '@/components/Checkbox';
import BlankImage from '~/image/blankImage.png';
import Dropdown from '@/components/Dropdown';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { writeDropdownRadio } from '@/recoil/atoms';
import {
  COMMON_BUTTON_PROPS,
  COMMON_DROPDOWN_PROPS,
  COMMON_INPUT_PROPS,
  DROPDOWN_LIST,
  PLACEHOLDER_MESSAGE,
} from './_util/constants';

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
  const [check, setCheck] = useState<string>('');

  const setCheckRadio = useSetRecoilState(writeDropdownRadio);
  const checkRadio = useRecoilValue(writeDropdownRadio);

  const dynamicButtonProps = (width: string, height: string) => {
    return { ...COMMON_BUTTON_PROPS, width, height };
  };

  const dynamicDropdownProps = (
    setState: React.Dispatch<React.SetStateAction<string>>,
    list: string[],
    keyword: string
  ) => {
    return {
      ...COMMON_DROPDOWN_PROPS,
      setState,
      list,
      handler: () => setCheckRadio(keyword),
      radio: checkRadio === keyword,
    };
  };

  const dynamicInputProps = (
    placeholder: string,
    value: string,
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    return {
      ...COMMON_INPUT_PROPS,
      placeholder,
      value,
      handler,
    };
  };

  const handleChangeString = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;
    const numberValue = Number(value.replaceAll(',', ''));

    if (isNaN(numberValue)) {
      setState(e.target.value);
      return;
    }
    const stringValue = numberValue.toLocaleString('ko-KR');
    setState(stringValue);
  };

  const calculatedDay = () => {
    const numberProductPrice = removeComma(productPrice);
    const numberCurrentFund = removeComma(currentFund);
    const numberSavingsUnit = removeComma(savingsUnit);

    if (numberProductPrice >= 0 && numberCurrentFund >= 0 && numberSavingsUnit >= 0) {
      const value = Math.ceil((numberProductPrice - numberCurrentFund) / numberSavingsUnit);

      if (checkRadio === 'Monthly') {
        if (value > 12) {
          return Math.floor(value / 12) + '년 ' + (value % 12 !== 0 ? (value % 12) + '개월 ' : '');
        }
      }
      if (checkRadio === 'Weekly') {
        if (value > 4) {
          if (value > 48) {
            const newValue = Math.floor(value / 48);
            const new2Value = Math.floor((value % 48) / 4);
            const new3Value = (value % 48) % 4;
            return (
              newValue +
              '년 ' +
              (new2Value !== 0 ? new2Value + '개월 ' : '') +
              (new3Value !== 0 ? new3Value + '주 ' : '')
            );
          }
          const newValue = Math.floor(value / 4);
          const newValue2 = value % 4;

          return newValue + '개월 ' + (newValue2 !== 0 ? newValue2 + '주 ' : '');
        }
      }
      return value + checkRadio;
    }
    return 'OOO';
  };

  const removeComma = (state: string) => {
    if (state === '') {
      return -1;
    }
    return Number(state.replaceAll(',', ''));
  };

  const openLink = () => {
    if (productLink) {
      window.open(productLink);
      return;
    }
    alert('입력하세요잉');
  };

  const openNaverShop = () => {
    if (productName) {
      window.open(`https://search.shopping.naver.com/search/all?query=${productName}`);
    }
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
      file.readAsDataURL(imageFile);
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
        <div className='flex justify-between items-center'>
          <span>제품명</span>
          <span
            className='text-red-text text-xs border-b border-red-text'
            onClick={() => {
              openNaverShop();
            }}
          >
            최저가 검색하기
          </span>
        </div>
        <Input
          {...dynamicInputProps(PLACEHOLDER_MESSAGE.PRODUCT_NAME, productName, (e) =>
            handleChangeString(e, setProductName)
          )}
        />
      </label>
      <label className='font-neb text-grey-text text-xl'>
        구매 링크
        <div className='flex gap-2'>
          <Input
            {...dynamicInputProps(PLACEHOLDER_MESSAGE.PRODUCT_LINK, productLink, (e) =>
              handleChangeString(e, setProductLink)
            )}
          />
          <Image className='' src={RightArrow} alt='arrow' onClick={openLink} />
        </div>
      </label>
      <label className='font-neb text-grey-text text-xl'>
        태그
        <Input
          {...dynamicInputProps(PLACEHOLDER_MESSAGE.TAG, tag, (e) => handleChangeString(e, setTag))}
        />
      </label>
      <div className='flex gap-2'>
        <div className='font-neb text-grey-text text-xl grow'>구매 방식</div>
        <Button {...dynamicButtonProps('w-20', 'h-8')}>개인</Button>
        <Button {...dynamicButtonProps('w-20', 'h-8')}>공동구매</Button>
      </div>
      <label className='font-neb text-grey-text text-xl'>
        가격
        <Input
          {...dynamicInputProps(PLACEHOLDER_MESSAGE.PRODUCT_PRICE, productPrice, (e) =>
            handleChangeValue(e, setProductPrice)
          )}
        />
      </label>
      <label className='font-neb text-grey-text text-xl'>
        보유 자금
        <Input
          {...dynamicInputProps(PLACEHOLDER_MESSAGE.CURRENT_FUND, currentFund, (e) =>
            handleChangeValue(e, setCurrentFund)
          )}
        />
      </label>
      <div className='font-neb text-grey-text text-xl'>
        저금 계획 주기
        <div className='flex gap-2'>
          <Button {...dynamicButtonProps('w-32', 'h-8')} rounded='rounded-lg'>
            매일
          </Button>
          <Dropdown {...dynamicDropdownProps(setCheck, DROPDOWN_LIST.WEEKLY, 'Weekly')} />
          <Dropdown {...dynamicDropdownProps(setCheck, DROPDOWN_LIST.MONTHLY, 'Monthly')} />
        </div>
      </div>
      <label className='font-neb text-grey-text text-xl'>
        저금 단위 금액
        <Input
          {...dynamicInputProps(PLACEHOLDER_MESSAGE.SAVING_UNIT, savingsUnit, (e) =>
            handleChangeValue(e, setSavingsUnit)
          )}
        />
      </label>
      <Checkbox
        value={autoSavings}
        inputName='autoPaid'
        handler={() => setAutoSavings(!autoSavings)}
      >
        저금 금액 자동으로 업데이트 하기
      </Checkbox>
      <hr className='border border-grey-text' />
      <div className='font-neb text-grey-text text-[15px] self-center'>
        <span className='text-red-text'>{calculatedDay()}</span> 뒤에 구매할 수 있어요 !
      </div>
      <div className='mt-2 self-center w-full'>
        <Button {...dynamicButtonProps('w-full', 'h-12')} icon='plus'>
          등록하기
        </Button>
      </div>
    </div>
  );
}

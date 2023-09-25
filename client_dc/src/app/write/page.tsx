'use client';

import Input from '@/components/Input';
import RightArrow from '~/image/rightArrow.svg';
import { useState } from 'react';
import Image from 'next/image';
import { Checkbox, Dropdown } from '@/components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { writeDropdownRadio } from '@/recoil/atoms';
import {
  COMMON_DROPDOWN_PROPS,
  COMMON_INPUT_PROPS,
  DROPDOWN_LIST,
  MONTH,
  MONTH_TO_DAY,
  PLACEHOLDER_MESSAGE,
  WEEK,
  YEAR_TO_DAY,
} from './_util/constants';
import { write } from './_util/api';
import { divideDate, openLink, openNaverShop, removeComma } from './_util/functions';
import ImageBox from './_components/ImageBox';
import Label from './_components/Label';
import WriteButton from './_components/WriteButton';
import useInputChange from '../../hooks/useInputChange';
import useAutoLiftUp from '../../hooks/useAutoLiftUp';

export default function Write() {
  const setCheckRadio = useSetRecoilState(writeDropdownRadio);
  const checkRadio = useRecoilValue(writeDropdownRadio);

  const [itemName, setItemName] = useInputChange('', false);
  const [itemUrl, setItemUrl] = useInputChange('', false);
  const [tag, setTag, directSetTag] = useInputChange('', false, true);
  const [groupPurchase, setGroupPurchase] = useState<boolean>(false);
  const [itemPrice, setItemPrice] = useInputChange('', true);
  const [currentMoney, setCurrentMoney] = useInputChange('', true);
  const [unitAmount, setUnitAmount] = useInputChange('', true);
  const [autoUpdate, setAutoUpdate] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null | undefined>();
  const [cycle, setCycle] = useState<string>(checkRadio);

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

  const calculatedDay = () => {
    const numberItemPrice = removeComma(itemPrice);
    const numberCurrentMoney = removeComma(currentMoney);
    const numberUnitAmount = removeComma(unitAmount);

    if (numberItemPrice > 0 && numberCurrentMoney >= 0 && numberUnitAmount > 0) {
      const value = Math.ceil((numberItemPrice - numberCurrentMoney) / numberUnitAmount);

      let years = 0;
      let months = 0;
      let weeks = 0;
      let days = 0;

      switch (checkRadio) {
        case 'Monthly':
          {
            let result = divideDate(value, MONTH);
            years = result.date;
            months = result.remain;
          }
          break;
        case 'Weekly':
          {
            let result = divideDate(value, WEEK * MONTH);
            years = result.date;

            result = divideDate(result.remain, WEEK);
            months = result.date;
            weeks = result.remain;
          }
          break;
        case 'Daily':
          {
            let result = divideDate(value, YEAR_TO_DAY);
            years = result.date;

            result = divideDate(result.remain, MONTH_TO_DAY);
            months = result.date;

            result = divideDate(result.remain, 7);
            weeks = result.date;
            days = result.remain;
          }
          break;
        default:
          return 'OOO';
      }

      return `${years ? years + '년 ' : ''}${months ? months + '개월 ' : ''}${
        weeks ? weeks + '주 ' : ''
      }${days ? days + '일 ' : ''}`;
    }
    return 'OOO 일';
  };

  const register = async () => {
    const tagged = tag
      .split(',')
      .map((item) => item.trim().replace(/\s+/g, ' '))
      .filter((item) => item !== '');

    directSetTag?.(tagged.toString());

    const data = {
      itemName,
      imageUrl,
      price: removeComma(itemPrice),
      tags: tagged,
      currentMoney: removeComma(currentMoney),
      cycle,
      unitAmount: removeComma(unitAmount),
      autoUpdate,
      groupPurchase,
      itemURL: itemUrl,
      lowerPriceSearch: false,
    };

    console.log(data);
    await write(data);
  };

  useAutoLiftUp();

  return (
    <div className='flex flex-col my-4 mx-6 gap-2'>
      <ImageBox imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <Label>
        <div className='flex justify-between items-center'>
          <span>제품명</span>
          <span
            className='text-red-text text-xs border-b border-red-text'
            onClick={() => {
              openNaverShop(itemName);
            }}
          >
            최저가 검색하기
          </span>
        </div>
        <Input {...dynamicInputProps(PLACEHOLDER_MESSAGE.PRODUCT_NAME, itemName, setItemName)} />
      </Label>
      <Label>
        구매 링크
        <div className='flex gap-2'>
          <Input {...dynamicInputProps(PLACEHOLDER_MESSAGE.PRODUCT_LINK, itemUrl, setItemUrl)} />
          <Image className='' src={RightArrow} alt='arrow' onClick={() => openLink(itemUrl)} />
        </div>
      </Label>
      <Label>
        태그
        <Input {...dynamicInputProps(PLACEHOLDER_MESSAGE.TAG, tag, setTag)} />
      </Label>
      <div className='flex gap-2'>
        <div className='font-neb text-grey-text text-xl grow'>구매 방식</div>
        <WriteButton
          click={!groupPurchase}
          width='w-20'
          height='h-8'
          handler={() => setGroupPurchase(false)}
        >
          개인
        </WriteButton>
        <WriteButton
          click={groupPurchase}
          width='w-20'
          height='h-8'
          handler={() => setGroupPurchase(true)}
        >
          공동구매
        </WriteButton>
      </div>
      <Label>
        가격
        <Input {...dynamicInputProps(PLACEHOLDER_MESSAGE.PRODUCT_PRICE, itemPrice, setItemPrice)} />
      </Label>
      <Label>
        보유 자금
        <Input
          {...dynamicInputProps(PLACEHOLDER_MESSAGE.CURRENT_FUND, currentMoney, setCurrentMoney)}
        />
      </Label>
      <div className='font-neb text-grey-text text-xl'>
        저금 계획 주기
        <div className='flex gap-2'>
          <WriteButton
            click={checkRadio === 'Daily'}
            width='w-32'
            height='h-8'
            rounded='rounded-lg'
            handler={() => {
              setCycle('Daily');
              setCheckRadio('Daily');
            }}
          >
            매일
          </WriteButton>
          <Dropdown {...dynamicDropdownProps(setCycle, DROPDOWN_LIST.WEEKLY, 'Weekly')} />
          <Dropdown {...dynamicDropdownProps(setCycle, DROPDOWN_LIST.MONTHLY, 'Monthly')} />
        </div>
      </div>
      <Label>
        저금 단위 금액
        <Input {...dynamicInputProps(PLACEHOLDER_MESSAGE.SAVING_UNIT, unitAmount, setUnitAmount)} />
      </Label>
      <Checkbox value={autoUpdate} inputName='autoPaid' handler={() => setAutoUpdate(!autoUpdate)}>
        저금 금액 자동으로 업데이트 하기
      </Checkbox>
      <hr className='border border-grey-text' />
      <div className='font-neb text-grey-text text-[15px] self-center'>
        <span className='text-red-text'>{calculatedDay()}</span> 뒤에 구매할 수 있어요 !
      </div>
      <div className='mt-2 self-center w-full'>
        <WriteButton click={false} width='w-full' height='h-12' handler={register} icon='plus'>
          등록하기
        </WriteButton>
      </div>
    </div>
  );
}

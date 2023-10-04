'use client';

import Input from '@/components/Input';
import RightArrow from '~/image/rightArrow.svg';
import { useState } from 'react';
import Image from 'next/image';
import { Checkbox, Dropdown, Tag } from '@/components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { writeDropdownRadio } from '@/recoil/atoms';
import {
  CYCLE_KEYWORD,
  DROPDOWN_LIST,
  INPUT_MINIMUM,
  ITEM_LIST,
  PLACEHOLDER_MESSAGE,
} from './_util/constants';
import { write } from './_util/api';
import {
  dynamicInputProps,
  dynamicDropdownProps,
  openLink,
  openNaverShop,
  removeComma,
  calculatedDay,
} from './_util/functions';
import ImageBox from './_components/ImageBox';
import Label from './_components/Label';
import WriteButton from './_components/WriteButton';
import useInputChange from '../../hooks/useInputChange';
import useAutoLiftUp from '../../hooks/useAutoLiftUp';
import { ItemListType } from './_util/types';

export default function Write() {
  const setCheckRadio = useSetRecoilState(writeDropdownRadio);
  const checkRadio = useRecoilValue(writeDropdownRadio);

  const [itemName, setItemName] = useInputChange('', false);
  const [itemUrl, setItemUrl] = useInputChange('', false);
  const [tagText, setTagText, directTagText] = useInputChange('', false, true);
  const [tags, setTags] = useState<{ id: string; color: ItemListType }[]>([]);
  const [groupPurchase, setGroupPurchase] = useState<boolean>(false);
  const [itemPrice, setItemPrice] = useInputChange('', true);
  const [currentMoney, setCurrentMoney] = useInputChange('', true);
  const [unitAmount, setUnitAmount] = useInputChange('', true);
  const [autoUpdate, setAutoUpdate] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null | undefined>();
  const [cycle, setCycle] = useState<string>(checkRadio);

  const register = async () => {
    const data = {
      itemName,
      imageUrl: '',
      price: removeComma(itemPrice),
      tags: tags.map((tag) => tag.id),
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

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (tags.some((tag) => tag.id === tagText)) {
        alert('중복된 태그는 입력할 수 없습니다.');
      } else if (tags.length === 3) {
        alert('태그는 최대 3개까지 입력 가능합니다.');
      } else if (tagText.length > INPUT_MINIMUM) {
        const randomColor = Math.floor(Math.random() * ITEM_LIST.length);
        setTags([...tags, { id: tagText, color: ITEM_LIST[randomColor] }]);
      }
      directTagText?.('');
    }
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
        <span className='text-sm pl-2 text-grey-border'>최대 3개, 8글자</span>
        <Input
          {...dynamicInputProps(PLACEHOLDER_MESSAGE.TAG, tagText, setTagText)}
          keyboardHandler={handleKeyUp}
        />
      </Label>
      <div className='flex'>
        {tags.length > 0 &&
          tags.map((tag) => (
            <Tag
              key={tag.id}
              id={tag.id}
              items={tag.color}
              onDelete={(id) => setTags([...tags.filter((tag) => tag.id !== id)])}
            >
              {tag.id}
            </Tag>
          ))}
      </div>
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
            click={checkRadio === CYCLE_KEYWORD.DAILY}
            width='w-32'
            height='h-8'
            rounded='rounded-lg'
            handler={() => {
              setCycle(CYCLE_KEYWORD.DAILY);
              setCheckRadio(CYCLE_KEYWORD.DAILY);
            }}
          >
            매일
          </WriteButton>
          <Dropdown
            {...dynamicDropdownProps(
              setCycle,
              DROPDOWN_LIST.WEEKLY,
              checkRadio === CYCLE_KEYWORD.WEEKLY,
              () => setCheckRadio(CYCLE_KEYWORD.WEEKLY)
            )}
          />
          <Dropdown
            {...dynamicDropdownProps(
              setCycle,
              DROPDOWN_LIST.MONTHLY,
              checkRadio === CYCLE_KEYWORD.MONTHLY,
              () => setCheckRadio(CYCLE_KEYWORD.MONTHLY)
            )}
          />
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
        <span className='text-red-text'>
          {calculatedDay(itemPrice, currentMoney, unitAmount, checkRadio)}
        </span>
        뒤에 구매할 수 있어요 !
      </div>
      <div className='mt-2 self-center w-full'>
        <WriteButton click={false} width='w-full' height='h-12' handler={register} icon='plus'>
          등록하기
        </WriteButton>
      </div>
    </div>
  );
}

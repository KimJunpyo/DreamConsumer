import { ItemListType } from './types';

export const COMMON_BUTTON_PROPS = {
  font: 'font-neb',
  color: 'bg-blue-primary',
  fontSize: 'text-xs',
};

export const CLICKED_BUTTON_PROPS = {
  font: 'font-neb',
  color: 'bg-grey-text',
  fontSize: 'text-xs',
};

export const COMMON_DROPDOWN_PROPS = {
  borderless: true,
  width: 'w-32',
  filled: true,
};

export const COMMON_INPUT_PROPS = {
  inputType: 'text',
  hasBorder: true,
};

export const PLACEHOLDER_MESSAGE = {
  PRODUCT_NAME: '제품명',
  PRODUCT_LINK: '링크를 입력하세요.',
  TAG: 'Enter를 눌러 태그를 추가하세요.',
  PRODUCT_PRICE: '제품의 가격을 입력해주세요.',
  CURRENT_FUND: '보유하신 자금의 금액을 입력해주세요.',
  SAVING_UNIT: '저금 금액을 입력해주세요.',
};

export const DROPDOWN_LIST = {
  WEEKLY: ['매주', '월', '화', '수'],
  MONTHLY: ['매월', '매월 1일', '매월 5일', '매월 15일'],
};

export const ITEM_LIST: ItemListType[] = ['redSmall', 'purpleSmall', 'greenSmall'];

export const CYCLE_KEYWORD = {
  DAILY: 'Daily',
  WEEKLY: 'Weekly',
  MONTHLY: 'Monthly',
};

export const MONTH = 12;

export const WEEK = 4;

export const YEAR_TO_DAY = 365;

export const MONTH_TO_DAY = 30;

export const INPUT_MINIMUM = 0;

import {
  COMMON_DROPDOWN_PROPS,
  COMMON_INPUT_PROPS,
  CYCLE_KEYWORD,
  INPUT_MINIMUM,
  MONTH,
  MONTH_TO_DAY,
  WEEK,
  YEAR_TO_DAY,
} from './constants';

export const removeComma = (state: string) => {
  if (state === '') {
    return -1;
  }
  return Number(state.replaceAll(',', ''));
};

export const divideDate = (num: number, divider: number) => {
  const date = Math.floor(num / divider);
  const remain = num % divider;

  return { date, remain };
};

export const openLink = (itemURL: string) => {
  if (itemURL) {
    window.open(itemURL);
    return;
  }
  alert('입력하세요잉');
};

export const openNaverShop = (itemName: string) => {
  if (itemName) {
    window.open(`https://search.shopping.naver.com/search/all?query=${itemName}`);
    return;
  }
  alert('제품명을 입력해주세용');
};

export const dynamicDropdownProps = (
  setState: React.Dispatch<React.SetStateAction<string>>,
  list: string[],
  radio: boolean,
  handler: () => void
) => {
  return {
    ...COMMON_DROPDOWN_PROPS,
    setState,
    list,
    radio,
    handler,
  };
};

export const dynamicInputProps = (
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

export const calculatedDay = (
  itemPrice: string,
  currentMoney: string,
  unitAmount: string,
  checkRadio: string
) => {
  const numberItemPrice = removeComma(itemPrice);
  const numberCurrentMoney = removeComma(currentMoney);
  const numberUnitAmount = removeComma(unitAmount);

  if (
    numberItemPrice > INPUT_MINIMUM &&
    numberCurrentMoney >= INPUT_MINIMUM &&
    numberUnitAmount > INPUT_MINIMUM
  ) {
    const value = Math.ceil((numberItemPrice - numberCurrentMoney) / numberUnitAmount);

    let years = INPUT_MINIMUM;
    let months = INPUT_MINIMUM;
    let weeks = INPUT_MINIMUM;
    let days = INPUT_MINIMUM;

    switch (checkRadio) {
      case CYCLE_KEYWORD.MONTHLY:
        {
          let result = divideDate(value, MONTH);
          years = result.date;
          months = result.remain;
        }
        break;
      case CYCLE_KEYWORD.WEEKLY:
        {
          let result = divideDate(value, WEEK * MONTH);
          years = result.date;

          result = divideDate(result.remain, WEEK);
          months = result.date;
          weeks = result.remain;
        }
        break;
      case CYCLE_KEYWORD.DAILY:
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
        return 'OOO 일 ';
    }

    return `${years ? years + '년 ' : ''}${months ? months + '개월 ' : ''}${
      weeks ? weeks + '주 ' : ''
    }${days ? days + '일 ' : ''}`;
  }
  return 'OOO 일 ';
};

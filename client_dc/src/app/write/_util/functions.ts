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

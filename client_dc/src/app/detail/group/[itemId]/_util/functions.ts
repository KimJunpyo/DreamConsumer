export const getPercentColor = (percent: number) => {
  if (percent < 34) return '#85daff';
  else if (percent < 67) return '#ffaa85';
  else return '#ff8585';
};

export const tagsSmallColor = (index: number) => {
  switch (index % 3) {
    case 0:
      return 'redSmall';
    case 1:
      return 'greenSmall';
    case 2:
      return 'purpleSmall';
    default:
      return 'redSmall';
  }
};

export const isHangul = (str: string) => {
  const chk = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return chk.test(str);
};

export const isChosung = (str: string) => {
  const chk = /[ㄱ-ㅎ]/;
  return chk.test(str);
};

export const getChosung = (word: string) => {
  const cho = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];

  const offset = 44032;
  const codeNumberDiff = 588;
  const koreanSyllables = 11172;

  let result = '';

  for (let i = 0; i < word.length; i++) {
    const code = word.charCodeAt(i) - offset;
    if (code > -1 && code < koreanSyllables) result += cho[Math.floor(code / codeNumberDiff)];
    else result += word[i];
  }
  return result;
};

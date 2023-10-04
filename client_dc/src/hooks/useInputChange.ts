import { useState } from 'react';

const useInputChange = (
  initialValue = '',
  isNumber: boolean,
  isTag?: boolean
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>> | null
] => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    const stringLimit = isTag ? 8 : 17;
    if (isNumber) {
      const numberValue = Number(inputValue.replaceAll(',', '').slice(0, stringLimit));

      if (!isNaN(numberValue)) {
        setValue(numberValue.toLocaleString('ko-KR'));
      }

      return;
    }
    setValue(inputValue.slice(0, stringLimit).replaceAll(' ', ''));
  };

  return isTag ? [value, handleChangeValue, setValue] : [value, handleChangeValue, null];
};

export default useInputChange;

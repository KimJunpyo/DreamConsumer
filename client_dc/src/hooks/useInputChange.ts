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
    if (isNumber) {
      const numberValue = Number(inputValue.replaceAll(',', '').slice(0, 17));

      if (!isNaN(numberValue)) {
        setValue(numberValue.toLocaleString('ko-KR'));
      } else {
        return;
      }
    } else {
      setValue(inputValue);
    }
  };

  if (isTag) {
    return [value, handleChangeValue, setValue];
  }
  return [value, handleChangeValue, null];
};

export default useInputChange;

'use client';

// DESC: width 설정이 필요할 경우 width 관련 tailwind 클래스를 그대로 props로 내려주세요

type Props = {
  inputType: string;
  inputName?: string;
  value: string | number;
  placeholder?: string;
  hasBorder?: boolean;
  width?: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  inputType,
  inputName,
  value,
  placeholder,
  handler,
  hasBorder,
  width,
}: Props) {
  return (
    <input
      className={`rounded-lg h-9 px-3 py-2 text-sm text-grey-text placeholder:text-grey-border focus:outline-none ${
        hasBorder ? 'border-2 border-grey-border' : ''
      } ${width ? width : 'w-full'}`}
      type={inputType}
      name={inputName}
      value={value}
      onChange={handler}
      placeholder={placeholder}
    />
  );
}

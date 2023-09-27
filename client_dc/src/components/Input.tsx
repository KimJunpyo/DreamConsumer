'use client';

type Props = {
  inputType: string;
  inputName?: string;
  value: string | number;
  placeholder?: string;
  hasBorder?: boolean;
  width?: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyboardHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function Input({
  inputType,
  inputName,
  value,
  placeholder,
  handler,
  hasBorder,
  width,
  keyboardHandler,
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
      onKeyUp={keyboardHandler}
    />
  );
}

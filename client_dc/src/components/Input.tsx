'use client';

type Props = {
  inputType: string;
  inputName?: string;
  value: string;
  placeholder?: string;
  hasBorder?: boolean;
  handler: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export default function Input({
  inputType,
  inputName,
  value,
  placeholder,
  handler,
  hasBorder,
}: Props) {
  return (
    <input
      className={`w-full rounded-lg h-9 px-3 py-2 text-sm text-grey-text placeholder:text-grey-border focus:outline-none ${
        hasBorder ? 'border-2 border-grey-border' : ''
      }`}
      type={inputType}
      name={inputName}
      value={value}
      onChange={handler}
      placeholder={placeholder}
    />
  );
}

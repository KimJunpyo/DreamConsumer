'use client';

type Props = {
  children: string;
  value: boolean;
  inputName: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({ children, value, inputName, handler }: Props) {
  return (
    <div className='flex items-center gap-1 my-1'>
      <input
        type='checkbox'
        className='appearance-none w-4 h-4 border border-blue-primary rounded-sm bg-white checked:bg-blue-primary'
        checked={value}
        name={inputName}
        onChange={handler}
        id={inputName}
      />
      <label className='text-grey-text text-sm font-nr' htmlFor={inputName}>
        {children}
      </label>
    </div>
  );
}

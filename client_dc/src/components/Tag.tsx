interface ButtonProps {
  title?: string;
  icon?: 'delete' | 'plus' | 'refresh';
  items: keyof typeof itemVariants;
}

interface TagProps {
  children: string;
  items: keyof typeof itemVariants;
}

const itemVariants = {
  redSmall:
    'inline-flex justify-center items-center px-2 py-1 bg-tag-red text-[0.5rem] text-white rounded-xl',
  redLarge:
    'inline-flex justify-center items-center px-5 py-2 bg-tag-red text-base text-white rounded-full',

  greenSmall:
    'inline-flex justify-center items-center px-2 py-1 bg-tag-green text-[0.5rem] text-white rounded-xl',
  greenLarge:
    'inline-flex justify-center items-center px-5 py-2 bg-tag-green text-base text-white rounded-full',

  purpleSmall:
    'inline-flex justify-center items-center px-2 py-1 bg-tag-purple text-[0.5rem] text-white rounded-xl',
  purpleLarge:
    'inline-flex justify-center items-center px-5 py-2 bg-tag-purple text-base text-white rounded-full',
};

export default function Tags({ children, items }: TagProps) {
  return <div className={`${itemVariants[items]} mr-1`}>{children}</div>;
}

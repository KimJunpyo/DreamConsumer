interface TagProps {
  id?: string | number;
  children: string;
  items: keyof typeof itemVariants;
  onDelete?: (id: string | number) => void;
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

export default function Tags({ id, children, items, onDelete }: TagProps) {
  const deleteEvent = () => {
    if (id && onDelete) {
      onDelete(id);
    }
  };

  return (
    <div className={`${itemVariants[items]} mr-1 flex items-center`} onClick={deleteEvent}>
      {children}

      {onDelete && <span className='font-neb text-white ml-1 text-[0.5rem]'>x </span>}
    </div>
  );
}

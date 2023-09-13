import Image from 'next/image';
import Delete from '../../public/delete.svg';
import Plus from '../../public/plus.svg';
import Refresh from '../../public/refresh.svg';

interface ButtonProps {
  title: string;
  icon?: 'delete' | 'plus' | 'refresh';
  items: keyof typeof itemVariants;
}

const ICONS = {
  delete: Delete,
  plus: Plus,
  refresh: Refresh,
};

const itemVariants = {
  redSmall:
    'flex justify-center items-center w-32 h-9 bg-red-primary text-xs text-white rounded-xl',
  redMedium:
    'flex justify-center items-center w-36 h-11 bg-red-primary text-xl text-white rounded-xl',
  redLarge:
    'flex justify-center items-center w-80 h-14 bg-red-primary text-xl text-white rounded-xl',

  blueSmall:
    'flex justify-center items-center w-32 h-9 bg-blue-primary text-xs text-white rounded-xl',
  blueMedium:
    'flex justify-center items-center w-36 h-11 bg-blue-primary text-xl text-white rounded-xl',
  blueLarge:
    'flex justify-center items-center w-80 h-14 bg-blue-primary text-xl text-white rounded-xl',
};

export default function Button(props: ButtonProps) {
  const IconImage = props.icon ? ICONS[props.icon] : null;

  return (
    <div className={`${itemVariants[props.items]}`}>
      {IconImage && <Image src={IconImage} alt={props.icon || ''} className='mr-2' />}
      {props.title}
    </div>
  );
}

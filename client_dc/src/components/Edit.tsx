import EditImg from '@/components/EditImg';

interface EditProps {
  marginRight?: string;
  value: boolean;
  handler?: (e: React.MouseEvent) => void;
}

export default function Edit({ marginRight, value, handler }: EditProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (handler) {
      handler(e);
    }
  };

  return (
    <div
      className={`${
        value ? 'bg-grey-text text-white' : 'text-blue-primary'
      }  py-[2px] px-2 rounded-xl flex items-center justify-between font-neb text-xs  ${
        marginRight && marginRight
      }
      }`}
      onClick={handleClick}
    >
      <div className='flex items-center'>
        <EditImg value={value} />
        편집
      </div>
    </div>
  );
}

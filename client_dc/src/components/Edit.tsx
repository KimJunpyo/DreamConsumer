import EditImg from '@/components/EditImg';

interface EditProps {
  marginRight?: string;
  value: boolean;
}

export default function Edit({ marginRight, value }: EditProps) {
  return (
    <div
      className={`${
        value ? 'bg-grey-text text-white' : 'text-blue-primary'
      }  py-[2px] px-2 rounded-xl flex items-center justify-between font-neb text-xs  ${
        marginRight && marginRight
      }
      }`}
    >
      <button className='flex items-center'>
        <EditImg value={value} />
        편집
      </button>
    </div>
  );
}

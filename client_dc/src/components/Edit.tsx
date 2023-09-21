import { clickEdit } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';

import EditImg from '@/components/EditImg';

interface EditProps {
  marginRight?: string;
  handler?: (e: React.MouseEvent) => void;
}

export default function Edit({ marginRight, handler }: EditProps) {
  const [editClick, setEidtClick] = useRecoilState(clickEdit);
  const change = () => {
    setEidtClick(!editClick);
  };

  return (
    <div
      className={`${
        editClick ? 'bg-grey-text text-white' : 'text-blue-primary'
      }  py-[2px] px-2 rounded-xl flex items-center justify-between font-neb text-xs  ${
        marginRight && marginRight
      }
      }`}
      onClick={() => {
        change();
        handler;
      }}
    >
      <div className='flex items-center'>
        <EditImg />
        편집
      </div>
    </div>
  );
}

'use client';
import { mainEditState, dustbinEditState } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';

import { EditImg } from '.';

interface EditProps {
  margin?: string;
  path: 'main' | 'dustbin';
}

const MAPPED_ATOM = {
  main: mainEditState,
  dustbin: dustbinEditState,
};

export default function Edit({ margin, path }: EditProps) {
  const [editMode, setEditMode] = useRecoilState(MAPPED_ATOM[path]);

  return (
    <div
      className={`${
        editMode ? 'bg-grey-text text-white' : 'text-blue-primary'
      }  py-[2px] px-2 rounded-xl flex items-center justify-between font-neb text-xs  ${
        margin && margin
      }
      }`}
      onClick={() => setEditMode(!editMode)}
    >
      <button className='flex items-center'>
        <EditImg editMode={editMode} />
        편집
      </button>
    </div>
  );
}

'use client';
import { mainEditState, dustbinEditState } from '@/recoil/atoms';
import { mainCheckState, dustbinCheckState } from '@/recoil/atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { EditImg } from '.';

interface EditProps {
  margin?: string;
  path: 'main' | 'dustbin';
}

const MAPPED_EDITSTATE_ATOM = {
  main: mainEditState,
  dustbin: dustbinEditState,
};

const MAPPED_CHECKSTATE_ATOM = {
  main: mainCheckState,
  dustbin: dustbinCheckState,
};

export default function Edit({ margin, path }: EditProps) {
  const [editMode, setEditMode] = useRecoilState(MAPPED_EDITSTATE_ATOM[path]);
  const resetCheckState = useResetRecoilState(MAPPED_CHECKSTATE_ATOM[path]);

  const handleClick = () => {
    setEditMode(!editMode);
    if (!editMode) resetCheckState();
  };

  return (
    <div
      className={`${
        editMode ? 'bg-grey-text text-white' : 'text-blue-primary'
      } py-[2px] px-2 rounded-xl flex items-center justify-between font-neb text-xs h-fit ${
        margin && margin
      }
      `}
      onClick={handleClick}
    >
      <button className='flex items-center'>
        <EditImg editMode={editMode} />
        편집
      </button>
    </div>
  );
}

'use client';

import CheckCircleImg from './CheckCircleImg';
import { mainCheckState, dustbinCheckState } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';
import { usePathname } from 'next/navigation';

type Props = {
  itemId: number;
  color?: string;
  scale?: number;
};

type Pathname = 'main' | 'dustbin';

const MAPPED_ATOM = {
  main: mainCheckState,
  dustbin: dustbinCheckState,
};

export default function CheckCircle({ itemId, color = '#FF8585', scale = 0.8 }: Props) {
  const pathname = usePathname().substring(1) as Pathname;
  const [selectedList, setSelectedList] = useRecoilState(MAPPED_ATOM[pathname]);
  const checked = selectedList.includes(itemId);

  const handleClick = (id: number) => {
    if (!checked) setSelectedList((prev) => [...prev, id]);
    else setSelectedList((prev) => prev.filter((item) => item !== itemId));
  };

  return (
    <div onClick={() => handleClick(itemId)}>
      <CheckCircleImg color={checked ? color : '#D9D9D9'} scale={scale} path={checked} />
    </div>
  );
}

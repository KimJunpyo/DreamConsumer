// detail페이지에서 사용하는 BookMark의 상태의 props는 detailState로 내려주시면 false일때 white색상으로 변경됩니다.

'use client';

import LikeIcon from '@/components/likeIcon';

interface BookMarkProps {
  mainState?: boolean;
  detailState?: boolean;
}

export default function BookMark({ mainState, detailState }: BookMarkProps) {
  return (
    <div>
      <LikeIcon mainState={mainState} detailState={detailState} />
    </div>
  );
}

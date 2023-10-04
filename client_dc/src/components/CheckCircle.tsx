// color값을 입력하지 않으시면 기본값으로 회색(#D9D9D9)이 들어갑니다.
// color값을 입력 시에는 컬러 코드를 입력해 주시면 됩니다.(#FF8585)
// scale값을 입력하지 않으시면 기본값으로 '0.8'이 들어가고 입력 시에는 소수점 단위로 입력 해주시면 됩니다.

import CheckCircleImg from './CheckCircleImg';

interface CheckCircleProps {
  color?: string;
  scale?: number;
  check: boolean;
}

export default function CheckCircle({ color, scale, check }: CheckCircleProps) {
  return (
    <div>
      {check ? (
        <CheckCircleImg color={color} scale={scale} path={true} />
      ) : (
        <CheckCircleImg scale={scale} path={false} />
      )}
    </div>
  );
}

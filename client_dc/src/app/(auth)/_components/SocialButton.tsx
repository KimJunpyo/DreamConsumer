'use client';

import { kakao, google, naver } from '~/image';
import Image from 'next/image';

type Props = {
  site: string;
  handler: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const siteToSvg = {
  kakao: kakao,
  google: google,
  naver: naver,
};

export default function SocialButton({ site, handler }: Props) {
  return (
    <Image
      src={siteToSvg[site as keyof typeof siteToSvg]}
      alt={`${site} icon`}
      width={45}
      height={45}
      onClick={handler}
    />
  );
}

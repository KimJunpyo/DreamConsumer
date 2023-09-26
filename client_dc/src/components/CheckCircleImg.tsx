interface CheckCircleImgProps {
  color?: string;
  scale?: number;
  path: boolean;
}

export default function CheckCircleImg({ color, scale, path }: CheckCircleImgProps) {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: `scale(${scale ? scale : 0.8})` }}
    >
      <circle cx='15' cy='15' r='15' fill={color ? color : '#D9D9D9'} />
      <g clip-path='url(#clip0_99_1703)'>
        {path ? (
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M24.546 8.11107C24.8272 8.39236 24.9852 8.77382 24.9852 9.17157C24.9852 9.56931 24.8272 9.95077 24.546 10.2321L13.303 21.4751C13.1544 21.6237 12.978 21.7416 12.7839 21.822C12.5897 21.9024 12.3816 21.9438 12.1715 21.9438C11.9614 21.9438 11.7533 21.9024 11.5591 21.822C11.365 21.7416 11.1886 21.6237 11.04 21.4751L5.454 15.8901C5.31074 15.7517 5.19646 15.5862 5.11785 15.4032C5.03924 15.2202 4.99786 15.0233 4.99613 14.8242C4.9944 14.625 5.03235 14.4275 5.10777 14.2431C5.18319 14.0588 5.29457 13.8913 5.43541 13.7505C5.57625 13.6096 5.74373 13.4983 5.92807 13.4228C6.11242 13.3474 6.30994 13.3095 6.50911 13.3112C6.70827 13.3129 6.9051 13.3543 7.08811 13.4329C7.27112 13.5115 7.43663 13.6258 7.575 13.7691L12.171 18.3651L22.424 8.11107C22.5633 7.97168 22.7287 7.8611 22.9108 7.78566C23.0928 7.71022 23.2879 7.67139 23.485 7.67139C23.6821 7.67139 23.8772 7.71022 24.0593 7.78566C24.2413 7.8611 24.4067 7.97168 24.546 8.11107Z'
            fill='white'
          />
        ) : null}
      </g>
      <defs>
        <clipPath id='clip0_99_1703'>
          <rect width='24' height='24' fill='white' transform='translate(3 3)' />
        </clipPath>
      </defs>
    </svg>
  );
}
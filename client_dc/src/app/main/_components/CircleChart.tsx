interface CircleChartProps {
  percent: number;
}

export default function CircleChart({ percent }: CircleChartProps) {
  const strokeDashoffsetValue = ((100 - percent) / 100) * (2 * Math.PI * 42);

  return (
    <div className=' relative '>
      <svg className='w-full h-full transform -rotate-90' viewBox='0 0 100 100'>
        <defs>
          <linearGradient id='grad1' x1='100%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' style={{ stopColor: '#29D2E3', stopOpacity: 1 }} />

            <stop offset='100%' style={{ stopColor: '#2995DE', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id='grad2' x1='100%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' style={{ stopColor: '#FBC245', stopOpacity: 1 }} />

            <stop offset='100%' style={{ stopColor: '#D4313E', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle stroke='#E6E7E8' strokeWidth='3' fill='transparent' r='42' cx='50' cy='50' />
        <circle
          stroke={`url(#grad1)`}
          strokeWidth='3'
          strokeDasharray={`${2 * Math.PI * 42}`}
          strokeDashoffset={strokeDashoffsetValue}
          fill='transparent'
          r='42'
          cx='50'
          cy='50'
        />
      </svg>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-grey-text font-neb'>
        <p className='text-2xl m-0'>{`${percent}%`}</p>
        <p className='font-nr m-0'>달성</p>
      </div>
    </div>
  );
}

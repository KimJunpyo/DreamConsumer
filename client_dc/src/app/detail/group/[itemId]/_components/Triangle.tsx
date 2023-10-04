interface TriangleProps {
  clickMoney: boolean;
}

export default function Triangle({ clickMoney }: TriangleProps) {
  return (
    <svg width='11' height='14' viewBox='0 0 11 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.53688 0.978013C0.871153 0.55437 0 1.03258 0 1.82167V12.1783C0 12.9674 0.87115 13.4456 1.53688 13.022L9.67424 7.84366C10.2917 7.45071 10.2917 6.54929 9.67425 6.15634L1.53688 0.978013Z'
        fill={clickMoney ? '#ffffff' : '#8EB9FF'}
      />
    </svg>
  );
}

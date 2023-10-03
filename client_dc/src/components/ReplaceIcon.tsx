interface ReplaceProps {
  clickPlace: boolean;
}

export default function ReplaceIcon({ clickPlace }: ReplaceProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.243 17.9959H3V13.7539L14.435 2.31891C14.6225 2.13144 14.8768 2.02612 15.142 2.02612C15.4072 2.02612 15.6615 2.13144 15.849 2.31891L18.678 5.14691C18.8655 5.33444 18.9708 5.58875 18.9708 5.85391C18.9708 6.11907 18.8655 6.37338 18.678 6.56091L7.243 17.9959ZM3 19.9959H21V21.9959H3V19.9959Z'
        fill={clickPlace ? '#545f71' : 'white'}
      />
    </svg>
  );
}

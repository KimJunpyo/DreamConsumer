interface BookMarkIconProps {
  isLike?: boolean;
  color?: string;
}

export default function BookMarkIcon({ isLike, color }: BookMarkIconProps) {
  const fillColor = color ? color : isLike ? '#FFE500' : '#E7E7E7';

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.92 2.86795C11.03 2.67911 11.1877 2.52242 11.3772 2.41352C11.5667 2.30462 11.7814 2.24731 12 2.24731C12.2185 2.24731 12.4333 2.30462 12.6228 2.41352C12.8123 2.52242 12.9699 2.67911 13.08 2.86795L15.875 7.66595L21.303 8.84195C21.5165 8.88835 21.7141 8.9899 21.8761 9.13648C22.0382 9.28307 22.159 9.46956 22.2264 9.67737C22.2939 9.88519 22.3058 10.1071 22.2608 10.3209C22.2158 10.5347 22.1155 10.733 21.97 10.8959L18.27 15.0369L18.83 20.562C18.8521 20.7795 18.8167 20.9991 18.7274 21.1987C18.6381 21.3983 18.498 21.571 18.3211 21.6995C18.1442 21.828 17.9367 21.9079 17.7192 21.9312C17.5018 21.9544 17.2821 21.9202 17.082 21.832L12 19.5919L6.91799 21.832C6.7179 21.9202 6.49818 21.9544 6.28074 21.9312C6.0633 21.9079 5.85577 21.828 5.67886 21.6995C5.50195 21.571 5.36185 21.3983 5.27255 21.1987C5.18326 20.9991 5.14789 20.7795 5.16999 20.562L5.72999 15.0369L2.02999 10.8969C1.88421 10.734 1.78374 10.5356 1.7386 10.3217C1.69346 10.1077 1.70523 9.88568 1.77273 9.6777C1.84023 9.46973 1.96111 9.2831 2.12329 9.13645C2.28547 8.98979 2.48329 8.88825 2.69699 8.84195L8.12499 7.66595L10.92 2.86795Z'
        fill={fillColor}
      />
    </svg>
  );
}
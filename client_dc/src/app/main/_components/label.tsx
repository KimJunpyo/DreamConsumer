interface LabelProps {
  group?: string;
}

export default function Label({ group }: LabelProps) {
  return (
    <svg width='60' height='20' viewBox='0 0 60 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M54.1824 1.2C53.6775 0.471429 52.836 0 51.8962 0L2.8052 0.014286C1.26234 0.014286 0 1.28571 0 2.85714V17.1429C0 18.7143 1.26234 19.9857 2.8052 19.9857L51.8962 20C52.836 20 53.6775 19.5286 54.1824 18.8L59.7367 10.8286C59.9079 10.5875 60 10.2975 60 10C60 9.70248 59.9079 9.41254 59.7367 9.17143L54.1824 1.2Z'
        fill={group === 'member' ? '#85B6FF' : '#FFAA85'}
      />
    </svg>
  );
}

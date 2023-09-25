import { useEffect } from 'react';

const useAutoLiftUp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
};

export default useAutoLiftUp;

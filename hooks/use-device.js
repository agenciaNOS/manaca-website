import { useState, useEffect } from 'react'

export default function useDevice() {
  const [device, setDevice] = useState('desktop');

  const maxWidthForMobile = 768;
  const maxWidthForTablet = 1024;

  function handleWindowSizeChange() {
    if (maxWidthForMobile >= window.innerWidth) {
      setDevice('mobile');
    } else if (maxWidthForTablet >= window.innerWidth) {
      setDevice('tablet');
    } else {
      setDevice('desktop');
    }
  }

  useEffect(() => {
    handleWindowSizeChange();

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return device;
}

import React, { useState, useEffect } from 'react'

export default function useDevice() {
  const [device, setDevice] = useState('desktop');

  const maxWidthForMobile = 768;

  function handleWindowSizeChange() {
    if (maxWidthForMobile >= window.innerWidth) {
      setDevice('mobile');

      return;
    }

    setDevice('desktop');
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

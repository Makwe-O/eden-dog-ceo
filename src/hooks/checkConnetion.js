import { useState, useEffect } from 'react';

const useDataFetching = () => {
  const [isDisconnected, setIsDisconnected] = useState(false);
  useEffect(() => {
    const condition = window?.navigator?.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      const ping = setInterval(() => {
        fetch('//google.com', {
          mode: 'no-cors',
        })
          .then(() => {
            setIsDisconnected(false);
            clearInterval(ping);
          })
          .catch(() => {
            setIsDisconnected(true);
          });
      }, 2000);
      return;
    }

    return setIsDisconnected(true);
  }, []);

  return { isDisconnected };
};

export default useDataFetching;

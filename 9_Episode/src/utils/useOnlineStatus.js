import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      console.log('online');
      setOnlineStatus(true);
    };

    const handleOffline = () => {
      console.log('offline');
      setOnlineStatus(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;

import { useEffect } from 'react';

const useWarnOnUnload = () => {
  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      const message =
        'You have unsaved changes, are you sure you want to leave?';
      e.preventDefault();
      return message;
    };

    window.addEventListener('beforeunload', handleWindowClose);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, []);
};

export default useWarnOnUnload;

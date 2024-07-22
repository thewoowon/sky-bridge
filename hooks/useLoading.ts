import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useLoading = (): boolean => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = async (
      href: string,
      options?: { shallow?: boolean; locale?: string; scroll?: boolean },
    ): Promise<void> => {
      handleStart();
      await originalPush(href, options);
      handleComplete();
    };

    router.replace = async (
      href: string,
      options?: { shallow?: boolean; locale?: string; scroll?: boolean },
    ): Promise<void> => {
      handleStart();
      await originalReplace(href, options);
      handleComplete();
    };
  }, [router]);

  return loading;
};

export default useLoading;

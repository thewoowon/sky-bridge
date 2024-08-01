import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SplashStore = {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

const useSplashStore = create(
  persist<SplashStore>(
    (set) => ({
      isVisible: true,
      setIsVisible: (value: boolean) => set({ isVisible: value }),
    }),
    {
      name: 'splash', // 스토리지에 저장될 키 이름
      getStorage: () => sessionStorage, // 기본값은 localStorage이지만 sessionStorage를 사용할 수 있습니다
    },
  ),
);

export default useSplashStore;

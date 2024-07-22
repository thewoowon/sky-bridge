import { create } from 'zustand';

type BackgroundColorStore = {
  backgroundColor: string;
  changeBackgroundColor: (color: string) => void;
};

const useBackgroundColorStore = create<BackgroundColorStore>((set) => ({
  backgroundColor: 'white',
  changeBackgroundColor: (color) => set({ backgroundColor: color }),
}));

export default useBackgroundColorStore;

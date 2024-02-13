import { create } from "zustand";

const useHeaderStore = create((set) => ({
  colorChange: false,
  logoChange: false,
  isHome: false,
  isResume: false,
  setColorChange: (value) => set({ colorChange: value }),
  setLogoChange: (value) => set({ logoChange: value }),
  setisHome: (value) => set({ isHome: value }),
  setisResume: (value) => set({ isResume: value }),
}));

export default useHeaderStore;

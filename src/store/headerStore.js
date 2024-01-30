import { create } from "zustand";

const useHeaderStore = create((set) => ({
  colorChange: false,
  logoChange: false,
  isHome: false,
  setColorChange: (value) => set({ colorChange: value }),
  setLogoChange: (value) => set({ logoChange: value }),
  setisHome: (value) => set({ isHome: value }),
}));

export default useHeaderStore;

import { create } from "zustand";

type NavbarState = {
  title: string;
  showBackButton: boolean;
  setNavbar: (config: Partial<NavbarState>) => void;
};

export const useNavbarStore = create<NavbarState>((set) => ({
  title: "Hello World!",
  showBackButton: false,
  setNavbar: (config) => set((state) => ({ ...state, ...config })),
}));

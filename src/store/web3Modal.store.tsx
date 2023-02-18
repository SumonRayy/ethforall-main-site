import create from "zustand";

interface IWeb3ModalState {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const useWeb3ModalStore = create<IWeb3ModalState>((set) => ({
  isOpen: false,
  toggleDrawer: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));

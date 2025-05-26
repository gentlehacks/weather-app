import { create } from "zustand";

interface AppState {
  appTheme: boolean;
  setAppTheme: () => void;
}

export const appState = create<AppState>((set) => ({
  appTheme: true,
  setAppTheme: () => set((state) => ({
    appTheme: !state.appTheme
  }))
}))
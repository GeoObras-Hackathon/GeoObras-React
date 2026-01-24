import { create } from "zustand";

interface ThemeStore {
    theme: string,
    setTheme: (value: string) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
   theme: 'light',
   setTheme: (value) => set({theme: value})
}))
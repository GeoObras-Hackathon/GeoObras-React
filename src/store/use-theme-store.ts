import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: string,
  setTheme: (value: string) => void
}

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const stored = localStorage.getItem('geoobras-theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}


export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      setTheme: (value) => set({ theme: value })
   }),
    {
      name: 'geoobras-theme',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
)
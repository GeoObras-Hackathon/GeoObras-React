import { create } from 'zustand'
import type { ObrasDataType } from '../types/obras-data-type'
const API_BASE = import.meta.env.VITE_API_BASE

type ObrasState = {
  obras: ObrasDataType[] | null
  loading: boolean
  error: boolean
  fetchObras: () => Promise<void>
}

export const useObrasStore = create<ObrasState>((set, get) => ({
  obras: null,
  loading: false,
  error: false,

  fetchObras: async () => {
    if (get().obras) return

    set({ loading: true, error: false })

    try {
      const response = await fetch(`${API_BASE}`)
      
      if (!response.ok) throw new Error
      
      const data: ObrasDataType[] = await response.json()
      set({ obras: data, loading: false })

    } catch (err: unknown) {
      set({ loading: false, error: true })
    }
  }
}))
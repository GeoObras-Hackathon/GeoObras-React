import type { Map } from "leaflet"
import { create } from "zustand"
import type { obrasDataType } from "../types/obras-data-type"

type MapStore = {
  map: Map | null
  obra: obrasDataType | null
  setMap: (map: Map) => void
  setObra: (obra: obrasDataType) => void
  resetObra: () => void
}

export const useMapStore = create<MapStore>((set, get) => ({
  map: null,
  obra: null,
  setMap: (map) => set({ map }),
  setObra: (novaObra) => {
    const map = get().map
    if (!map) return

    map.flyTo([novaObra.geolocalizacao.latitude, novaObra.geolocalizacao.longitude], 18, {
      duration: 1.2,
    })

    set({ obra: novaObra })
  },
  resetObra: () => {
    const map = get().map
    if (!map) return

    map.flyTo([-22.0, -44.45], 8, {
      duration: 1.2,
    })

    set({ obra: null })
  }
}))
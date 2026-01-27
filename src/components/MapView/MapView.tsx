import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { useThemeStore } from '../../store/use-theme-store'
import obrasDataJSON from '../../data/obras-rj.json'
import type { obrasDataType } from '../../types/obras-data-type'
import { useMapStore } from '../../store/use-map-store'
import { useEffect } from 'react'
import { normalizarSituacao } from '../../utils/normalizar-string'
import { DivIcon } from 'leaflet'

const obrasData: obrasDataType[] = obrasDataJSON
function createSituacaoMarker (situacao: string) {
  const situacaoClass = normalizarSituacao(situacao)

  return new DivIcon({
    className: `marker-situacao ${situacaoClass}`,
    html: `<span class="marker-dot"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  })
}

function MapRegister () {
  const map = useMap()
  const { setMap } = useMapStore()

  useEffect(() => {
    setMap(map)
  }, [map, setMap])

  return null
}

function Markers () {
  const { setObra } = useMapStore()

  return (
    <>
      {obrasData.map((obra, index) => (
        <Marker
          key={index}
          position={[obra.geolocalizacao.latitude, obra.geolocalizacao.longitude]}
          icon={createSituacaoMarker(obra.identificacao.situacao)}
          eventHandlers={{
            click: () => setObra(obra)
          }}
        />
      ))}
    </>
  )
}

function MapView () {
  const { theme } = useThemeStore()

  return (
    <MapContainer
      center={[-22.0, -44.45]}
      zoom={8}
      scrollWheelZoom
      style={{ height: '100%', width: '100%', zIndex: 1, position: 'fixed' }}
    >
      <TileLayer
        url={
          theme === 'light'
            ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            : 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=7b793037-9ccb-4ca8-8088-667624148395'
        }
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
      />
      <Markers />
      <MapRegister />
    </MapContainer>
  )
}

export default MapView

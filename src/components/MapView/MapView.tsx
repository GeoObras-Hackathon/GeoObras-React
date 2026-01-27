import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { useThemeStore } from '../../store/use-theme-store'
import obrasDataJSON from '../../data/obras-rj.json'
import type { obrasDataType } from '../../types/obras-data-type'
import { Icon } from 'leaflet'
import { useMapStore } from '../../store/use-map-store'
import { useEffect } from 'react'

const obrasData: obrasDataType[] = obrasDataJSON
const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

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
          icon={markerIcon}
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

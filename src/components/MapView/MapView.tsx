import { MapContainer, Marker, TileLayer, useMap, GeoJSON as DivGeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { useThemeStore } from '../../store/use-theme-store'
import { useMapStore } from '../../store/use-map-store'
import { useEffect } from 'react'
import { normalizarClassificacao } from '../../utils/normalizar-string'
import L, { DivIcon } from 'leaflet'
import rjGeoJSON from '../../data/geojs-33-mun.json'
import { useObrasStore } from '../../store/use-obras-store'

function MapRegister () {
  const map = useMap()
  const { setMap } = useMapStore()

  useEffect(() => {
    setMap(map)
  }, [map, setMap])

  return null
}

function CustomIcon (classificacao: string) {
  const classificacaoClass = normalizarClassificacao(classificacao)

  return new DivIcon({
    className: `marker-classificacao ${classificacaoClass}`,
    html: `<span class="marker-dot"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  })
}

function Markers () {
  const { obras } = useObrasStore()
  const { setObra } = useMapStore()
  
  if (!obras) return null

  return (
    <>
      {obras.map((obra, index) => (
        <Marker
          key={index}
          position={[
            obra.geolocalizacao.latitude,
            obra.geolocalizacao.longitude
          ]}
          icon={CustomIcon(obra.indices.classificacao)}
          eventHandlers={{
            click: () => setObra(obra)
          }}
        />
      ))}
    </>
  )
}

function MunicipiosRJLayer () {
  const map = useMap()

  return (
    <DivGeoJSON
      data={rjGeoJSON as GeoJSON.GeoJsonObject}
      style={{
        weight: 1,
        color: '#64748b',
        fillOpacity: 0.08
      }}
      onEachFeature={(_, layer) => {
        layer.on('click', () => {
          if (!(layer instanceof L.Polygon)) return

          const bounds = layer.getBounds()
          if (!bounds.isValid()) return

          map.flyToBounds(bounds, {
            maxZoom: 12,
            duration: 0.8
          })
        })
      }}
    />
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
      <MunicipiosRJLayer />

      <Markers />
      <MapRegister />
    </MapContainer>
  )
}

export default MapView

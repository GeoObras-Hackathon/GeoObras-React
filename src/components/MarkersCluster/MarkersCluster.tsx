import MarkerClusterGroup from 'react-leaflet-cluster'
import { Marker } from 'react-leaflet'
import { useObrasStore } from '../../store/use-obras-store'
import { useMapStore } from '../../store/use-map-store'
import { DivIcon } from 'leaflet'
import { normalizarClassificacao } from '../../utils/normalizar-string'
import L from 'leaflet'

const createClusterCustomIcon = (cluster: any) => {
  const count = cluster.getChildCount()

  return L.divIcon({
    html: `
      <div class="cluster-marker">
        <span>${count}</span>
      </div>
    `,
    className: 'cluster-wrapper',
    iconSize: L.point(40, 40, true)
  })
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

export default function MarkersCluster () {
  const { obras } = useObrasStore()
  const { setObra } = useMapStore()

  if (!obras) return null

  return (
    <MarkerClusterGroup
      chunkedLoading
      disableClusteringAtZoom={13}
      maxClusterRadius={40}
      spiderfyOnMaxZoom={true} 
      zoomToBoundsOnClick={false}
      iconCreateFunction={createClusterCustomIcon}
      eventHandlers={{
        clusterclick: (event: { target: { _map: any }; layer: any }) => {
          const map = event.target._map
          const cluster = event.layer

          if (map.getZoom() < map.getMaxZoom()) {
            map.flyToBounds(cluster.getBounds(), {
              padding: [40, 40],
              duration: 0.6
            })
          }
          
          else {
            cluster.spiderfy()
          }
        }
      }}
    >
      {obras.map((obra, index) => {
        const { latitude, longitude } = obra.geolocalizacao
        if (latitude == null || longitude == null) return null

        return (
          <Marker
            key={index}
            position={[latitude, longitude]}
            icon={CustomIcon(obra.indices.classificacao)}
            eventHandlers={{
              click: () => setObra(obra)
            }}
          />
        )
      })}
    </MarkerClusterGroup>
  )
}

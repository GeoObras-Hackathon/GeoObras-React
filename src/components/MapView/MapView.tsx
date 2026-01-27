import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { useThemeStore } from '../../store/use-theme-store';

function MapView () {
  const { theme } = useThemeStore()

  return (
    <MapContainer center={[-22.0, -44.45]} zoom={8} scrollWheelZoom style={{height: '100%', width: '100%', zIndex: 1, position: 'fixed'}}>
      <TileLayer
        url={
          theme === 'light' ?
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' :
          'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=7b793037-9ccb-4ca8-8088-667624148395'
        }
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
      ></TileLayer>
    </MapContainer>
  )
}

export default MapView

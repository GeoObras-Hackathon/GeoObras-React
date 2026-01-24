import Header from "./components/Header/Header"
import MapView from "./components/MapView/MapView"
import { useThemeStore } from "./store/use-theme-store"

function App() {
  const { theme } = useThemeStore()

  return (
    <div className={`h-lvh w-lvw relative flex justify-center ${theme}`}>
      <Header/>
      <MapView/>
    </div>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import MapView from "./components/MapView/MapView"
import { useThemeStore } from "./store/use-theme-store"

function App() {
  const { theme } = useThemeStore()

  return (
    <div className={`h-lvh w-lvw relative flex justify-center ${theme}`}>
      <div className="size-full absolute z-10 pointer-events-none max-w-300 p-8 flex items-center flex-col gap-4">
        <Header/>
        <Outlet/>
      </div>
      <MapView/>
    </div>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import MapView from "./components/MapView/MapView"
import { useThemeStore } from "./store/use-theme-store"

function App() {
  const { theme } = useThemeStore()

  return (
    <div className={`h-lvh w-lvw relative flex justify-center ${theme}`}>
      <div className="h-full md:h-[calc(100%-5rem)] w-full flex flex-col justify-between items-center gap-4 absolute z-10 pointer-events-none max-w-300 p-8">
        <Header/>
        <Outlet/>
      </div>
      <MapView/>
    </div>
  )
}

export default App

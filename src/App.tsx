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
        <div>
          <button
            className="absolute bottom-8 right-0 size-10 bg-bg-color text-text-color rounded-full p-2 pointer-events-auto"
            onClick={()=> alert('ddd')}
          >?</button>
        </div>
      </div>
      <MapView/>
    </div>
  )
}

export default App

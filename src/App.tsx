import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import MapView from './components/MapView/MapView'
import { useThemeStore } from './store/use-theme-store'
import { IoMdHelp } from 'react-icons/io'
import { useMapStore } from './store/use-map-store'
import { AiFillHome } from 'react-icons/ai'

function App () {
  const { theme } = useThemeStore()
  const { obra, resetObra } = useMapStore()

  return (
    <div className={`h-lvh w-lvw relative flex ${theme}`}>
      <div className='h-full bg-bg-color flex flex-col p-3 justify-end gap-4 z-10 pointer-events-none **:pointer-events-auto font'>
        <button
          onClick={() => {
            resetObra()
          }}
          className={
            `button-opt bg-bg-fade-color shadow rounded-full size-8 flex justify-center items-center ${obra ? 'block' : 'hidden'}`
          }
        >
          <AiFillHome />
        </button>
        <button className='button-opt bg-bg-fade-color shadow rounded-full size-8 flex justify-center items-center'>
          <IoMdHelp />
        </button>
      </div>
      <div className='h-full md:h-[calc(100%-5rem)] w-full flex flex-col justify-between gap-4 absolute z-10 pointer-events-none p-8 pl-20'>
        <Header />
        <Outlet />
      </div>
      <MapView />
    </div>
  )
}

export default App

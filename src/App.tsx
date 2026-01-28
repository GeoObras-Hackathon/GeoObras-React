import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import MapView from './components/MapView/MapView'
import { useThemeStore } from './store/use-theme-store'
import { IoMdArrowRoundBack, IoMdHelp } from 'react-icons/io'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MdZoomInMap, MdZoomOutMap } from 'react-icons/md'
import { useMapStore } from './store/use-map-store'

function App () {
  const { theme } = useThemeStore()
  const { obra, resetObra } = useMapStore()
  const [clean, setClean] = useState(false)

  return (
    <div className={`h-lvh w-lvw relative flex ${theme}`}>
      <div className='h-full  flex flex-col pb-3 pl-3 justify-end gap-4 z-10 pointer-events-none **:pointer-events-auto'>
        <button
          onClick={() => {
            setClean(clean ? false : true)
          }}
          className='button-opt bg-bg-fade-color shadow rounded-full size-10 flex justify-center items-center relative text-lg'
        >
          <MdZoomOutMap
            className={`absolute ${
              clean ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
          <MdZoomInMap
            className={`absolute ${
              !clean ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
        </button>
        <button className='button-opt bg-bg-fade-color shadow rounded-full size-10 flex justify-center items-center'>
          <IoMdHelp />
        </button>
      </div>
      <AnimatePresence>
        {!clean && (
          <motion.div
            key='ui-layer'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='h-full md:h-[calc(100%-5rem)] w-full flex flex-col gap-4 absolute z-10 pointer-events-none p-8 pl-20'
          >
            <Header />
            {obra && (
              <button
                onClick={() => {
                  resetObra()
                }}
                className='button-opt bg-bg-color shadow rounded-full size-10 flex justify-center items-center pointer-events-auto shrink-0'
              >
                <IoMdArrowRoundBack />
              </button>
            )}
            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
      <MapView />
    </div>
  )
}

export default App

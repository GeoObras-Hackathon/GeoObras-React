import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import MapView from './components/MapView/MapView'
import { AnimatePresence, motion } from 'motion/react'
import { useThemeStore } from './store/use-theme-store'
import { useMapStore } from './store/use-map-store'
import { useObrasStore } from './store/use-obras-store'
import { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { MdZoomInMap, MdZoomOutMap } from 'react-icons/md'
import { FaInfo } from 'react-icons/fa6'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import profilePic1 from './assets/images/FelipeFerrete.jpeg'
import profilePic2 from './assets/images/GustavoBosak.jpeg'
import { GrClose } from 'react-icons/gr'
import Logo from './assets/images/logo.png'
import ErrorImage from './assets/images/error-image.png'

function App () {
  const { theme } = useThemeStore()
  const { obra, resetObra } = useMapStore()
  const { fetchObras, loading, error } = useObrasStore()
  const [clean, setClean] = useState(false)
  const [openInfo, setOpenInfo] = useState(false)

  useEffect(() => {
    fetchObras()
  }, [fetchObras])

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key='loading-screen'
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='message-screen'
        >
          <div className='flex gap-2 items-center'>
            <img src={Logo} alt='Logo GeoObras' className='h-20' />
            <p className='text-5xl font-black'>Geo Obras</p>
          </div>
          <p className='text-center text-lg my-2'>Iniciando o programa...</p>
        </motion.div>
      ) : error ? (
        <motion.div
          key='error-screen'
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='message-screen'
        >
          <img
            src={ErrorImage}
            alt='Imagem para indicar Página Não Econtrada'
            className='h-40 brightness-75 dark:brightness-100'
          />
          <div className='flex flex-col gap-4 max-w-90 text-center pb-20'>
            <h1 className='text-4xl font-bold'>
              Não foi possível acessar servidor
            </h1>
            <p>
              Parece que estamos com problemas em iniciar o programa, tente
              novamente mais tarde.
            </p>
          </div>
        </motion.div>
      ) : (
        <div className='h-lvh w-lvw relative flex'>
          <div className='h-full flex flex-col pb-3 pl-3 justify-end gap-4 z-10 pointer-events-none **:pointer-events-auto'>
            <button
              onClick={() => {
                setClean(clean ? false : true)
                setOpenInfo(false)
              }}
              className='button-opt bg-bg-fade-color side-button relative text-lg'
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
            <button
              onClick={() => {
                setOpenInfo(openInfo ? false : true)
                setClean(openInfo ? false : true)
              }}
              className='button-opt bg-bg-fade-color side-button'
            >
              <FaInfo
                className={`absolute ${
                  !openInfo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
              <GrClose
                className={`absolute ${
                  openInfo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
            </button>
          </div>
          <AnimatePresence>
            {!clean && !openInfo ? (
              <motion.div
                key='ui-layer'
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className='relative flex flex-col flex-1 p-8 min-h-0 gap-4 z-10 pointer-events-none'
              >
                <Header />
                <button
                  onClick={() => {
                    resetObra()
                  }}
                  className={`button-opt bg-bg-color side-button pointer-events-auto shrink-0 ${
                    obra ? 'visible' : 'invisible pointer-events-none'
                  }`}
                >
                  <IoMdArrowRoundBack />
                </button>
                <Outlet />
              </motion.div>
            ) : openInfo ? (
              <motion.div
                key='info-popup'
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className='flex flex-col gap-6 fixed z-10 left-20 bottom-8 p-6 w-full max-w-90 bg-bg-color text-text-color rounded-2xl'
              >
                <div>
                  <h2 className='text-xl font-bold mb-2'>Sobre a Geo Obras</h2>
                  <p>
                    A Geo Obras é uma plataforma que exibe, processa e organiza
                    os dados de obras no estado do Rio de Janeiro, com objetivo
                    de tornar a análise acerca delas mais assertiva.
                    <p className='mt-2'>
                      O projeto é parte de um Hackaton promovido pela{' '}
                      <a
                        href='https://www.duopen.com.br/'
                        target='_blank'
                        className='font-semibold text-blue-800'
                      >
                        Duopen
                      </a>
                      .
                    </p>
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold mb-2'>Quem somos</h3>
                  <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-4'>
                      <img
                        src={profilePic1}
                        alt='Foto de desenvolvedor Felipe Ferrete'
                        className='w-20 rounded-full'
                      />
                      <div>
                        <p className='text-lg font-medium'>Felipe Ferrete</p>
                        <div>
                          <a
                            href='https://github.com/felipeferrete'
                            target='_blank'
                            className='flex gap-2 items-center my-2'
                          >
                            <BsGithub />
                            <p className='text-xs'>/felipeferrete</p>
                          </a>
                          <a
                            href='https://linkedin.com/in/felipe-ferrete'
                            target='_blank'
                            className='flex gap-2 items-center'
                          >
                            <BsLinkedin />
                            <p className='text-xs'>/in/felipe-ferrete</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <img
                        src={profilePic2}
                        alt='Foto de desenvolvedor Gustavo Bosak'
                        className='w-20 rounded-full'
                      />
                      <div>
                        <p className='text-lg font-medium'>Gustavo Bosak</p>
                        <div>
                          <a
                            href='https://github.com/gustavo-bosak'
                            target='_blank'
                            className='flex gap-2 items-center my-2'
                          >
                            <BsGithub />
                            <p className='text-xs'>/gustavo-bosak</p>
                          </a>
                          <a
                            href='https://linkedin.com/in/gustavo-bosak-santos'
                            target='_blank'
                            className='flex gap-2 items-center'
                          >
                            <BsLinkedin />
                            <p className='text-xs'>/in/gustavo-bosak-santos</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='text-xs text-center opacity-50'>
                  &copy; GeoObras 2026. Direitos reservados.
                </p>
              </motion.div>
            ) : (
              ''
            )}
          </AnimatePresence>
          <MapView />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App

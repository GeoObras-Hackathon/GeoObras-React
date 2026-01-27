import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'
import obrasDataJSON from '../../data/obras-rj.json'
import type { obrasDataType } from '../../types/obras-data-type'
import { useMapStore } from '../../store/use-map-store'
import { normalizarNome, normalizarSituacao } from '../../utils/normalizar-string'

function Home () {
  const { obra, setObra, resetObra } = useMapStore()
  const [ampliado, setAmpliado] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)
  const obrasData: obrasDataType[] = obrasDataJSON

  let lastScrollTop = 0

  const handleScroll = () => {
    const el = navRef.current
    if (!el) return

    const currentScroll = el.scrollTop

    if (currentScroll > lastScrollTop && currentScroll > 10) {
      setAmpliado(true)
    }

    if (currentScroll < lastScrollTop && currentScroll <= 0) {
      setAmpliado(false)
    }

    lastScrollTop = currentScroll
  }

  return (
    <main
      className={`card-container transition-[height] duration-300 ease-in-out ${
        ampliado ? 'h-3/4' : 'h-1/2'
      } md:min-h-full`}
    >
      <AnimatePresence mode='wait'>
        {obra != null ? (
          <motion.div
            key='infopage'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col lg:flex-row lg:items-center justify-between gap-8 h-full w-fit lg:w-full overflow-y-auto no-scrollbar pointer-events-none **:pointer-events-auto rounded-2xl'
          >
            <div className='card flex flex-col h-fit md:max-h-full'>
              <p>{obra.idUnico}</p>
              <p>{obra.identificacao.nome}</p>
              <p>{obra.identificacao.situacao}</p>
              <p>{obra.identificacao.municipio}</p>
              <p>{obra.financeiro.valor_total_contratado}</p>
              <p>{obra.cronograma.percentual_fisico}</p>
              <p>{obra.indices.eficiencia_cronograma}</p>
              <p>{obra.indices.classificacao}</p>
              <p>{obra.geolocalizacao.latitude}</p>
              <p>{obra.geolocalizacao.longitude}</p>
              <p>{obra.cronograma.data_inicio}</p>
              <p>{obra.cronograma.data_fim_prevista}</p>
              <button
                className='button-opt p-4 bg-amber-300'
                onClick={() => {
                  resetObra()
                }}
              >
                home
              </button>
            </div>
            <div className='card flex flex-col h-fit md:max-h-full'>fff</div>
          </motion.div>
        ) : (
          <motion.div
            key='homepage'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='card flex-1 flex flex-col'
          >
            <div className='flex flex-col gap-2 my-4'>
              <h1 className='text-2xl font-bold'>Página Inicial</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur; adipisicing elit. Fuga;
                soluta.
              </p>
            </div>
            <nav
              ref={navRef}
              onScroll={handleScroll}
              className='flex-1 overflow-y-auto no-scrollbar p-4 pr-6 bg-bg-fade-color'
            >
              <ul className='flex flex-col gap-4'>
                {obrasData.map((local, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setObra(local)
                      }}
                      className='flex flex-col gap-2 w-full px-4 py-2 shadow rounded-lg button-opt bg-bg-color'
                    >
                      <ul className='flex w-full overflow no-scrollbar-x-hidden gap-2'>
                        <li
                          className={`card-flag bg-bg-situacao ${normalizarSituacao(
                            local.identificacao.situacao
                          )}`}
                        >
                          {local.identificacao.situacao}
                        </li>
                        <li
                          className={`card-flag ${
                            local.indices.risco_gestao == 'Normal' ? 'bg-blue-300' : 'bg-red-400'
                          }
                        `}>
                          {local.indices.risco_gestao}
                        </li>
                      </ul>
                      <p className='text-left truncate'>{normalizarNome(local.identificacao.nome)}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Home

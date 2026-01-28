import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'
import obrasDataJSON from '../../data/obras-rj.json'
import type { obrasDataType } from '../../types/obras-data-type'
import { useMapStore } from '../../store/use-map-store'
import {
  normalizarNome,
  normalizarClassificacao
} from '../../utils/normalizar-string'
import { CgLoadbarSound } from 'react-icons/cg'

function Home () {
  const { obra, setObra } = useMapStore()
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='flex flex-col lg:flex-row lg:items-center justify-between gap-8 h-full w-fit lg:w-full overflow-y-auto no-scrollbar pointer-events-none **:pointer-events-auto rounded-2xl relative'
          >
            <div className='card flex flex-col h-fit md:max-h-full md:overflow-y-auto no-scrollbar'>
              <h2 className='text-2xl font-bold'>
                {normalizarNome(obra.identificacao.nome)}
              </h2>
              <p>Situação da obra: {obra.identificacao.situacao}</p>
              <p>Endereço: {obra.identificacao.municipio_endereco}</p>

              <p>Inicio da obra: {obra.cronograma.data_inicio}</p>
              <p>Conclusão prevista: {obra.cronograma.data_fim_prevista}</p>
              <p>Conclusão real: {obra.cronograma.data_fim_real}</p>
              <p>Percentual de construção: {obra.cronograma.percentual_fisico}</p>

              <p>Empregos gerados: {obra.social.empregos_gerados}</p>
              <p>População beneficiada: {obra.social.populacao_beneficiada}</p>
            </div>
            <div className='card flex flex-col h-fit md:max-h-full'>
              <p>Valor total contratado: {obra.financeiro.valor_total_contratado}</p>
              <p>Valor pago acumulado: {obra.financeiro.valor_pago_acumulado}</p>
              <p>Valor previsto original: {obra.financeiro.valor_previsto_original}</p>
              <p>Percentual de desembolso: {obra.financeiro.percentual_desembolso}</p>
              <p>Gap financeiro de construção: {obra.financeiro.gap_financeiro_fisico}</p>
              <p>Situação de contrato: {obra.financeiro.tem_contrato}</p>

              <p>Indice de eficiência: {obra.indices.eficiencia_cronograma}</p>
              <p>Classificação: {obra.indices.classificacao}</p>
              <p>Risco de gestão: {obra.indices.risco_gestao}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key='homepage'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
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
                          className={`card-flag bg-bg-classificacao flex items-center text-white ${normalizarClassificacao(
                            local.indices.classificacao
                          )}`}
                        >
                          <CgLoadbarSound className='text-lg'/>
                          {local.indices.classificacao}
                        </li>
                        <li className='card-flag'>
                          {local.identificacao.situacao}
                        </li>
                      </ul>
                      <p className='text-left truncate'>
                        {normalizarNome(local.identificacao.nome)}
                      </p>
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

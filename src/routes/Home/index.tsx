import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import obrasDataJSON from '../../data/obras-rj.json'
import type { ObrasDataType } from '../../types/obras-data-type'
import { useMapStore } from '../../store/use-map-store'
import {
  normalizarNome,
  normalizarClassificacao,
  normalizarData,
  normalizarValor
} from '../../utils/normalizar-string'
import { CgLoadbarSound } from 'react-icons/cg'
import { PiMapPinFill } from 'react-icons/pi'
import { TbContract } from 'react-icons/tb'

function Home () {
  const { obra, setObra } = useMapStore()
  const obrasData: ObrasDataType[] = obrasDataJSON
  const [expanded, setExpanded] = useState(false)

  function onNavScroll (e: React.UIEvent<HTMLElement>) {
    const el = e.currentTarget
    setExpanded(el.scrollTop > 0)
  }

  return (
    <main className='flex items-end flex-1 min-h-0'>
      <AnimatePresence mode='wait'>
        {obra != null ? (
          <motion.div
            key='infopage'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='card-container no-scrollbar lg:justify-between lg:items-center'
          >
            <div className='card no-scrollbar min-h-fit md:h-fit md:max-h-full lg:min-h-0 gap-6'>
              <div>
                <h2 className='text-2xl font-bold'>
                  {normalizarNome(obra.identificacao.nome)}
                </h2>
                <p className='text-xs mt-2'>
                  Situação da obra: {obra.identificacao.situacao}
                </p>
              </div>

              <div className='flex gap-2 p-2 rounded bg-bg-fade-color'>
                <PiMapPinFill className='mt-1' />
                <p>{normalizarNome(obra.identificacao.municipio_endereco)}</p>
              </div>

              <div className='flex justify-between items-center text-center'>
                <div>
                  <p className='text-xs'>Inicio da obra</p>
                  <p>{normalizarData(obra.cronograma.data_inicio)}</p>
                </div>
                <div>
                  <p className='text-xs'>Conclusão prevista</p>
                  <p>{normalizarData(obra.cronograma.data_fim_prevista)}</p>
                </div>
                <div>
                  <p className='text-xs'>Conclusão real</p>
                  <p>{normalizarData(obra.cronograma.data_fim_real)}</p>
                </div>
              </div>

              <div>
                <div className='flex justify-between'>
                  <p>Percentual de construção:</p>
                  <p>{obra.cronograma.percentual_fisico}%</p>
                </div>
                <div className='w-full mt-2 h-2 rounded-full bg-gray-300 overflow-hidden'>
                  <div
                    className={`h-full bg-linear-90 from-blue-300 via-blue-400 to-blue-500 w-[${`${obra.cronograma.percentual_fisico}%`}]`}
                  ></div>
                </div>
              </div>

              <div>
                <div className='flex justify-between'>
                  <p>Empregos gerados:</p>
                  <p>{obra.social.empregos_gerados}</p>
                </div>
                <div className='flex justify-between'>
                  <p>População beneficiada:</p>
                  <p>{obra.social.populacao_beneficiada}</p>
                </div>
              </div>
            </div>

            <div className='card no-scrollbar min-h-fit md:h-fit md:max-h-full lg:min-h-0 gap-6'>
              <div className='flex gap-2 justify-center bg-blue-300 dark:bg-blue-500 p-2 rounded'>
                <TbContract />
                <p className='text-xs'>
                  {obra.financeiro.tem_contrato ? 'Está' : 'Não está'} sob
                  contrato
                </p>
              </div>

              <div className='flex gap-2 p-2 rounded bg-bg-fade-color'>
                <p>Classificação:</p>
                <p
                  className={`card-flag bg-bg-classificacao flex items-center text-white text-xl px-4 ${normalizarClassificacao(
                    obra.indices.classificacao
                  )}`}
                >
                  {obra.indices.classificacao}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <p>Indice de eficiência:</p>
                  <p>{obra.indices.eficiencia_cronograma}</p>
                </div>
                <div className='flex justify-between'>
                  <p>Risco de gestão:</p>
                  <p>{obra.indices.risco_gestao}</p>
                </div>
              </div>

              <div className='flex justify-between gap-2'>
                <div className='text-center'>
                  <p className='text-xs'>Total contratado:</p>
                  <p>R$ {normalizarValor(obra.financeiro.valor_total_contratado)}</p>
                </div>
                <div className='text-center'>
                  <p className='text-xs'>Pago (acumulado):</p>
                  <p>R$ {normalizarValor(obra.financeiro.valor_pago_acumulado)}</p>
                </div>
                <div className='text-center'>
                  <p className='text-xs'>Previsto original:</p>
                  <p>R$ {normalizarValor(obra.financeiro.valor_previsto_original)}</p>
                </div>
              </div>

              <div>
                <div className='flex justify-between mb-2'>
                  <p>Percentual de desembolso:</p>
                  <p>{obra.financeiro.percentual_desembolso}%</p>
                </div>
                <div className='flex justify-between'>
                  <p>Gap financeiro de construção:</p>
                  <p>{obra.financeiro.gap_financeiro_fisico}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key='homepage'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`card-container no-scrollbar transition-[height] ease-in-out duration-300 ${
              expanded ? 'h-full' : 'h-1/2'
            } md:h-full`}
          >
            <div className='card'>
              <div className='flex flex-col gap-2 my-4 shrink-0'>
                <h1 className='text-2xl font-bold'>Página Inicial</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolor totam ipsam veritatis, repellendus expedita quam?
                </p>
              </div>
              <nav
                onScroll={onNavScroll}
                className='mt-4 p-4 flex flex-col overflow-y-auto min-h-0 no-scrollbar flex-1 bg-bg-fade-color'
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
                            <CgLoadbarSound className='text-lg' />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Home

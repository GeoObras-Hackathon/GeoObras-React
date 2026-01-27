import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'

function Home () {
  type JSONType = {
    id: string
    nome: string
    situacao: string
    municipio: string
    valorTotal: number
    percentualExecucao: number
    indiceEficiencia: number
    classificacaoEficiencia: string
    latitude: number
    longitude: number
    dataInicio: string
    dataFimPrevista: string
  }

  const json: JSONType[] = [
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    },
    {
      id: '12345',
      nome: 'Construção de Escola Municipal',
      situacao: 'Em Execução',
      municipio: 'Rio de Janeiro',
      valorTotal: 5000000.0,
      percentualExecucao: 65.5,
      indiceEficiencia: 0.82,
      classificacaoEficiencia: 'Moderada',
      latitude: -22.9068,
      longitude: -43.1729,
      dataInicio: '2023-01-15',
      dataFimPrevista: '2024-12-31'
    }
  ]

  const [info, setInfo] = useState<JSONType | null>(null)
  const [ampliado, setAmpliado] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)

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
        {info != null ? (
          <motion.div
            key='infopage'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col lg:flex-row lg:items-center justify-between gap-8 size-full overflow-y-auto'
          >
            <div className='card flex flex-col h-fit md:max-h-full'>
              <p>{info.id}</p>
              <p>{info.nome}</p>
              <p>{info.situacao}</p>
              <p>{info.municipio}</p>
              <p>{info.valorTotal}</p>
              <p>{info.percentualExecucao}</p>
              <p>{info.indiceEficiencia}</p>
              <p>{info.classificacaoEficiencia}</p>
              <p>{info.latitude}</p>
              <p>{info.longitude}</p>
              <p>{info.dataInicio}</p>
              <p>{info.dataFimPrevista}</p>
              <button
                className='button-opt p-4 bg-amber-300'
                onClick={() => setInfo(null)}
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
              className='flex-1 overflow-y-auto p-4 pr-6 bg-bg-fade-color'
            >
              <ul className='flex flex-col gap-2'>
                {json.map((local, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setInfo(local)}
                      className='flex flex-col gap-2 w-full px-4 py-2 shadow rounded-lg button-opt bg-bg-color'
                    >
                      <span className='px-2 py-1 rounded-lg bg-lime-500 text-[0.75rem] w-fit'>
                        {local.situacao}
                      </span>
                      <h2 className='text-justify'>{local.nome}</h2>
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

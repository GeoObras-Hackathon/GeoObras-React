import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

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
    metadados: {
      dataColeta: string
      fonte: string
    }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
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
      dataFimPrevista: '2024-12-31',
      metadados: {
        dataColeta: '2025-01-20T10:30:00',
        fonte: 'ObrasGov.br'
      }
    },
  ]

  const navRef = useRef<HTMLDivElement | null>(null)
  const [ampliado, setAmpliado] = useState(false)

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
    <main className={`card-container transition-[height] duration-300 ease-in-out ${ampliado ? 'h-3/4' : 'h-1/2'} md:h-full`}>
      <div className='card flex-1 flex flex-col'>
        <div className='flex flex-col gap-2 my-4'>
          <h1 className='text-2xl'>Página Inicial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur; adipisicing elit. Fuga;
            soluta.
          </p>
        </div>
        <nav
          ref={navRef}
          onScroll={handleScroll}
          className='flex-1 overflow-y-scroll pr-4'
        >
          <ul className='flex flex-col gap-4 p-4'>
            {json.map((local, index) => (
              <li key={index}>
                <Link
                  to={local.id}
                  className='flex flex-col md:flex-row md:items-center justify-between w-full p-4 shadow rounded-lg hover:scale-105 active:scale-75 transition-all ease-in duration-300 bg-bg-color'
                >
                  {local.nome}
                  <span className='p-2 rounded-lg bg-lime-500 text-sm'>
                    {local.situacao}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Home

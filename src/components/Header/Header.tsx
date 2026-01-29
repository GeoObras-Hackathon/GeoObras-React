import { useThemeStore } from '../../store/use-theme-store'
import logo from '../../assets/images/logo.png'
import { FaFilter } from 'react-icons/fa6'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import { useActionState, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useMapStore } from '../../store/use-map-store'
import type { ObrasDataType } from '../../types/obras-data-type'
import { GrClose } from 'react-icons/gr'
import { normalizarFiltro, normalizarNome } from '../../utils/normalizar-string'
const API_BASE = import.meta.env.VITE_API_BASE

function Header () {
  const { theme, setTheme } = useThemeStore()
  const [openFilter, setOpenFilter] = useState(false)
  const { setObra } = useMapStore()
  const [state, action, isPending] = useActionState(filter, undefined)
  const [filtro, setFiltro] = useState<FiltrosType | ''>('')
  const [valor, setValor] = useState('')
  const [obrasFiltradas, setObrasFiltradas] = useState<ObrasDataType[] | null>(
    null
  )

  const filtros = {
    situacao: ['Cadastrada', 'Concluída', 'Inacabada'],
    eficiencia_minima: ['0.4', '0.7', '1', '1.2', '1.5'],
    risco: ['Crítico (Inconsistência)', 'Alto', 'Normal'],
    valor_minimo: null
  } as const

  type FiltrosType = keyof typeof filtros

  async function filter (_previousState: unknown, formData: FormData) {
    const filtro = formData.get('filtro') as FiltrosType
    const valor = formData.get('valor') as string | null

    const response = await fetch(
      `${API_BASE + (valor != null ? `?${filtro}=${valor}` : `/${filtro}`)}`
    )

    if (!response.ok) return { error: 'Erro ao fazer filtro' }

    const responseData: ObrasDataType[] = await response.json()
    setObrasFiltradas(responseData)
  }

  const config = filtros[filtro as FiltrosType]

  return (
    <header className='w-full py-2 px-4 rounded-full bg-bg-color text-text-color flex justify-between pointer-events-auto shadow-md relative'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='Logo GeoObras' className='size-12' />
        <p className='text-3xl hidden md:block font-black'>Geo Obras</p>
      </div>
      <div className='flex gap-4 pr-2 items-center'>
        <button
          onClick={() => setOpenFilter(openFilter ? false : true)}
          className='button-opt shadow-none side-button relative text-xl'
        >
          <GrClose
            className={`absolute ${
              openFilter ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
          <FaFilter
            className={`absolute ${
              !openFilter ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
        </button>
        <button
          className='button-opt shadow-none side-button relative text-xl'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <IoMdSunny
            className={`absolute ${
              theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
          <IoMdMoon
            className={`absolute ${
              theme != 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute p-4 card top-0 right-0 sm:right-16 transition-all duration-300 ease-in ${
          openFilter
            ? 'translate-y-20 scale-y-100 opacity-100'
            : 'translate-y-0 scale-y-0 opacity-0'
        }`}
      >
        <p className='mb-2 text-lg font-semibold'>
          Filtre quais obras quer ver
        </p>
        <form
          action={action}
          className='flex justify-between h-full'
        >
          <fieldset className='flex flex-col gap-4'>
            <select
              name='filtro'
              id='idFiltro'
              value={filtro}
              onChange={e => {
                setFiltro(e.target.value as FiltrosType)
                setValor('')
              }}
              required
            >
              <option value='' disabled>
                Selecione um filtro
              </option>
              {Object.keys(filtros).map((filtro, index) => (
                <option key={index} value={filtro}>
                  {normalizarFiltro(filtro)}
                </option>
              ))}
            </select>

            {Array.isArray(config) && (
              <select
                name='valor'
                required
                value={valor}
                onChange={e => setValor(e.target.value)}
              >
                <option value='' disabled>
                  Selecione um filtro
                </option>
                {config.map((valor, index) => (
                  <option key={index} value={valor}>
                    {normalizarFiltro(valor)}
                  </option>
                ))}
              </select>
            )}

            {config === null && (
              <input
                name='valor'
                id='idValor'
                placeholder='Informe um valor'
                type='number'
                inputMode='decimal'
                min='0'
                step='any'
                required
              />
            )}
          </fieldset>

          <button
            disabled={isPending}
            className='flex flex-col items-center justify-center button-opt bg-lime-400 p-2 size-16 rounded-lg'
          >
            <FaSearch className='text-lg' />
            <p>{isPending ? 'Buscando...' : 'Buscar'}</p>
          </button>

          {state?.error && <p className='text-red-500'>{state.error}</p>}
        </form>
        {obrasFiltradas && (
          <ul className='h-40 gap-4 mt-4 p-4 flex flex-col overflow-y-auto no-scrollbar bg-bg-fade-color'>
            {obrasFiltradas.map((obraFiltrada, index) => (
              <li key={index}>
                <button
                  onClick={() => setObra(obraFiltrada)}
                  className='w-full truncate text-left px-4 py-2 shadow rounded button-opt bg-bg-color'
                >
                  {normalizarNome(obraFiltrada.identificacao.nome)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header

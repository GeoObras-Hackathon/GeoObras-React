import { useThemeStore } from '../../store/use-theme-store'
import logo from '../../assets/images/logo.png'
import { FaFilter } from 'react-icons/fa6'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

function Header () {
  const { theme, setTheme } = useThemeStore()

  return (
    <header className='w-full py-2 px-4 rounded-full bg-bg-color text-text-color flex justify-between pointer-events-auto shadow-md'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt='Logo GeoObras' className='size-12' />
        <p className='text-3xl hidden md:block font-black'>Geo Obras</p>
      </div>
      <div className='flex gap-4 pr-2 items-center'>
        <button onClick={() => {}}>
          <FaFilter />
        </button>
        <button
          className='text-xl'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}
        </button>
      </div>
    </header>
  )
}

export default Header

import { useThemeStore } from '../../store/use-theme-store'
import logo from '../../assets/images/logo.png'
import { FaFilter } from 'react-icons/fa6'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

function Header () {
  const { theme, setTheme } = useThemeStore()

  return (
    <header className='w-full py-3 px-6 rounded-full bg-bg-color text-text-color flex justify-between pointer-events-auto'>
      <img src={logo} alt='Logo GeoObras' className='size-12' />
      <div className='flex gap-4 items-center'>
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

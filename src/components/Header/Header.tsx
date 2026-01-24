import { useThemeStore } from "../../store/use-theme-store"

function Header () {
  const { theme, setTheme } = useThemeStore()

  return (
    <header className='w-full py-4 px-8 rounded-full bg-white text-gray-800 dark:bg-gray-800 dark:text-white flex justify-between pointer-events-auto'>
      <img src='' alt='Logo GeoObras' />
      <div className="flex gap-2 items-center">
        <button onClick={() => {}}>Procure aqui</button>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme}</button>
      </div>
    </header>
  )
}

export default Header

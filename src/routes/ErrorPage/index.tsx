import { Link } from 'react-router-dom'
import MapView from '../../components/MapView/MapView'
import ErrorImage from '../../assets/images/error-image.png'

function ErrorPage () {
  return (
    <div className='h-lvh w-lvw relative flex'>
      <div className='card-container z-10 h-full flex justify-center items-center'>
        <div className='card w-full md:w-100 mx-8 h-fit flex flex-col items-center'>
          <img
            src={ErrorImage}
            alt='Imagem para indicar Página Não Econtrada'
            className='w-2/3 md:w-1/2 brightness-75 dark:brightness-100'
          />
          <div className='flex flex-col gap-2 my-8 px-2'>
            <h1 className='text-2xl font-bold'>404 - Página Não Encontrada</h1>
            <p>
              A página que você está procurando pode não existir, estar
              indisponível temporariamente ou ter mudado de rota.
            </p>
          </div>
          <Link to='/' className='p-4 bg-lime-500 rounded-2xl button-opt'>
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
      <div className='size-full fixed z-0 pointer-events-none grayscale-100 brightness-70'>
        <MapView />
      </div>
    </div>
  )
}

export default ErrorPage

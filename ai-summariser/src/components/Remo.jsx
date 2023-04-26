import {logo} from '../assets'
const Remo = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col '>
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
            <button></button>
        </nav>
    </header>
  )
}

export default Remo
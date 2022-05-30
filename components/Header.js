import { FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <nav className='flex items-center flex-wrap p-3 justify-between '>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-2xl text-emerald-800 tracking-wide rounded-lg backdrop-blur-xl bg-white px-3 py-2'>
              Manacá</span>
            </a>
            <a href="https://www.instagram.com/manaca.consultoria" className='inline-flex items-center p-2 mr-4 '>
            <span className='text-sm text-white tracking-wide'>
                Instagram
            </span>
            <FaInstagram className='ml-2 text-white'/>
            </a>
      </nav>
    </> 
  )
    
}

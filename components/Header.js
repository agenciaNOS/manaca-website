import { FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <nav className='flex items-center flex-wrap p-3 justify-between '>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img src="/manaca-logo-white.svg" className="h-20" alt="logo"/>
            </a>
            <a href="https://www.instagram.com/manaca.consultoria" className='ig inline-flex items-center p-2 mr-4 '>
            <span className='text-sm text-white tracking-wide'>
                Instagram
            </span>
            <FaInstagram className='ml-2 text-white'/>
            </a>
      </nav>
    </> 
  )
    
}

import { Link, useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import { ArrowLeftIcon, ArrowRightIcon, PanelLeftIcon } from 'lucide-react';
import { useEffect } from 'react';

function NavBar() {
  const navigateTo = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigateTo('/accordion-component');
    }
  }, [location.pathname]);
  return (
    <div className='relative transition duration-1000 ease-in flex flex-row h-full  w-full'>
      <div className=' z-50 bg-white w-full shadow px-4 h-12 flex flex-row items-center justify-between'>
        <img
          src={logo}
          onClick={() => navigateTo('/accordion-component')}
          className=' w-10 hover:scale-110 transition duration-300 ease-in-out h-10 '
          alt='react'
        />
        <div className=' hidden group md:flex lg:w-1/2 sm:w-3/4 font-light h-3/4 px-3  bg-gray-100 *:py-0.5 text-[0.77em] mask-r-from-95% mask-r-to-100% mask-l-from-95% mask-l-to-100%  flex-row  items-center justify-around *:hover:underline decoration-1 decoration-blue-500 *:hover:text-blue-600'>
          <Link
            className={` ${
              location.pathname.endsWith('accordion-component')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/accordion-component'
          >
            Accordion Component
          </Link>
          <Link
            className={` ${
              location.pathname.endsWith('responsive-design')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/responsive-design'
          >
            Responsive Design
          </Link>

          <Link
            className={` ${
              location.pathname.endsWith('dark-mode')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/dark-mode'
          >
            Dark Mode
          </Link>

          <Link
            className={` ${
              location.pathname.endsWith('theme-variables')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='theme-variables'
          >
            Theme Variables
          </Link>
          <Link
            className={` ${
              location.pathname.endsWith('colors')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='colors'
          >
            Colors
          </Link>
        </div>
        <button className=' hidden disabled:bg-gray-400  disabled:opacity-40 shadow shadow-gray-800 px-2 outline-1 cursor-pointer group outline-gray-400/90 bg-orange-600 top-[90vh]  flex-row items-center justify-center gap-4 z-50 left-20 fixed rounded-full h-7'>
          <ArrowLeftIcon className='bg-gray-800 rounded-full ease-in-out duration-300 group-hover:-translate-x-1 h-6 w-6 text-gray-100 p-0.5' />
          <h2 className='text-vsm group-hover:text-blue-600'>Hover State</h2>
        </button>
        <button className=' hidden group disabled:bg-gray-400 disabled:opacity-40 shadow shadow-gray-800 px-2 outline-1 cursor-pointer group outline-gray-400/90 bg-orange-600 top-[90vh]  flex-row items-center justify-center gap-4 z-50 right-20 fixed rounded-full h-7'>
          <h2 className='text-vsm group-hover:text-blue-600'>Hue Rotate</h2>
          <ArrowRightIcon className='bg-gray-800 group-disabled:hover:translate-x-0 rounded-full ease-in-out duration-300 group-hover:translate-x-1 h-6 w-6 text-gray-100 p-0.5' />
        </button>

        <button className='sideBar group cursor-pointer bg-orange-700 h-3/5  py-4 flex flex-row items-center justify-center px-2 gap-2 text-white  outline-gray-200 shadow-8xl rounded-full shadow-black'>
          <h2 className='sideBar text-sm'> All Projects</h2>
          <h2>
            <PanelLeftIcon className='sideBar outline-1 outline-gray-400 rounded-full text-black p-1  bg-gray-200 w-6 h-6' />
          </h2>
        </button>
      </div>
    </div>
  );
}

export default NavBar;

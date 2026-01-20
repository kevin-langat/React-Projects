import { Link, useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import { ArrowLeftIcon, ArrowRightIcon, PanelLeftIcon, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function NavBar() {
  const navigateTo = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const sideBarRef = useRef();

  useEffect(() => {
    function closeSiderOnOutsideClick(event) {
      if (!sideBarRef.current || !sideBarRef.current.contains(event.target)) {
        setSideBar(false);
      }
    }
    document.addEventListener('mousedown', closeSiderOnOutsideClick);
    document.addEventListener('touchstart', closeSiderOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeSiderOnOutsideClick);
      document.removeEventListener('touchstart', closeSiderOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      navigateTo('/accordion-component');
    }
  }, [location.pathname]);

  return (
    <div className='relative transition z-50 duration-1000 ease-in flex flex-row h-full  w-full'>
      <div className=' z-50 bg-white w-full shadow px-4 h-12 flex flex-row items-center justify-between'>
        <img
          src={logo}
          onClick={() => navigateTo('/accordion-component')}
          className=' w-10 hover:scale-110 transition duration-300 ease-in-out h-10 '
          alt='react'
        />
        <div className=' hidden group md:flex font-light h-3/4 px-3 bg-gray-100 *:py-0.5 md:w-3/4 text-[0.77em] mask-r-from-95% mask-r-to-100% mask-l-from-95% mask-l-to-100%  flex-row  items-center justify-around *:hover:underline decoration-1 text-gray-900 decoration-blue-500 *:hover:text-blue-600'>
          <Link
            className={` ${
              location.pathname.endsWith('accordion-component')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-1 `}
            to='/accordion-component'
          >
            Accordion Component
          </Link>
          <Link
            className={` ${
              location.pathname.endsWith('random-color-generator')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/random-color-generator'
          >
            Random Color Generator
          </Link>

          <Link
            className={` ${
              location.pathname.endsWith('star-rating-component')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 focus:outline-1 rounded-full px-2 `}
            to='/star-rating-component'
          >
            Star Rating Component
          </Link>

          <Link
            className={` ${
              location.pathname.endsWith('image-slider')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 hidden md:flex focus:outline-1 rounded-full px-2 `}
            to='image-slider'
          >
            Image Slider
          </Link>
          <Link
            className={` ${
              location.pathname.endsWith('load-more-component')
                ? 'bg-sky-800/20 outline-1 outline-gray-400 '
                : ''
            } focus:bg-sky-600/30 hidden lg:flex focus:outline-1 rounded-full px-2 `}
            to='load-more-component'
          >
            Load More Component
          </Link>
        </div>
        <button
          onClick={() => setSideBar(true)}
          className='sideBar group cursor-pointer bg-orange-700 h-3/5  py-4 flex flex-row items-center justify-center px-2 gap-2 text-white  outline-gray-200 shadow-8xl rounded-full shadow-black'
        >
          <h2 className='sideBar text-sm'> All Projects</h2>
          <h2>
            <PanelLeftIcon className='sideBar pointer-events-none outline-1 outline-gray-400 rounded-full text-black p-1  bg-gray-200 w-6 h-6' />
          </h2>
        </button>
      </div>
      {/* start of side bar */}
      <div
        ref={sideBarRef}
        className={` ${
          sideBar ? 'opacity-100 flex' : 'opacity-0 hidden'
        } duration-200 transition  ease-in sideBar z-50 flex-col gap-1 pl-4  py-3  absolute shadow-2xl shadow-black bg-gray-950 outline-1 rounded-[0.5em] outline-gray-400 w-[45%] sm:w-1/3 md:w-[28%] lg:w-[24%] right-2 h-screen text-lsm`}
      >
        <div className=' bg-linear-to-br from-sky-400/50 to-green-500/70 w-[73.5] rounded-t-[0.5em]  -ml-4 -mt-3  h-6 flex flex-col items-end justify-end '>
          {' '}
          <X
            onClick={() => setSideBar(false)}
            className='cursor-pointer  h-5 hover:outline-1 hover:outline-gray-600 hover:bg-gray-700/30 rounded-full text-gray-200'
          />
        </div>

        <div className=' custom-scrollbar flex flex-col gap-1 overflow-y-auto '>
          {/* PART ONE */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Part One (25 Projects)
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 flex lg:hidden text-gray-400'
            to={'/load-more-component'}
          >
            Load More Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/tree-view-component'}
          >
            Tree View Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/qr-code-generator'}
          >
            QR Code Generator
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/light-dark-component'}
          >
            Light Dark Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/scroll-indicator'}
          >
            Scroll Indicator
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/custom-tab-component'}
          >
            Custom Tab Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/modal-popup-component'}
          >
            Modal Popup Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/github-profile-finder'}
          >
            Github Profile Finder
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/search-autocomplete-component'}
          >
            Search Autocomplete Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/tic-tac-toe-game'}
          >
            Tic Tac Toe Game
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
            to={'/feature-flag-component'}
          >
            Feature Flag Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 text-fuchsia-500 hover:underline active:text-orange-400 '
            to={'/custom-hooks-component'}
          >
            Use Effect Custom Hook
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 text-fuchsia-500 hover:underline active:text-orange-400 '
            to={'/use-onclick-outside-component'}
          >
            Use Outside Onclick Hook
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 text-fuchsia-500 hover:underline active:text-orange-400 '
            to={'/use-window-resize-component'}
          >
            Use Window Resize Hook
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-green-500 active:text-orange-400 '
            to={'/scroll-to-top-bottom-component'}
          >
            Scroll To Top Bottom Element
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-green-500 active:text-orange-400 '
            to={'/scroll-to-top-bottom-component-document'}
          >
            Scroll To Top Bottom Document
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-green-500 active:text-orange-400 '
            to={'/scroll-to-section-component'}
          >
            Scroll To A Section Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/weather-app-component'}
          >
            Weather App Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/recipe-app'}
          >
            Recipe App
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/shopping-cart'}
          >
            Shopping Cart Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/expense-tracker'}
          >
            Expense Tracker
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/blog-app'}
          >
            Blog app
          </Link>
          {/* PART TWO 25 PROJECTS */}
          <h2 className='sideBar  text-orange-500 rounded-full underline'>
            Part Two (25 Projects)
          </h2>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/pagination-component'}
          >
            Pagination Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/digital-clock'}
          >
            Digital Clock{' '}
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/step-progress-bar'}
          >
            Step Progress Bar
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/random-quote-gen'}
          >
            Random Quote Generator
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/tooltip'}
          >
            Tool Tip
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/currency-converter'}
          >
            Currency Coverter
          </Link>{' '}
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/product-filter-by-category'}
          >
            Product filter
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/tip-calculator'}
          >
            Tip Calculator
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/music-player'}
          >
            Music Player
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/progress-bar'}
          >
            Progress Bar
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/bmi-calculator'}
          >
            BMI Calculator
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/button-ripple-effect'}
          >
            Button Ripple Effect
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/drag-and-drop-feature'}
          >
            Drag And Drop Feature
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/form-validation-component'}
          >
            Form Validation Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/file-upload-component'}
          >
            File Upload Component
          </Link>
          <Link
            onClick={() => setSideBar(false)}
            className='hover:text-sky-600 hover:underline text-gray-400 active:text-orange-400 '
            to={'/quiz-app'}
          >
            Quiz App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

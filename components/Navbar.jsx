import Link from "next/link";
import { useState, useEffect } from "react";
import {BiCodeAlt} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import {BsFillMoonStarsFill} from 'react-icons/bs';

function Navbar() {
  const [navBar, setNavBar] = useState(false)
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', darkMode);

    // Save the dark mode preference in local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Retrieve the dark mode preference from local storage on initial load
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main>
        <nav  className={`w-full border-b bg-white dark:bg-primary fixed top-0 left-0 right-0 z-50`}>
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-6 md:block">
              <Link href="/">
                <h1 className='text-xl font-bold font-burtons text-cyan-600 dark:text-cyan-200'>
                  <BiCodeAlt />
                </h1>
              </Link>
              <div className="md:hidden">
                <button className="p-2 right-0 text-cyan-200 rounded-md outline-none focus:border-cyan-400" onClick={() => setNavBar(!navBar)}
                >
                  {navBar ? (
                    <MdClose width={30} height={30} className="text-cyan-200"/>
                  ) : (
                    <GiHamburgerMenu width={30} height={30} className="focus:border-none active:border-none" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navBar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6 text-lg dark:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-cyan-200  md:hover:text-cyan-600 md:hover:bg-transparent">
                    <Link href="#about" onClick={() => setNavBar(!navBar)}>
                      01. About
                    </Link>
                  </li>
                  <li className="pb-6 text-lg dark:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-cyan-200  md:hover:text-cyan-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavBar(!navBar)}>
                      02. Projects
                    </Link>
                  </li>
                  <li className="pb-6 text-lg dark:text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-cyan-200  md:hover:text-cyan-600 md:hover:bg-transparent">
                    <Link href="#contact" onClick={() => setNavBar(!navBar)}>
                      03. Contact
                    </Link>
                  </li>
                  <li className="pb-6 dark:text-white py-2 lg:px-4 px-28 border-b-2 md:border-b-0  hover:bg-purple-600  border-cyan-200  md:hover:text-cyan-600 md:hover:bg-transparent">
                    <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl'/>
                  </li>
                  <li className="pb-6 text-lg dark:text-white pt-6 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-cyan-200  md:hover:text-cyan-600 md:hover:bg-transparent">
                    <Link
                      className='lg:border-2 lg:border-cyan-600 lg:px-4 lg:py-2 rounded-md ml-8 dark:border-cyan-200 dark:hover:bg-primary'
                      href='https://drive.google.com/file/d/1IT4Ykioxov_TulVpVTW0QX47PX1Cd6q5/view' target="_blank" rel='noreferrer'
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </nav>
    </main>
  )
}

export default Navbar;

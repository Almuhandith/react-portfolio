import Link from "next/link";
import { useState } from "react";
import {BiCodeAlt} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';
import {BsFillMoonStarsFill} from 'react-icons/bs';

function Navbar() {
  const [navBar, setNavBar] = useState(false)
  //const [darkMode, setDarkMode] = useState(true);
  return (
    <main>
        <nav  className="w-full bg-indigo-900 fixed top-0 left-0 right-0 z-50">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-6 md:block">
              <Link href="/">
                <h1 className='text-xl font-bold font-burtons text-indigo-600 dark:text-indigo-200'>
                  <BiCodeAlt />
                </h1>
              </Link>
              <div className="md:hidden">
                <button className="p-2 right-0 text-indigo-200 rounded-md outline-none focus:border-indigo-400" onClick={() => setNavBar(!navBar)}
                >
                  {navBar ? (
                    <GrClose width={30} height={30}/>
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
                  <li className="pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#about" onClick={() => setNavBar(!navBar)}>
                      01. About
                    </Link>
                  </li>
                  <li className="pb-6 text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavBar(!navBar)}>
                      02. Projects
                    </Link>
                  </li>
                  <li className="pb-6 text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#contact" onClick={() => setNavBar(!navBar)}>
                      03. Contact
                    </Link>
                  </li>
                  <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
                  </li>
                  <li>
                    <Link
                      className='border-2 border-indigo-600 px-4 py-2 rounded-md ml-8 dark:border-indigo-200 dark:hover:bg-indigo-900'
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

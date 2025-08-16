import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo_main.png'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-black bottom-0">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row md:flex-row justify-between w-[100%]">
                <div className="mb-6 mb-0 lg:w-[70%] md:w-[50%]">
                    <div className='flex mb-2'>
                        <Link to={"/"}>
                            <img src={logo} className="lg:h-15 md:h-12 h-10 me-3" alt="Codium Logo" />
                        </Link>
                    </div>
                    <div>
                        <h5 className='text-2xl font-bold text-left'>Shankar Manjrekar</h5>
                        <p className='text-justify text-sm lg:text-lg md:text-md max-w-120 text-white'>Web Developer passionate about crafting visually appealing and highly functional websites.</p>
                    </div>
                </div>
                <div className="lg:w-[20%] md:w-[30%]">
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase text-left lg:text-center">Links</h2>
                    <div className="flex justify-start gap-6 lg:justify-between lg:gap-0">
                        <ul className="text-gray-400">
                            <li className="mb-4 text-left">
                                <Link to={"about_me"} className="text-left" smooth={true}>About Me</Link>
                            </li>
                            <li className="mb-4 text-left">
                                <Link to={"experience"} className="text-left" smooth={true}>Experience</Link>
                            </li>
                        </ul>
                        <ul className="text-gray-400">
                            <li className="mb-4 text-left">
                                <Link to={"skills"} className="text-left" smooth={true}>Skills</Link>
                            </li>
                            <li className="mb-4 text-left">
                                <Link to={"contact"} className="text-left" smooth={true}>Contact me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-500 mx-auto lg:my-8"/>
            <div className="flex items-center justify-between w-[100%]">
                <div>
                    <span className="text-sm text-white text-center">© {currentYear}   <Link to={"/"} className="hover:underline">Shankar Manjrekar</Link>. All Rights Reserved.</span>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
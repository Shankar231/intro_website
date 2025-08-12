import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/codium_new.webp'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-black bottom-0">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="flex justify-between w-[100%]">
                <div className="mb-6 mb-0 lg:w-[70%] md:w-[50%]">
                    <div className='flex mb-2'>
                        <Link to={"/"}>
                            {/* <img src={logo} className="lg:h-15 md:h-12 sm:h-10 me-3" alt="Codium Logo" /> */}
                        </Link>
                    </div>
                    {/* <p className='text-justify lg:text-lg md:text-md sm:text-sm max-w-120 text-white'>Codium TechLabs offers a great service in the design, development, programming, and marketing of your websites and softwares. We strive to offer the best solution for your business and impartial advice at an honest price.</p> */}
                </div>
                <div className="lg:w-[20%] md:w-[30%]">
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Links</h2>
                    <div className="flex justify-between">
                        <ul className="text-gray-400">
                            <li className="mb-4 text-left">
                                <Link to={"/"} className="text-left">Home</Link>
                            </li>
                            <li className="mb-4 text-left">
                                <Link to={""} className="text-left">Portfolio</Link>
                            </li>
                            <li className="mb-4 text-left">
                                <Link to={"/services"} className="text-left">Services</Link>
                            </li>
                        </ul>
                        <ul className="text-gray-400">
                            <li className="mb-4 text-left">
                                <Link to={"/about-us"} className="text-left">About Us</Link>
                            </li>
                            <li className="mb-4 text-left">
                                <Link to={""} className="text-left">Career</Link>
                            </li>
                            <li className="mb-4 text-left">
                                <Link to={"/contact-us"} className="text-left">Contact Us</Link>
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
                <div>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link to={''}>Privacy Policy</Link>
                        <Link to={''}>Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
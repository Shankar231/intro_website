import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FloatingDock } from "../components/SocialLinks";

export default function ContactForm () {

    const links = [
        {
            title: "Linkdein",
            icon: (
                <LinkedInIcon className="h-full w-full text-blue-800" />
            ),
            href: "#",
        },
    
        {
            title: "Instagram",
            icon: (
                <InstagramIcon className="h-full w-full text-pink-800" />
            ),
            href: "#",
        },
    ];
    return (
        <>
            <div className="bg-white py-10 px-10" id="contact">
                <h5 className="font-bold bg-gradient-to-br from-blue-500 to-purple-900 bg-clip-text text-transparent lg:text-4xl md:text-3xl sm:text-lg z-20">Get in touch with us</h5>
                <div className="flex w-full gap-6 py-10">
                    <div className="w-[60%]">
                        <form type="submit">
                        <div className="flex gap-6">
                            <div className="mb-5 w-[50%]">
                            <label for="name" className="block mb-2 lg:text-lg md:text-md sm:text-sm font-medium text-gray-900 text-left">Full Name</label>
                            <input type="text" id="name" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" required />
                            </div>
                            <div className="mb-5 w-[50%]">
                            <label for="company_name" className="block mb-2 lg:text-lg md:text-md sm:text-sm font-medium text-gray-900 text-left">Company Name</label>
                            <input type="text" id="company_name" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" required />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="mb-5 w-[50%]">
                            <label for="email" className="block mb-2 lg:text-lg md:text-md sm:text-sm font-medium text-gray-900 text-left">Email Address</label>
                            <input type="email" id="email" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" required />
                            </div>
                            <div className="mb-5 w-[50%]">
                            <label for="phone" className="block mb-2 lg:text-lg md:text-md sm:text-sm font-medium text-gray-900 text-left">Phone Number</label>
                            <input type="number" id="phone" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" required />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label for="message" className="block mb-2 lg:text-lg md:text-md sm:text-sm font-medium text-gray-900 text-left">Your message</label>
                            <textarea id="message" rows="4" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="bg-gradient-to-br from-blue-500 to-purple-900 rounded-2xl lg:text-lg md:text-md sm:text-sm w-full text-white">Send Message</button>
                        </form>
                    </div>
                    <div className="w-[40%]">
                        <div className="p-1 border-1 border-purple-800 rounded-4xl">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-900 lg:h-110 md:h-90 md:p-4 flex lg:justify-evenly md:gap-4 flex-col items-center rounded-4xl">
                                <div className="flex items-start gap-6 lg:w-80 md:w-50">
                                    <div>
                                        <div className="bg-violet-900 rounded-full lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
                                            <LocationOnIcon sx={{
                                                fontSize: 20,
                                                '@media (max-width:768px)': {
                                                    fontSize: 16,
                                                },
                                            }}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="lg:text-xl md:text-lg sm:text-md font-bold text-left text-white">Find Us Here</h6>
                                        <p className="text-left lg:text-lg md:text-md sm:text-sm text-white">5W, 5th Floor, The Metropolitan, E-Block, Bandra Kurla Complex, Bandra (E), Mumbai 400051</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 lg:w-80 md:w-50">
                                    <div>
                                        <div className="bg-violet-900 rounded-full lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
                                        <AlternateEmailIcon sx={{
                                            fontSize: 20,
                                            '@media (max-width:768px)': {
                                                fontSize: 16,
                                            },
                                        }}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="lg:text-lg md:text-md sm:text-sm font-bold text-left text-white">Connect with us</h6>
                                        <a href="mailto:contact@codium.tech" className="text-left lg:text-lg md:text-md sm:text-sm underline font-semibold text-white">contact@codium.tech</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 lg:w-80 md:w-50">
                                <div>
                                    <div className="bg-violet-900 rounded-full lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
                                    <CallIcon sx={{
                                        fontSize: 20,
                                        '@media (max-width:768px)': {
                                            fontSize: 16,
                                        },
                                    }}/>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="lg:text-lg md:text-md sm:text-sm font-bold text-left text-white">Let's have a chat</h6>
                                    <a href="tel:+91 8692-8568-86" className="text-left lg:text-lg md:text-md sm:text-sm text-white">+91 8692-8568-86</a>
                                </div>
                                </div>
                                <div className="flex">
                                <div className="flex items-center justify-center">
                                    <FloatingDock mobileClassName="translate-y-20" items={links}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
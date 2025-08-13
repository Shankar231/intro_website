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
          href: "https://www.linkedin.com/in/shankarmanjrekar/",
        },
    
        {
          title: "Instagram",
          icon: (
              <InstagramIcon className="h-full w-full text-pink-800" />
          ),
          href: "https://www.instagram.com/shankar__manjrekar?igsh=MWdsaTV5cnlpbzdiNw==",
        },
    ];
    return (
        <>
            <div className="px-20 py-8">
                <div className="flex w-full gap-6">
                    <div className="w-[50%]">
                        <form type="submit">
                            <div className="mb-3 w-[100%]">
                                <label for="name" className="block mb-2 lg:text-md md:text-md sm:text-sm font-medium text-left text-white">Full Name</label>
                                <input type="text" id="name" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" required />
                            </div>
                            <div className="mb-3 w-[100%]">
                                <label for="email" className="block mb-2 lg:text-md md:text-md sm:text-sm font-medium text-left text-white">Email Address</label>
                                <input type="email" id="email" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" required />
                            </div>
                            <div className="mb-5">
                                <label for="message" className="block mb-2 lg:text-md md:text-md sm:text-sm font-medium text-left text-white">Your message</label>
                                <textarea id="message" rows="4" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-xl" placeholder="Write your message here..."></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 border-1 border-white rounded-2xl lg:text-lg md:text-md sm:text-sm w-full text-white">Send Message</button>
                        </form>
                    </div>
                    <div className="w-[50%]">
                        <div className="rounded-4xl border-1 border-blue-500 p-1">
                            <div className="bg-blue-500 lg:h-100 md:h-90 md:p-4 flex lg:justify-evenly md:gap-4 flex-col items-center rounded-4xl">
                                <div className="flex items-start gap-6 lg:w-80 md:w-50">
                                    <div>
                                        <div className="bg-[#030726] rounded-full lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
                                        <AlternateEmailIcon sx={{
                                            fontSize: 20,
                                            '@media (max-width:768px)': {
                                                fontSize: 16,
                                            },
                                        }}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="lg:text-lg md:text-md sm:text-sm font-bold text-left text-white">Connect with me</h6>
                                        <a href="mailto:shankarmanjarekar123@gmail.com" className="text-left lg:text-lg md:text-md sm:text-sm underline font-semibold text-white">shankarmanjarekar123@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 lg:w-80 md:w-50">
                                <div>
                                    <div className="bg-[#030726] rounded-full lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
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
                                    <a href="tel:+91 9082214852" className="text-left lg:text-lg md:text-md sm:text-sm text-white">+91 90822-14852</a>
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
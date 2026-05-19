import React,{useRef,useState,forwardRef} from "react";
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FloatingDock } from "../components/SocialLinks";
import emailjs from 'emailjs-com';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {ShimmerButton} from '../components/ShimmerButton';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export default function ContactForm () {
    const formRef = useRef();
    const [btnLoading, setBtnLoading] = useState(false);
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success"); 
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

    const sendEmail = (e) => {
        e.preventDefault();
        setBtnLoading(true);

        emailjs.sendForm('service_itf6e7k', 'template_3xq1pce', e.target, 'mM3bye20WJ_CtUodw')
        .then(
            () => {
                setSnackbarMessage("Message sent successfully!");
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
                formRef.current.reset();
                setBtnLoading(false);
            },
            (error) => {
                setSnackbarMessage("Failed to send message. Try again later.");
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                setBtnLoading(false);
            }
        );
    };

    return (
        <>
            <div className="px-0 lg:px-20 py-8">
                <div className="flex flex-col lg:flex-row w-full gap-6">
                    <div className="w-[100%] lg:w-[50%]">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <div className="mb-3 w-[100%]">
                                <label for="name" className="block mb-2 lg:text-md md:text-md sm:text-sm font-medium text-left text-white">Full Name</label>
                                <input type="text" name="name" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-3xl focus:ring-[#2b7efe] focus:border-[#2b7efe] block w-full p-2.5" required />
                            </div>
                            <div className="mb-3 w-[100%]">
                                <label for="email" className="block mb-2 lg:text-md md:text-md sm:text-sm font-medium text-left text-white">Email Address</label>
                                <input type="email" name="email" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-3xl focus:ring-[#2b7efe] focus:border-[#2b7efe] block w-full p-2.5" required />
                            </div>
                            <div className="mb-5">
                                <label for="message" className="block mb-2 lg:text-md md:text-md sm:text-sm font-medium text-left text-white">Your message</label>
                                <textarea name="message" rows="4" className="shadow-xs bg-gray-200 border border-white text-gray-900 lg:text-lg md:text-md sm:text-sm rounded-3xl focus:ring-[#2b7efe] focus:border-[#2b7efe] block w-full p-2.5" placeholder="Write your message here..."></textarea>
                            </div>
                            <ShimmerButton type="submit" className="w-full" disabled={btnLoading}>{btnLoading ? <><CircularProgress size={20} color="inherit" /> Sending...</> : "Send Message"}</ShimmerButton>
                        </form>
                    </div>
                    <div className="w-[100%] lg:w-[50%]">
                        <div className="rounded-4xl border-1 border-[#2b7efe] p-1">
                            <div className="bg-[#2b7efe] lg:h-100 md:h-80 py-4 px-2 lg:p-4 md:p-4 flex lg:justify-evenly gap-6 md:gap-4 flex-col items-start rounded-[28px]">
                                <div className="flex items-start gap-2 lg:gap-6 lg:w-80">
                                    <div>
                                        <div className="bg-[#030726] rounded-full w-10 h-10 lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
                                        <AlternateEmailIcon sx={{
                                            fontSize: 20,
                                            '@media (max-width:768px)': {
                                                fontSize: 16,
                                            },
                                        }}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="text-sm lg:text-lg md:text-lg font-bold text-left text-white">Connect with me</h6>
                                        <a href="mailto:shankarmanjarekar123@gmail.com" className="text-left text-xs lg:text-lg md:text-lg underline font-semibold text-white">shankarmanjarekar123@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 lg:gap-6 lg:w-80">
                                    <div>
                                        <div className="bg-[#030726] rounded-full w-10 h-10 lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
                                        <CallIcon sx={{
                                            fontSize: 20,
                                            '@media (max-width:768px)': {
                                                fontSize: 16,
                                            },
                                        }}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="text-sm lg:text-lg md:text-lg font-bold text-left text-white">Let's have a chat</h6>
                                        <a href="tel:+91 9082214852" className="text-left text-xs lg:text-lg md:text-lg text-white">+91 90822-14852</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 lg:gap-6 lg:w-80">
                                    <div>
                                        <div className="bg-[#030726] rounded-full w-10 h-10 lg:w-12 md:w-10 lg:h-12 md:h-10 flex items-center justify-center text-white">
                                            <LocationOnIcon sx={{
                                                fontSize: 20,
                                                '@media (max-width:768px)': {
                                                    fontSize: 16,
                                                },
                                            }}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="text-sm lg:text-xl md:text-lg font-bold text-left text-white">Find Me Here</h6>
                                        <p className="text-left text-xs lg:text-lg md:text-lg text-white">Mumbai, Maharashtra</p>
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
            <Snackbar 
                open={snackbarOpen} 
                autoHideDuration={3000} 
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
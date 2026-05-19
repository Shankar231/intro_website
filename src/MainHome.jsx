import React from 'react';
import { SmoothCursor } from './components/SmoothCursor';
import { TypewriterEffectSmooth } from './components/TypeWriter';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { ScrollVelocityContainer,ScrollVelocityRow } from './components/ScrollBasedVelocity';
import { ShimmerButton } from './components/ShimmerButton';
import ResumePdf from '../src/assets/Shankar_Manjrekar_cv.pdf';
import Shankar from '../src/assets/shankar.png';
import { FloatingDock } from './components/SocialLinks';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import { HoverEffect } from './components/CardHoverEffect';
import react from '../src/assets/react.svg';
import next from '../src/assets/next.svg';
import ts from '../src/assets/typescript.svg';
import html from '../src/assets/html.svg';
import css from '../src/assets/css.svg';
import github from '../src/assets/github.svg';
import mysql from '../src/assets/mysql.svg';
import mongodb from '../src/assets/mongodb.svg';
import firebase from '../src/assets/firebase.svg';
import laravel from '../src/assets/laravel.svg';
import inertia from '../src/assets/inertia.svg';
import python from '../src/assets/python.svg';
import ContactForm from './components/ContactForm';
import { Link } from 'react-scroll';
import { Timeline } from './components/Timeline';
import { Pointer } from './components/Pointer';

function MainHome() {
  const words = [
    {
      text: "Full Stack",
      className: "text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500",
    },
  ];

  const languages = [
    "React JS",
    "Next JS",
    "React Native",
    "Python",
    "Laravel",
    "Javascript",
    "Typescript",
    "Inertia JS",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Shopify",
    "Wordpress"
  ];

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

    {
      title: "Github",
      icon: (
        <GitHubIcon className="h-full w-full text-black" />
      ),
      href: "https://github.com/Shankar231",
    },
  ];

  const skills = [
  {
    title: "React JS",
    image: react,
  },
  {
    title: "Next JS",
    image: next,
  },
  {
    title: "React Native",
    image: react,
  },
  {
    title: "Inertia JS",
    image: inertia,
  },
  {
    title: "Laravel",
    image: laravel,
  },
  {
    title: "Python",
    image: python,
  },
  {
    title: "Typescript",
    image: ts,
  },
  {
    title: "MySQL",
    image: mysql,
  },
  {
    title: "MongoDB",
    image: mongodb,
  },
  {
    title: "Firebase",
    image: firebase,
  },
  {
    title: "HTML",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
  {
    title: "Github",
    image: github,
  },
];

  const experience = [
    {
      year: "July 2025 - October 2025",
      title:"Web Developer",
      content:"As a Web Developer promoted for delivering high-quality solutions, I specialize in building dynamic, responsive, and high-performance applications using Inertia.js, React.js, and Laravel. Proficient in creating scalable front-end interfaces, implementing modern UI/UX with Tailwind CSS and Bootstrap, and developing robust backend functionality with seamless API integration. Experienced in client interaction, gathering requirements, and leading projects from conception to deployment. Skilled in performance optimization, clean code practices, and delivering reliable full-stack solutions that align with business goals and enhance user experience."
    },
    {
      year: "August 2024 - June 2025",
      title:"Associate Developer",
      content:"Promoted to Associate Developer for consistently delivering high-quality solutions, I focus on crafting dynamic, responsive, and high-performance web applications using React.js. I excel at building scalable front-end interfaces, designing modern UI/UX with Tailwind CSS and Bootstrap, and applying performance optimization techniques to ensure fast, reliable, and user-friendly experiences that align with business goals."
    },
    {
      year: "May 2023 - July 2024",
      title:"Frontend Developer",
      content:"As a Frontend Developer, I worked on creating user-friendly interfaces using HTML, CSS, JavaScript, Bootstrap, and jQuery, ensuring responsive design, cross-browser compatibility, and smooth user interactions."
    },
    {
      year: "Sept 2021 - Nov 2021",
      title:"Core Java and SQL (Internship)",
      content:"Contributed to developing user interfaces using Core Java. Worked with SQL to manage and query databases for application functionality. Gained hands-on experience in front-end development and integrating it with backend data operations."
    },
  ];
  return (
    <>
      <Pointer className="fill-[#2b7efe]"/>
      <Header/>
        <div className='bg-[#030726]'>
          <div className="relative flex w-full flex-col items-center justify-center h-[100vh]">
            <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[14rem] font-bold tracking-[-0.02em]">
              <ScrollVelocityRow baseVelocity={2} direction={1}>
                {languages.map((language, index) => (
                  <span key={index} className='text-[5rem] lg:text-[20rem] text-[#213547]'>
                    &nbsp;|&nbsp;{language}
                  </span>
                ))}
              </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
          <section className="flex flex-col lg:flex-row md:flex-row w-full items-center justify-between h-screen" id='about_me'>
            <div className='w-[100%] lg:w-[50%]'>
              <div className='px-6 lg:px-14'>
                <FloatingDock mobileClassName="translate-y-20" items={links}/>
                <h1 className='text-3xl text-left text-white'>Hi, I'm <span className='text-[#2b7efe]'>Shankar Manjrekar</span> and I am a passionate <TypewriterEffectSmooth words={words}/></h1>
                <p className='text-[14px] lg:text-xl text-left text-white'>As a Fullstack Developer with 3+ years of experience in building dynamic, responsive, and high-performance applications using Inertia.js, React.js, and Laravel. Proficient in creating scalable front-end interfaces, implementing modern UI/UX with Tailwind CSS and Bootstrap, and developing robust backend functionality with seamless API integration. Skilled in performance optimization, clean code practices, and delivering reliable full-stack solutions that align with business goals and enhance user experience.</p>
                <div className="flex gap-4 mt-2 lg:mt-6">
                  <Link to={"contact"} smooth={true}><ShimmerButton>Hire</ShimmerButton></Link>
                  <a href={ResumePdf} download><ShimmerButton>Download Resume</ShimmerButton></a>
                </div>
              </div>
            </div>
            <div className='w-[100%] lg:w-[50%]'>
              <div className="flex justify-center">
                <div className='h-140 w-90 absolute bg-[#2b7efe]/50 rounded-3xl shadow-4xl blur-3xl'></div>
                <div className='relative'>
                  <img src={Shankar} alt="shankar_manjrekar" className='h-110 lg:h-180 md:h-120'/>
                </div>
              </div>
            </div>
          </section>
          <section className='py-30 bg-black px-14' id='skills'>
            <h2 className='text-4xl text-left text-white leading-none inline-block font-semibold'>Skills</h2>
            <HoverEffect items={skills} />
          </section>
          <section className='py-30 px-6 lg:px-14' id='experience'>
            <h3 className='text-4xl text-left text-white leading-none inline-block font-semibold'>Experience</h3>
            <div className="relative w-full overflow-clip">
              <Timeline data={experience} />
            </div>
          </section>
          <section className='py-30 px-6 lg:px-14' id='contact'>
            <h4 className='text-4xl text-left text-white leading-none inline-block font-semibold'>Contact Me</h4>
            <ContactForm/>
          </section>
        </div>
      <Footer/>
    </>
  )
}

export default MainHome
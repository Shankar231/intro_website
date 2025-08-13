import React from 'react';
import { SmoothCursor } from './components/SmoothCursor';
import { TypewriterEffectSmooth } from './components/TypeWriter';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { ScrollVelocityContainer,ScrollVelocityRow } from './components/ScrollBasedVelocity';
import { ShimmerButton } from './components/ShimmerButton';
import ResumePdf from '../src/assets/Shankar_Manjrekar_cv.pdf';
import Shankar from '../src/assets/Shankar.png';
import { FloatingDock } from './components/SocialLinks';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import { HoverEffect } from './components/CardHoverEffect';
import react from '../src/assets/react.svg';
import ts from '../src/assets/typescript.svg';
import html from '../src/assets/html.svg';
import css from '../src/assets/css.svg';
import github from '../src/assets/github.svg';
import mysql from '../src/assets/mysql.svg';
import php from '../src/assets/php.svg';
import laravel from '../src/assets/laravel.svg';
import inertia from '../src/assets/inertia.svg';
import python from '../src/assets/python.svg';

function MainHome() {
  const words = [
    {
      text: "Web",
      className: "text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500",
    },
  ];

  const languages = [
    "React JS",
    "Fullstack Developer",
    "React Native",
    "PHP",
    "Laravel",
    "Javascript",
    "Typescript",
    "Inertia Js",
    "Node Js",
    "MySQL"
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
    title: "React Js",
    image: react,
  },
  {
    title: "React Native",
    image: react,
  },
  {
    title: "Inertia Js",
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
  return (
    <>
      <SmoothCursor/>
      <Header/>
        <div className='bg-[#030726]'>
          <div className="relative flex w-full flex-col items-center justify-center h-[100vh]">
            <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[14rem] font-bold tracking-[-0.02em]">
              <ScrollVelocityRow baseVelocity={2} direction={1}>
                {languages.map((language, index) => (
                  <span key={index} className='text-[20rem]'>
                    &nbsp;|&nbsp;{language}
                  </span>
                ))}
              </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
          <section className="flex w-full items-center justify-between" id='about_me'>
            <div className='w-[50%]'>
              <div className='px-14'>
                <FloatingDock mobileClassName="translate-y-20" items={links}/>
                <h1 className='text-3xl text-left text-white leading-none'>Hii, I'm <span className='text-blue-500'>Shankar Manjrekar</span> and I am a passionate <TypewriterEffectSmooth words={words}/></h1>
                <p className='text-md text-justify text-white'>As a Web Developer with 2+ years of experience in building dynamic, responsive, and high-performance applications using Inertia.js, React.js, and Laravel. Proficient in creating scalable front-end interfaces, implementing modern UI/UX with Tailwind CSS and Bootstrap, and developing robust backend functionality with seamless API integration. Skilled in performance optimization, clean code practices, and delivering reliable full-stack solutions that align with business goals and enhance user experience.</p>
                <div className="flex gap-4 mt-6">
                  <ShimmerButton>Hire</ShimmerButton>
                  <a href={ResumePdf} download><ShimmerButton>Download Resume</ShimmerButton></a>
                </div>
              </div>
            </div>
            <div className='w-[50%]'>
              <div className="flex justify-center grayscale-90">
                <img src={Shankar} alt="shankar_manjrekar" className='h-160 w-130'/>
              </div>
            </div>
          </section>
          <section className='py-30 h-[100vh] bg-black px-14' id='skills'>
            <h2 className='text-4xl text-left text-white leading-none inline-block font-semibold'>Skills</h2>
            <HoverEffect items={skills} />
          </section>
          <section className='py-30 h-[100vh] px-14' id='contact'>

          </section>
        </div>
      <Footer/>
    </>
  )
}

export default MainHome
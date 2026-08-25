import React from 'react';
import { TypewriterEffectSmooth } from './components/TypeWriter';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { ScrollVelocityContainer,ScrollVelocityRow } from './components/ScrollBasedVelocity';
import { ShimmerButton } from './components/ShimmerButton';
import Shankar from '../src/assets/shankar.png';
import { FloatingDock } from './components/SocialLinks';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import { HoverEffect } from './components/CardHoverEffect';
import react from '../src/assets/react.svg';
import next from '../src/assets/next.svg';
import ts from '../src/assets/typescript.svg';
import html from '../src/assets/html.svg';
import css from '../src/assets/css.svg';
import github from '../src/assets/github.svg';
import git from '../src/assets/git.svg';
import mysql from '../src/assets/mysql.svg';
import mongodb from '../src/assets/mongodb.svg';
import firebase from '../src/assets/firebase.svg';
import laravel from '../src/assets/laravel.svg';
import inertia from '../src/assets/inertia.svg';
import python from '../src/assets/python.svg';
import ContactForm from './components/ContactForm';
import { Link } from 'react-scroll';
import { Timeline } from './components/Timeline';
import credarc from '../src/assets/projects/credarc.png'
import primacred from '../src/assets/projects/primacred.png'
import agents from '../src/assets/projects/agents.png'
import insurath from '../src/assets/projects/insurath.png'
import loanxpress from '../src/assets/projects/loanxpress.png'

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

  const frontend = [
    {
      title: "React JS",
      image: react,
    },
    {
      title: "Next JS",
      image: next,
    },
    {
      title: "Typescript",
      image: ts,
    },
    {
      title: "HTML",
      image: html,
    },
    {
      title: "CSS",
      image: css,
    },
  ];

  const backend = [
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
  ];

  const database = [
    {
      title: "MySQL",
      image: mysql,
    },
    {
      title: "MongoDB",
      image: mongodb,
    },
  ];

  const mobile = [
    {
      title: "React Native",
      image: react,
    },
  ];

  const tools = [
    {
      title: "Git",
      image: git,
    },
    {
      title: "GitHub",
      image: github,
    },
    {
      title: "Firebase",
      image: firebase,
    },
  ];

  const skillSections = [
    {
      title: "Frontend",
      items: frontend,
      cardClass: "sm:col-span-2 lg:col-span-3",
    },
    {
      title: "Backend",
      items: backend,
      cardClass: "sm:col-span-2 lg:col-span-2",
    },
    {
      title: "Database",
      items: database,
      cardClass: "sm:col-span-1 lg:col-span-2",
    },
    {
      title: "Mobile",
      items: mobile,
      cardClass: "sm:col-span-1 lg:col-span-1",
    },
    {
      title: "Tools",
      items: tools,
      cardClass: "sm:col-span-2 lg:col-span-2",
    },
  ];

  const projects = [
    {
      title: "Credarc",
      description: "An India-native ESG platform, already live in production - for listed companies, MSMEs, government, exporters and the value chain behind them.",
      stack: ["React JS","Tailwind CSS","Firebase"],
      image: credarc,
      liveUrl: "https://credarc-new-website.vercel.app/",
      category: "Website",
    },
    {
      title: "Primacred",
      description: "PRIMACRED is a strategic advisory and risk consulting firm helping businesses navigate financial complexity, manage critical risks and build stronger foundations for sustainable growth.",
      stack: ["React JS","Tailwind CSS","Firebase"],
      image: primacred,
      liveUrl: "https://primacred.in/",
      category: "Website",
    },
    {
      title: "Agents Connect",
      description: "India's trusted platform helping insurance agents increase earnings through better payouts, reliable partnerships, and strong backend support.",
      stack: ["React JS", "Tailwind CSS", "Firebase"],
      image: agents,
      liveUrl: "https://agentsconnect.in/",
      category: "Website",
    },
    {
      title: "Insurath",
      description: "Smart insurance coverage designed for every journey.",
      stack: ["Next JS", "Tailwind CSS", "Firebase"],
      image: insurath,
      liveUrl: "https://insurath.com/",
      category: "Website",
    },
    {
      title: "Loanxpress",
      description: "LoanXpress - a digitally enabled flagship platform launched by Beacon Group.",
      stack: ["HTML", "Bootstrap CSS"],
      image: loanxpress,
      liveUrl: "https://loanxpress.com/",
      category: "Website",
    },
  ];

  const experience = [
    {
      year: "Feb 2026 - Present",
      title:"Full Stack Developer",
      content:"Working as a Full Stack Developer with 3+ years of experience in designing, developing, and maintaining scalable web and mobile applications. Skilled in front-end and back-end development, database management, API integration, and application deployment. Focused on building responsive, user-friendly, and high-performance digital solutions tailored to business requirements."
    },
    {
      year: "May 2023 - October 2025",
      title:"Web Developer",
      content:"As a Web Developer promoted for delivering high-quality solutions, I specialize in building dynamic, responsive, and high-performance applications using Inertia.js, React.js, and Laravel. Proficient in creating scalable front-end interfaces, implementing modern UI/UX with Tailwind CSS and Bootstrap, and developing robust backend functionality with seamless API integration. Experienced in client interaction, gathering requirements, and leading projects from conception to deployment. Skilled in performance optimization, clean code practices, and delivering reliable full-stack solutions that align with business goals and enhance user experience."
    },
    {
      year: "Sept 2021 - Nov 2021",
      title:"Core Java and SQL (Internship)",
      content:"Contributed to developing user interfaces using Core Java. Worked with SQL to manage and query databases for application functionality. Gained hands-on experience in front-end development and integrating it with backend data operations."
    },
  ];
  return (
    <>
      {/* <Pointer className="fill-[#2b7efe]"/> */}
      <Header/>
        <div className='bg-[#030726] w-full overflow-x-hidden'>
          <div className="relative flex w-full flex-col items-center justify-center h-[60vh] sm:h-[80vh] lg:h-[100vh] overflow-hidden">
            <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[14rem] font-bold tracking-[-0.02em]">
              <ScrollVelocityRow baseVelocity={2} direction={1}>
                {languages.map((language, index) => (
                  <span key={index} className='text-[3rem] sm:text-[5rem] lg:text-[20rem] text-[#213547]'>
                    &nbsp;|&nbsp;{language}
                  </span>
                ))}
              </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>

          <section className="w-full min-h-screen py-16 lg:py-0 overflow-hidden" id='about_me'>
            <div className='w-full px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 min-h-screen'>
              <div className='w-full lg:w-[50%] order-2 lg:order-1 text-left'>
                <FloatingDock items={links}/>
                <h1 className='text-2xl sm:text-3xl text-left text-white leading-snug'>Hi, I'm <span className='text-[#2b7efe]'>Shankar Manjrekar</span> and I am a passionate <TypewriterEffectSmooth words={words}/></h1>
                <p className='text-sm sm:text-[14px] lg:text-xl text-left text-white mt-2'>I’m a Full Stack Developer with 3+ years of experience in designing, developing, and maintaining scalable web and mobile applications. My expertise includes front-end and back-end development, database management, API integration, and application deployment. I specialize in building responsive, user-friendly, and performance-driven digital solutions tailored to business needs.</p>
                <div className="flex gap-4 mt-4 lg:mt-6">
                  <Link to={"contact"} smooth={true}><ShimmerButton>Hire for Freelance</ShimmerButton></Link>
                </div>
              </div>
              <div className="w-full lg:w-[50%] order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative flex justify-center items-center scale-[0.62] sm:scale-[0.78] md:scale-90 lg:scale-100 origin-center">
                  <div className="absolute h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />
                  <div className="absolute top-20 right-10 h-52 w-52 rounded-full bg-blue-700/30 blur-3xl" />
                  <div className="absolute h-[520px] w-[450px] rounded-[40px] bg-gradient-to-b from-cyan-400 via-[#084E75] to-transparent p-[2px] animate-spin-slow">
                    <div className="h-full w-full rounded-[40px] bg-black" />
                  </div>
                  <div
                    className="absolute h-[500px] w-[320px] rounded-[40px] opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10">
                    <img
                      src={Shankar}
                      alt="shankar_manjrekar"
                      className="h-110 md:h-120 lg:h-130 max-w-none drop-shadow-[0_20px_60px_rgba(8,78,117,0.8)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-black' id='skills'>
            <div className='pointer-events-none absolute inset-0'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(43,126,254,0.16),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(6,182,212,0.14),transparent_30%)]' />
              <div
                className='absolute inset-0 opacity-20'
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(118,180,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(118,180,255,0.18) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
            <div className='relative z-10 w-full px-4 sm:px-6 lg:px-24'>
              <div className='text-left'>
                <p className='text-xs tracking-[0.22em] uppercase text-[#9dc0ff]'>Core Expertise</p>
                <h2 className='text-3xl sm:text-4xl text-left text-white leading-none inline-block font-semibold mt-2'>Skills</h2>
              </div>

              <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 auto-rows-fr'>
                {skillSections.map((section) => (
                  <div
                    key={section.title}
                    className={`rounded-2xl border border-slate-600/70 bg-[#060b2f]/70 backdrop-blur-sm p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${section.cardClass}`}
                  >
                    <div className='h-1 w-14 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300 mb-4' />
                    <div className='flex items-start justify-between gap-3'>
                      <h3 className='text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-left'>{section.title}</h3>
                    </div>
                    <HoverEffect items={section.items} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className='relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-[#020617]' id='projects'>
            <div className='pointer-events-none absolute inset-0'>
              <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-[#2b7efe]/15 blur-3xl' />
              <div className='absolute bottom-10 left-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl' />
            </div>

            <div className='relative z-10 w-full px-4 sm:px-6 lg:px-24'>
              <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 text-left'>
                <div>
                  <p className='text-xs tracking-[0.22em] uppercase text-[#9dc0ff]'>Selected Work</p>
                  <h3 className='text-3xl sm:text-4xl text-white leading-none font-semibold mt-2'>Projects</h3>
                </div>
                <p className='text-slate-400 text-sm max-w-md sm:text-right'>
                  Built with performance, clarity, and production-ready UX in mind.
                </p>
              </div>

              <div className='mt-10 flex flex-col gap-6 lg:gap-8'>
                {projects.map((project, index) => {
                  const isReversed = index % 2 === 1;
                  return (
                    <article
                      key={project.title}
                      className='group overflow-hidden rounded-2xl border border-slate-700/70 bg-[#070d24]/90'
                    >
                      <div className={`grid grid-cols-1 lg:grid-cols-16 ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                        <div className='relative lg:col-span-7 h-52 sm:h-64 lg:h-auto min-h-[240px] overflow-hidden'>
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-[#070d24] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#070d24]/40' />
                          <span className='absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] tracking-wider uppercase text-cyan-100 backdrop-blur-md'>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className='lg:col-span-9 flex flex-col justify-center p-5 sm:p-7 lg:p-8 text-left'>
                          <div className='flex flex-wrap items-center gap-2'>
                            <span className='rounded-full border border-[#2b7efe]/40 bg-[#2b7efe]/10 px-3 py-1 text-[11px] tracking-wider uppercase text-[#9dc0ff]'>
                              {project.category}
                            </span>
                          </div>
                          <h4 className='mt-3 text-xl sm:text-2xl font-semibold text-white'>{project.title}</h4>
                          <p className='mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl'>
                            {project.description}
                          </p>
                          <div className='mt-5 flex flex-wrap gap-2'>
                            {project.stack.map((tech) => (
                              <span key={tech} className='rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-300'>
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className='mt-6 flex items-center justify-between gap-4 border-t border-slate-800 pt-4'>
                            <a
                              href={project.liveUrl}
                              target='_blank'
                              rel='noreferrer'
                              className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#2b7efe] hover:text-white'
                            >
                              View Project
                              <span aria-hidden><ArrowRightAltIcon/></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className='py-16 sm:py-20 lg:py-28' id='experience'>
            <div className='w-full px-4 sm:px-6 lg:px-24'>
              <div className='text-left'>
                <p className='text-xs tracking-[0.22em] uppercase text-[#9dc0ff]'>Experience</p>
                <h5 className='text-3xl sm:text-4xl text-left text-white leading-none inline-block font-semibold mt-2'>Experience</h5>
              </div>
              <div className="relative w-full overflow-clip mt-4">
                <Timeline data={experience} />
              </div>
            </div>
          </section>

          <section className='py-16 sm:py-20 lg:py-28' id='contact'>
            <div className='w-full px-4 sm:px-6 lg:px-24'>
              <div className='text-left'>
                <p className='text-xs tracking-[0.22em] uppercase text-[#9dc0ff]'>Get In Touch</p>
                <h5 className='text-3xl sm:text-4xl text-left text-white leading-none inline-block font-semibold mt-2'>Contact Me</h5>
              </div>
              <ContactForm/>
            </div>
          </section>
        </div>
      <Footer/>
    </>
  )
}

export default MainHome
import React from 'react';
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
import git from '../src/assets/git.svg';
import mysql from '../src/assets/mysql.svg';
import mongodb from '../src/assets/mongodb.svg';
import firebase from '../src/assets/firebase.svg';
import laravel from '../src/assets/laravel.svg';
import inertia from '../src/assets/inertia.svg';
import python from '../src/assets/python.svg';
import projectPreviewTech from '../src/assets/project_preview_tech_alt.jpg';
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
      cardClass: "md:col-span-3",
    },
    {
      title: "Backend",
      items: backend,
      cardClass: "md:col-span-2",
    },
    {
      title: "Database",
      items: database,
      cardClass: "md:col-span-2",
    },
    {
      title: "Mobile",
      items: mobile,
      cardClass: "md:col-span-1",
    },
    {
      title: "Tools",
      items: tools,
      cardClass: "md:col-span-2",
    },
  ];
  const totalSkills = skillSections.reduce((acc, section) => acc + section.items.length, 0);

  const projects = [
    {
      title: "Beacon Website",
      description: "Short description about your innovative project and the problem it solves.",
      stack: ["HTML",'CSS', "Laravel", "PHPMySQL"],
      image: projectPreviewTech,
      liveUrl: "https://beacontrustee.co.in/",
    },
    {
      title: "Project Two",
      description: "Add what makes this project unique, fast, or useful for end users.",
      stack: ["Next.js", "Firebase", "Tailwind CSS"],
      image: projectPreviewTech,
      liveUrl: "#",
    },
    {
      title: "Project Three",
      description: "Highlight key features, performance improvements, or business impact.",
      stack: ["React Native", "Node.js", "MongoDB"],
      image: projectPreviewTech,
      liveUrl: "#",
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
                <p className='text-[14px] lg:text-xl text-left text-white'>I’m a Full Stack Developer with 3+ years of experience in designing, developing, and maintaining scalable web and mobile applications. My expertise includes front-end and back-end development, database management, API integration, and application deployment. I specialize in building responsive, user-friendly, and performance-driven digital solutions tailored to business needs.</p>
                <div className="flex gap-4 mt-2 lg:mt-6">
                  <Link to={"contact"} smooth={true}><ShimmerButton>Hire for Freelance</ShimmerButton></Link>
                </div>
              </div>
            </div>
           <div className="w-[100%] lg:w-[50%]">
            <div className="relative flex justify-center items-center">

              {/* Gradient Glow */}
              <div className="absolute h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />

              {/* Secondary Glow */}
              <div className="absolute top-20 right-10 h-52 w-52 rounded-full bg-blue-700/30 blur-3xl" />

              {/* Rotating Border */}
              <div className="absolute h-[520px] w-[450px] rounded-[40px] bg-gradient-to-b from-cyan-400 via-[#084E75] to-transparent p-[2px] animate-spin-slow">
                <div className="h-full w-full rounded-[40px] bg-black" />
              </div>

              {/* Grid Background */}
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

              {/* Image */}
              <div className="relative z-10">
                <img
                  src={Shankar}
                  alt="shankar_manjrekar"
                  className="h-110 md:h-120 lg:h-130 drop-shadow-[0_20px_60px_rgba(8,78,117,0.8)]"
                />
              </div>
            </div>
          </div>
          </section>
          <section className='relative overflow-hidden py-30 px-6 lg:px-14 bg-black' id='skills'>
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
            <div className='relative z-10'>
              <div className='p-6 lg:p-8 shadow-[0_10px_30px_rgba(2,8,23,0.45)]'>
                <p className='text-xs tracking-[0.22em] uppercase text-[#9dc0ff]'>Core Expertise</p>
                <h2 className='text-4xl text-left text-white leading-none inline-block font-semibold mt-2'>Skills</h2>
              </div>

              <div className='mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-fr'>
                {skillSections.map((section) => (
                  <div
                    key={section.title}
                    className={`rounded-2xl border border-slate-600/70 bg-[#060b2f]/70 backdrop-blur-sm p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${section.cardClass}`}
                  >
                    <div className='h-1 w-14 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300 mb-4' />
                    <div className='flex items-start justify-between gap-3'>
                      <h3 className='text-white text-xl font-semibold mb-6'>{section.title}</h3>
                    </div>
                    <HoverEffect items={section.items} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* <section className='relative overflow-hidden py-30 px-6 lg:px-14 bg-black' id='projects'>
            <div className='pointer-events-none absolute inset-0'>
              <div className='absolute top-24 right-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl' />
              <div className='absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl' />
              <div
                className='absolute inset-0 opacity-20'
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(93,165,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(93,165,255,0.22) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <span className='blossom-top blossom-top-a' />
              <span className='blossom-top blossom-top-b' />
              <span className='blossom-top blossom-top-c' />
              <span className='blossom-top blossom-top-d' />
              <span className='blossom-top blossom-top-e' />
              <span className='blossom blossom-a' />
              <span className='blossom blossom-b' />
              <span className='blossom blossom-c' />
              <span className='blossom blossom-d' />
              <span className='blossom blossom-e' />
              <span className='blossom blossom-f' />
              <span className='blossom blossom-g' />
              <span className='blossom blossom-h' />
              <span className='blossom blossom-i' />
              <span className='blossom blossom-j' />
              <span className='blossom blossom-k' />
              <span className='blossom blossom-l' />
              <span className='blossom blossom-m' />
              <span className='blossom blossom-n' />
              <span className='blossom blossom-o' />
              <span className='blossom-top blossom-top-a' />
              <span className='blossom-top blossom-top-b' />
              <span className='blossom-top blossom-top-c' />
              <span className='blossom-top blossom-top-d' />
              <span className='blossom-top blossom-top-e' />
            </div>
            <div className='relative z-10'>
              <p className='text-xs tracking-[0.22em] uppercase text-[#9dc0ff]'>Innovative Projects</p>
              <h3 className='text-4xl text-left text-white leading-none inline-block font-semibold mt-2'>Projects</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8'>
              {projects.map((project) => (
                <div
                  key={project.title}
                  className='group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#040712] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_20px_45px_rgba(8,145,178,0.25)]'
                >
                  <div className='pointer-events-none absolute -inset-24 bg-[radial-gradient(circle,rgba(56,189,248,0.20)_0%,rgba(56,189,248,0)_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                  <div className='absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-blue-400 to-indigo-400 opacity-90' />
                  <div className='relative'>
                    <div className='relative h-44 w-full overflow-hidden border-b border-slate-700/80 bg-slate-900'>
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent' />
                      <div className='absolute right-3 top-3 rounded-full border border-cyan-300/40 bg-[#050d2c]/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-cyan-200 backdrop-blur-sm'>
                        {project.title}
                      </div>
                    </div>

                    <div className='p-5'>
                      <p className='text-[11px] tracking-[0.18em] uppercase text-cyan-200/90'>Case Study</p>
                      <h4 className='mt-2 text-white text-xl font-semibold leading-tight group-hover:text-cyan-100 transition-colors duration-300'>{project.title}</h4>
                      <p className='mt-3 text-slate-300 text-sm leading-relaxed min-h-[64px]'>{project.description}</p>

                      <div className='mt-4 flex flex-wrap gap-2'>
                      {project.stack.map((tech) => (
                        <span key={tech} className='rounded-full border border-slate-600/90 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-200'>
                          {tech}
                        </span>
                      ))}
                      </div>

                      <div className='mt-5 flex items-center justify-between border-t border-slate-700/80 pt-4'>
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noreferrer'
                          className='inline-flex items-center justify-center rounded-md bg-gradient-to-r from-white to-slate-200 px-3 py-2 text-sm font-semibold text-black transition-all duration-300 hover:from-cyan-200 hover:to-white'
                        >
                          View Project
                        </a>
                        <span className='text-xs tracking-wider uppercase text-slate-300 group-hover:text-cyan-200 transition-colors duration-300'>Live Site</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section> */}
          <section className='py-30 px-6 lg:px-14' id='experience'>
            <p className='text-xs tracking-[0.22em] uppercase text-[#9dc0ff]'>Experience</p>
            <h5 className='text-4xl text-left text-white leading-none inline-block font-semibold mt-2'>Experience</h5>
            <div className="relative w-full overflow-clip">
              <Timeline data={experience} />
            </div>
          </section>
          <section className='py-30 px-6 lg:px-14' id='contact'>
            <h5 className='text-4xl text-left text-white leading-none inline-block font-semibold'>Contact Me</h5>
            <ContactForm/>
          </section>
        </div>
      <Footer/>
    </>
  )
}

export default MainHome
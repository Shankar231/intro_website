import React from 'react';
import { SmoothCursor } from './components/SmoothCursor';
import { TypewriterEffectSmooth } from './components/TypeWriter';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { ScrollVelocityContainer,ScrollVelocityRow } from './components/ScrollBasedVelocity';

function MainHome() {
  const words = [
    {
      text: "Fullstack",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const languages = [
    "React JS",
    "Fullstack Developer",
    "React Native",
    "PHP",
    "Laravel",
    "JavaScript",
    "Node Js",
    "MySQL",
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
          <div className="flex h-[30rem] w-full items-center justify-between">
            <div className='w-[50%]'>
              <div className='px-14'>
                <h1 className='text-3xl text-left text-white leading-none inline-block'>Hii, My Name is Shankar and I am a passionate <TypewriterEffectSmooth words={words}/></h1>
                
              </div>
            </div>
            <div className='w-[50%]'>

            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default MainHome
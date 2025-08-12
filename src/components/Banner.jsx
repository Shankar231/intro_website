import React from 'react';
import { HeroHighlight } from './HeroHiglight';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { AnimatedShinyText } from './TextAnimate';

function Banner({head,tag_one,tag_two,img,className}) {
  return (
    <HeroHighlight>
        <div className="flex w-[90%]">
            <div className="w-[65%] flex flex-col justify-center">
                <div className="z-10 flex items-center">
                    <div
                        className={cn(
                        "group rounded-full border border-black/5 text-base text-white transition-all ease-in border-white/5 bg-violet-900 hover:bg-violet-500",
                        )}
                    >
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-200 hover:duration-300">
                        <span>{head}</span>
                        </AnimatedShinyText>
                    </div>
                </div>
                <motion.h1
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-[60px] font-bold text-left text-white"
                ><span className='text-shadow-lg'>{tag_one}</span><br/><span className="bg-gradient-to-br from-blue-500 to-purple-900 bg-clip-text text-transparent">{tag_two}</span></motion.h1>
            </div>
            <div className="flex justify-center">
                <img src={img} alt="Banner Img" className={className}/>
            </div>
        </div>
    </HeroHighlight>
  )
}

export default Banner
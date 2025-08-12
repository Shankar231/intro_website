"use client";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  const cardLength = data.length;

  // Add active card detection based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = data.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-neutral-950 font-sans lg:px-40 md:px-4" ref={containerRef}>
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
                <div key={index} className="flex justify-start py-10 md:py-40 md:gap-20">
                    <div className="sticky flex flex-col md:flex-row z-40 items-center top-30 self-start max-w-xs lg:max-w-sm md:w-full">
                        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                            <motion.div 
                                className="h-1 lg:h-4 md:h-4 w-1 lg:w-4 md:w-4 rounded-full border border-neutral-300 dark:border-neutral-700 p-1 lg:p-2 md:p-2"
                                animate={{
                                    backgroundColor: activeCard === index ? "#8b5cf6" : "#e5e5e5",
                                    scale: activeCard === index ? 1.2 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <div className="sticky top-100 lg:top-30 md:top-30 pl-20 lg:pl-0 md:pl-0">
                            <motion.h3 
                                className="text-lg lg:text-4xl md:text-3xl md:pl-20 font-bold text-neutral-500 dark:text-neutral-500"
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.5,
                                    scale: activeCard === index ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.title}
                            </motion.h3>
                            {item.list && item.list.length > 0 && (
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                    className="mt-4 text-slate-300 space-y-2 text-left text-xs lg:text-lg md:text-md md:pl-20 list-disc list-inside text-nowrap"
                                >
                                    {item.list.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            {point}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </div>
                    </div>

                    <div className="relative pr-4 pl-0 lg:pl-20 md:pl-4 w-full">
                        <motion.div
                            animate={{
                                y: [0, -20, 0], // up and down
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                            className="flex justify-center"
                        >
                            {item.content}
                        </motion.div>
                    </div>
                </div>
            ))}
            <div
                style={{
                    height: height + "px",
                }}
                className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
                <motion.div
                    style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                    }}
                    className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                />
            </div>
        </div>
    </div>
  );
};
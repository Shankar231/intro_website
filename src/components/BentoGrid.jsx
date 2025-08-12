import React from "react";
import { cn } from "../lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.webp";
import ssl from "../assets/ssl.webp";
import http from "../assets/http.webp";
import data from '../assets/data.webp'
import token from "../assets/token.webp";
import { ThreeDMarquee } from "./3DMarquee";
import imgOne from '../assets/loan_1.webp'
import imgTwo from '../assets/loan_2.webp'
import imgThree from '../assets/loan_3.webp'
import imgFour from '../assets/loan_4.webp'
import imgFive from '../assets/covenant_1.webp'
import imgSix from '../assets/covenant_2.webp'
import imgSeven from '../assets/covenant_3.webp'
import imgEight from '../assets/covenant_4.webp'

export function FeaturesSectionDemo() {
const features = [
    {
        title: "Customizable Dashboards",
        description:
        "Create personalized dashboards to monitor key performance indicators (KPIs) and track important metrics at a glance.",
        skeleton: <SkeletonOne />,
        className:
        "col-span-1 lg:col-span-4 border-b border-r border-neutral-600",
        id: 1,
    },
    {
        title: "Advanced Security Features",
        description:
        "Protect sensitive financial data with robust security measures, including encryption, multi-factor authentication, and role-based access control.",
        skeleton: <SkeletonTwo />,
        className:
        "col-span-1 lg:col-span-2 border-b border-neutral-600",
        id: 2,
    },
    {
        title: "Real-Time Data Analytics",
        description:
        "Gain actionable insights into your financial performance with real-time data analysis, enabling informed decision-making.",
        skeleton: <SkeletonThree />,
        className:
        "col-span-1 lg:col-span-3 border-r border-b border-neutral-600",
        id: 3,
    },
    {
        title: "Scalable Architecture",
        description:
        "Architecture that scales as you grow, while maintaining strict security and compliance standards",
        skeleton: <SkeletonFour />,
        className:
        "col-span-1 lg:col-span-3 border-b border-neutral-600",
        id: 4,
    },
    {
        title: "User-Friendly Interface",
        description:
        "A clean, responsive design ensures teams can access what they need, when they need it — without getting lost in technical clutter.",
        skeleton: <SkeletonFive />,
        className:
        "col-span-1 lg:col-span-6",
        id: 5,
    },
];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h5 className="text-lg lg:text-4xl md:text-3xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-white">
          What Sets Us Apart
        </h5>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          We Create Your Unique Online Websites
        </p>
      </div>
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-600">
            {features.map((feature) => (
                <FeatureCard key={feature.id} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className=" h-full w-full">{feature.skeleton}</div>
                </FeatureCard>
            ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    <p className="text-left tracking-tight font-bold text-white text-md lg:text-xl md:text-lg md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    <p
      className={cn(
        "lg:text-md md:text-base max-w-5xl text-left",
        "text-center font-normal text-neutral-200",
        "text-left mx-0 md:text-sm text-sm my-2"
      )}>
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div
        className="w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* TODO */}
          <img src={dashboard} alt="header" className="lg:h-full lg:w-full md:h-90 aspect-square object-cover object-left-top rounded-sm" />
        </div>
      </div>
      <div
        className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
      <div
        className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    ssl,token,http
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div
      className="relative flex flex-col lg:items-start md:items-center p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row lg:-ml-20 md:ml-0">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden">
            <img src={image} alt="images" width="500" height="500" className="rounded-lg lg:h-40 md:h-30 lg:w-40 md:w-30 object-cover shrink-0"/>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden">
            <img
              src={image}
              alt="images"
              width="500"
              height="500"
              className="rounded-lg lg:h-40 md:h-30 lg:w-40 md:w-30 object-cover shrink-0" />
          </motion.div>
        ))}
      </div>
      <div
        className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent  h-full pointer-events-none" />
      <div
        className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 justify-center w-full space-y-2 relative">
            <img src={data} alt="header" className="lg:h-140 md:h-90 sm:h-60 aspect-square rounded-sm transition-all duration-200" />
        </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div
      className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      {/* <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" /> */}
    </div>
  );
};

export const SkeletonFive = () => {
    const images = [
      imgOne,
      imgTwo,
      imgThree,
      imgFour,
      imgFive,
      imgSix,
      imgSeven,
      imgEight,
      imgOne,
      imgTwo,
      imgThree,
      imgFour,
      imgFive,
      imgSix,
      imgSeven,
      imgEight,
      imgOne,
      imgTwo,
      imgThree,
      imgFour,
      imgFive,
      imgSix,
      imgSeven,
      imgEight,
      imgOne,
      imgTwo,
      imgThree,
      imgFour,
      imgFive,
      imgSix,
      imgSeven,
      imgEight,
  ];
  return (
    <div className="mx-auto mt-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
       <ThreeDMarquee images={images} />
    </div>
  );
};
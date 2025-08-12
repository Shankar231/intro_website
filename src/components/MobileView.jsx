import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import logo from '../assets/codium_new.webp'

const Example = ({contact}) => {
  return (
    <section className="grid place-content-center p-12">
      <FloatingPhone contact={contact}/>
    </section>
  );
};

const FloatingPhone = ({contact}) => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-[#6451C3]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-70 lg:h-96 md:h-70 w-40 lg:w-56 md:w-40 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen contact={contact}/>
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-10 lg:w-16 md:w-10 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = ({contact}) => {
  return (
      <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <img src={logo} alt="codium-logo" className="lg:h-10 md:h-8 h-8" />
      <div className="absolute -bottom-72 left-[50%] h-96 w-100 -translate-x-[50%] rounded-full bg-[#6451C3]" />
      <a href={contact}>
        <button className="absolute bottom-4 left-4 right-4 z-10 rounded-full bg-black lg:px-3 md:px-2 px-1 lg:py-2 md:py-1 shadow-2xl text-white">
          Connect With Us
        </button>
      </a>
    </div>
  );
};

export default Example;
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useOutsideClick } from "../components/ui/useOutsideClick";
import simplycompyimg from "../../src/assets/Portalbanners/simplycompyimg.webp";
import rtabanner from "../../src/assets/Portalbanners/rtabanner.webp";
import loanxpress from "../../src/assets/Portalbanners/loanxpress.webp";
import wasiyatt from "../../src/assets/Portalbanners/wasiyatt.webp";
import beacontrusteeship from "../../src/assets/Portalbanners/beacontrusteeship.webp";


const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: simplycompyimg,
    ctaText: "Visit",
    ctaLink: "/saascompliance",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style...
      </p>
    ),
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: rtabanner,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: loanxpress,
    ctaText: "Visit",
    ctaLink: "/loanxpress",
    content: () => (
      <p>
        Metallica, an iconic American heavy metal band, is renowned for their powerful sound and intense performances...
      </p>
    ),
  },
  {
    description: "Lord",
    title: "Aap Ka Suroor",
    src: beacontrusteeship,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/",
    content: () => (
      <p>
        Himesh Reshammiya, a renowned Indian music composer, singer, and actor...
      </p>
    ),
  },
  {
    description: "Lord Himesh",
    title: "test",
    src: wasiyatt,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Himesh Reshammiya is celebrated for his distinctive voice and innovative compositions...
      </p>
    ),
  },
];

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[650px] mt-[7em] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 "
                />
              </motion.div>

              <div className="overflow-y-auto">
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <AnimatedCard
            key={card.title}
            card={card}
            index={index}
            setActive={setActive}
            layoutIdPrefix={id}
          />
        ))}
      </ul>
    </>
  );
}

const AnimatedCard = ({ card, index, setActive, layoutIdPrefix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${card.title}-${layoutIdPrefix}`}
      onClick={() => setActive(card)}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
    >
      <div className="flex gap-4 flex-col w-full">
        <motion.div layoutId={`image-${card.title}-${layoutIdPrefix}`}>
          <img
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="h-60 w-full rounded-lg "
          />
        </motion.div>
        <div className="flex justify-center items-center flex-col">
          <motion.h3
            layoutId={`title-${card.title}-${layoutIdPrefix}`}
            className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${layoutIdPrefix}`}
            className="text-neutral-600 dark:text-neutral-400 text-center text-base"
          >
            {card.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

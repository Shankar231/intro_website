import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousel = ({cards}) => {
  return (
    <div className="bg-[#fff]">
        <HorizontalScrollCarousel cards={cards}/>
    </div>
  );
};

const HorizontalScrollCarousel = ({cards}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-82%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-[80vh] flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
        {cards.map((card) => {
            return <Card card={card} key={card.id} />;
        })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group relative h-[15em] lg:h-[15em] md:h-[15em] w-[300px] lg:w-[450px] md:w-[450px] overflow-hidden bg-indigo-800 shadow-lg rounded-4xl">
      <div className="p-8 absolute inset-0 z-10">
        <h5 className="text-md lg:text-xl md:text-xl text-white font-bold h-10 text-nowrap">
          {card.title}
        </h5>
        <p className="text-sm lg:text-md md:text-md text-white text-md text-justify">{card.text}</p>
      </div>
    </div>
  );
};

export default Carousel;
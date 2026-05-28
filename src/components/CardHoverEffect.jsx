import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title ?? idx}
          className="relative group block w-[128px]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-b from-[#1f2f6d]/80 to-[#0a1238]/80 block"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.05 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <img src={item.image} alt={item.title} className={cn("h-12 w-12 object-contain mx-auto", item.className)} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full min-h-[128px] px-3 py-3 overflow-hidden bg-[#050a24]/85 group-hover:border-[#7da7ff]/50 relative z-20 border border-slate-700/80 transition-colors duration-300",
        className
      )}>
      <div className="relative z-50 flex h-full justify-center">
        <div className="flex h-full flex-col items-center justify-between gap-3">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    <p className={cn("text-white text-xs font-semibold tracking-wide text-center leading-tight min-h-[34px] flex items-center justify-center", className)}>
      {children}
    </p>
  );
};
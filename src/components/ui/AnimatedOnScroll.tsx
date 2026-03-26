import { useRef } from "react";
import { useInView, motion, type MotionProps } from "framer-motion";

interface AnimatedOnScrollProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export const AnimatedOnScroll = ({
  children,
  className = "",
  threshold = 0.3,
  delay = 0,
  ...motionProps
}: AnimatedOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true, amount: threshold }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

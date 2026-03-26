import { motion, type MotionProps } from "framer-motion";

interface AnimatedOnScrollProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}

export const AnimatedOnScroll = ({
  children,
  className = "",
  threshold = 0.2,
  delay = 0,
  direction = "up",
  ...motionProps
}: AnimatedOnScrollProps) => {
  const getInitialProps = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -70, y: 0 };
      case "right":
        return { opacity: 0, x: 70, y: 0 };
      case "down":
        return { opacity: 0, x: 0, y: -70 };
      case "up":
      default:
        return { opacity: 0, x: 0, y: 70 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialProps()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98], 
        delay 
      }}
      viewport={{ once: true, amount: threshold }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getDirectionalVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    switch (direction) {
      case "up":
        return {
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "down":
        return {
          hidden: { ...baseVariants.hidden, y: -distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "left":
        return {
          hidden: { ...baseVariants.hidden, x: distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "right":
        return {
          hidden: { ...baseVariants.hidden, x: -distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      default:
        return baseVariants;
    }
  };

  // During SSR, render without animations
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getDirectionalVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

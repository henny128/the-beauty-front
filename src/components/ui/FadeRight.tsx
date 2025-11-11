import { motion } from "motion/react";
import type { JSX } from "react";

type FadeRightProps = {
    children: JSX.Element;
    className?: string;
    key?: string;
}

export default function FadeRight({children,className,key}:FadeRightProps) {

  return (
      <motion.div
          key={key}
          className={className}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      >
          {children}
      </motion.div>
  )
}

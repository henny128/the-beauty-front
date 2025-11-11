import { motion } from "motion/react";
import type { JSX } from "react";

type FadeLeftProps = {
    children: JSX.Element;
    className?: string;
    key?: string;
}

export default function FadeLeft({children,className,key}:FadeLeftProps) {

  return (
      <motion.div
          key={key}
          className={className}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      >
          {children}
      </motion.div>
  )
}

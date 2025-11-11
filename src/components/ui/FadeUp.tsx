import { motion } from "motion/react";
import type { JSX } from "react";

type FadeUpProps = {
    children: JSX.Element;
    className?: string;
    key?: string;
}

export default function FadeUp({ children, className, key }: FadeUpProps) {
    return (
        <motion.div
            key={key}
            className={className}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

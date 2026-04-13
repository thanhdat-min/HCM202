import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 font-display text-4xl leading-tight text-museum-cream md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-museum-cream/72 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

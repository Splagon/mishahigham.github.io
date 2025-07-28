import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.0,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

type SequentialParagraphsProps = {
  lines: string[];
  className?: string;
};

export default function SequentialParagraphsText({ lines, className }: SequentialParagraphsProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {lines.map((line, idx) => (
        <motion.p key={idx} variants={item}>
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

type MainTitleProps = {
  children: React.ReactNode;
};

export default function MainTitle({ children }: MainTitleProps) {
  return (
    <motion.h1
      className="text-5xl font-extrabold text-center text-white mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      {children}
    </motion.h1>
  );
}

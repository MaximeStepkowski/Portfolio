'use client';

import { motion } from 'framer-motion';

type MainTitleProps = {
  children: React.ReactNode;
};

export default function MainTitle({ children }: MainTitleProps) {
  return (
    <motion.h1
      className="text-5xl font-extrabold text-center text-black mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.h1>
  );
}

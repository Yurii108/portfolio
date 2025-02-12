'use client';

import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

interface Props {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const SlideUp = ({ children, delay = 0, duration = 0.5, className = '' }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration, delay }}
      className={`relative opacity-0 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;

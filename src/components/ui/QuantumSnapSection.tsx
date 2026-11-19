import React from 'react';
import { motion } from 'framer-motion';

interface QuantumSnapSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const QuantumSnapSection: React.FC<QuantumSnapSectionProps> = ({
  children,
  id,
  className = '',
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full overflow-visible my-3 sm:my-6 ${className}`}
    >
      <div className="relative w-full overflow-visible">
        {children}
      </div>
    </motion.section>
  );
};

import React from 'react';

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
    <div
      id={id}
      className={`relative w-full overflow-visible my-3 sm:my-6 ${className}`}
    >
      <div className="relative w-full overflow-visible">
        {children}
      </div>
    </div>
  );
};

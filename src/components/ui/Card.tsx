import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  padding = 'md',
  shadow = 'sm',
  hover = false,
  clickable = false,
  onClick,
}: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  };

  const shadows = {
    none: '',
    sm: 'shadow-soft',
    md: 'shadow-medium',
    lg: 'shadow-large'
  };

  return (
    <motion.div
      whileHover={hover || clickable ? { y: -2, scale: 1.01 } : undefined}
      whileTap={clickable ? { scale: 0.99 } : undefined}
      className={clsx(
        'bg-white rounded-xl border border-gray-100',
        paddings[padding],
        shadows[shadow],
        clickable && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

interface AnimatedIconProps {
  icon: React.ReactNode;
  className?: string;
}

export function AnimatedIcon({ icon, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon}
    </motion.div>
  );
} 
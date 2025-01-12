"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePreventScroll } from "@/hooks/usePreventScroll";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  usePreventScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-2 top-2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Fechar vídeo"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
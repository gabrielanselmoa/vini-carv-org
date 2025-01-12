"use client";

import { AnimatedIcon } from "@/components/ui/animated-icon";
import { MessageCircle } from "lucide-react";

export function FloatingButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatedIcon
        icon={
          <div className="bg-green-500 text-white p-4 rounded-full shadow-lg">
            <MessageCircle size={24} />
          </div>
        }
      />
    </a>
  );
}

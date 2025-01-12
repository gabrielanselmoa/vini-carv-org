"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { VolunteerModal } from "@/components/ui/volunteer-modal";
import { DonationModal } from "@/components/ui/donation-modal";

export default function Hero() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <section className="relative h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-600/40" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full"
        >
          <span className="text-blue-100 text-lg md:text-xl mb-4 block font-medium">
            Associação Vinícius Carvalheido
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-lg">
            Transformando Sonhos em Realidade
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-white/95 max-w-2xl drop-shadow">
            Desde 2018, a Associação Vinícius Carvalheido tem se dedicado a
            levar esperança e dignidade para famílias em situação de
            vulnerabilidade social, através de ações que transformam vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto text-base sm:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsDonationModalOpen(true)}
            >
              Faça uma Doação <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto text-base sm:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsVolunteerModalOpen(true)}
            >
              Seja Voluntário
            </Button>
          </div>
        </motion.div>
      </div>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </section>
  );
}

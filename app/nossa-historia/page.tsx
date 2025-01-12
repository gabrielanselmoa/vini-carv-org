"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import { DonationModal } from "@/components/ui/donation-modal";
import { VolunteerModal } from "@/components/ui/volunteer-modal";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FloatingButton } from "@/components/ui/floating-button";
import { Footer } from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

const historicalPhotos = [
  {
    url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
    year: "2018",
    description: "Primeira ação social realizada",
    title: "O Início da Jornada",
  },
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    year: "2019",
    description: "Início do projeto Alimentação Solidária",
    title: "Expandindo Horizontes",
  },
  {
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    year: "2020",
    description: "Expansão para novas comunidades",
    title: "Crescimento e Impacto",
  },
  {
    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    year: "2021",
    description: "Inauguração da sede própria",
    title: "Nossa Nova Casa",
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    year: "2022",
    description: "Lançamento do programa educacional",
    title: "Educação Transformadora",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Fundação",
    description: "Início das atividades com distribuição de alimentos",
    impact: "50 famílias atendidas",
  },
  {
    year: "2019",
    title: "Primeiro Projeto Estruturado",
    description: "Lançamento do programa Alimentação Solidária",
    impact: "200 famílias beneficiadas",
  },
  {
    year: "2020",
    title: "Expansão Territorial",
    description: "Alcance de novas comunidades e parcerias",
    impact: "500 famílias impactadas",
  },
  {
    year: "2021",
    title: "Sede Própria",
    description: "Inauguração do espaço físico",
    impact: "1000 atendimentos mensais",
  },
  {
    year: "2022",
    title: "Educação e Desenvolvimento",
    description: "Início dos programas educacionais",
    impact: "200 crianças beneficiadas",
  },
  {
    year: "2023",
    title: "Consolidação",
    description: "Reconhecimento e ampliação dos projetos",
    impact: "2000 famílias atendidas",
  },
];

export default function NossaHistoria() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    router.push(`/#${sectionId}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % historicalPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Conheça a jornada da Associação Vinícius Carvalheido e como nasceu
              nosso compromisso com a transformação social.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Como Tudo Começou
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Em 2018, um grupo de amigos unidos pelo desejo de fazer a
                  diferença começou uma jornada que transformaria não apenas
                  suas vidas, mas a de centenas de famílias em situação de
                  vulnerabilidade social.
                </p>
                <p className="text-lg">
                  O que começou com pequenas ações de distribuição de alimentos
                  em comunidades carentes logo se transformou em um movimento
                  organizado. A dedicação e o comprometimento do grupo chamou a
                  atenção de outros voluntários e parceiros, permitindo a
                  expansão das atividades.
                </p>
                <p className="text-lg">
                  Com o crescimento das ações e o aumento do número de famílias
                  atendidas, surgiu a necessidade de formalizar o trabalho.
                  Assim nasceu oficialmente a Associação Vinícius Carvalheido,
                  com a missão de promover transformação social através da
                  solidariedade e do trabalho voluntário.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                Nossa Linha do Tempo
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full font-bold">
                          {milestone.year}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-blue-900">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                          <p className="text-blue-600 font-semibold">
                            {milestone.impact}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                Momentos Marcantes
              </h2>
              <div className="relative aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden shadow-xl">
                {historicalPhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      x:
                        currentSlide === index
                          ? 0
                          : currentSlide > index
                          ? -100
                          : 100,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 ${
                      currentSlide === index ? "z-10" : "z-0"
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.description}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-white/80 text-lg mb-2">{photo.year}</p>
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {photo.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {photo.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Indicadores de slide */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                  {historicalPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Faça Parte Dessa História
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Junte-se a nós nessa missão de transformar vidas e construir um
                futuro melhor para nossa comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleNavigation("volunteer")}
                >
                  Seja Voluntário <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => handleNavigation("donate")}
                >
                  Faça uma Doação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <FloatingButton />

      {/* Modais */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </main>
  );
}

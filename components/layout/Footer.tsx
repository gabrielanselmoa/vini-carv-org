"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "Suporte",
    items: [
      {
        label: "Fale conosco",
        href: "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Associação.",
        isExternal: true,
      },
      {
        label: "Ajuda",
        href: "mailto:contato@avc.org",
        isExternal: true,
      },
    ],
  },
];

const socialLinks = {
  instagram: "https://instagram.com/avc",
  facebook: "https://facebook.com/avc",
  youtube: "https://youtube.com/@avc",
};

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-blue-900">
              AVC
            </Link>
            <p className="text-sm">
              Transformando vidas através da solidariedade. Juntos construímos
              uma sociedade mais justa, levando esperança para quem mais
              precisa.
            </p>
            <div className="flex gap-4">
              <Link
                href={socialLinks.instagram}
                target="_blank"
                aria-label="Instagram"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    y: -2 
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  <Instagram className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-all duration-300" />
                </motion.div>
              </Link>
              <Link
                href={socialLinks.facebook}
                target="_blank"
                aria-label="Facebook"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    y: -2 
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-all duration-300" />
                </motion.div>
              </Link>
              <Link
                href={socialLinks.youtube}
                target="_blank"
                aria-label="YouTube"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    y: -2 
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  <Youtube className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-all duration-300" />
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {menuItems.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        className="text-sm hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                      >
                        {item.label}
                        {item.href.includes("mailto") && (
                          <Mail className="w-4 h-4" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contato Direto */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-sm">contato@avc.org</li>
                <li className="text-sm">(11) 0000-0000</li>
                <li className="text-sm">São Paulo - SP</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright e Créditos */}
        <div className="border-t mt-12 pt-8 text-center space-y-2">
          <p className="text-sm text-gray-500">
            &copy; 2024 Associação Vinícius Carvalheido. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-gray-400">
            Desenvolvido por{" "}
            <Link
              href="https://www.linkedin.com/in/gabrielanselmoa/"
              target="_blank"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Gabriel Anselmo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Header } from "@/components/Header";
import { Contact as Footer } from "@/components/Footer";
import Image from "next/image";
import { Scale, Users, FileText, ShieldAlert, Gavel, Lock, Briefcase, Building, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function AreasDeAtuacaoPage() {
    const allServices = [
        {
            category: "Direito Civil",
            icon: Scale,
            image: "/images/civil-law.png",
            items: ["Responsabilidade Civil", "Contratos", "Indenizações", "Cobrança e Execução", "Defesa do Consumidor"]
        },
        {
            category: "Direito de Família e Sucessões",
            icon: Users,
            image: "/images/family-law.png",
            items: ["Divórcio e Separação", "Guarda e Visitas", "Pensão Alimentícia", "Inventário e Partilha", "Planejamento Sucessório"]
        },
        {
            category: "Direito Empresarial",
            icon: Briefcase,
            image: "/images/business-law.png",
            items: ["Constituição de Empresas", "Contratos Mercantis", "Recuperação Judicial", "Compliance", "Propriedade Intelectual"]
        },
        {
            category: "Direito Imobiliário",
            icon: Building,
            image: "/images/real-estate-law.png",
            items: ["Compra e Venda", "Locações", "Regularização de Imóveis", "Usucapião", "Condomínios"]
        },
        {
            category: "Direito Trabalhista",
            icon: FileText,
            // using existing or placeholder if not generated
            image: "/images/business-law.png",
            items: ["Defesa Patronal", "Reclamatórias Trabalhistas", "Acidentes de Trabalho", "Assédio Moral", "Compliance Trabalhista"]
        },
        {
            category: "Direito Criminal",
            icon: Lock,
            image: "/images/civil-law.png", // reusing civil or generic
            items: ["Defesa em Inquérito", "Audiência de Custódia", "Tribunal do Júri", "Crimes Digitais", "Violência Doméstica"]
        }
    ];

    return (
        <main className="bg-navy min-h-screen text-white">
            <Header />

            {/* Header Section */}
            <section className="pt-32 pb-20 bg-navy-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 skew-x-12 translate-x-1/2 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-gold text-sm tracking-[0.4em] uppercase font-bold mb-4 block">Especialidades</span>
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white">
                        Áreas de <span className="text-gold italic">Atuação</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Nossa equipe multidisciplinar oferece suporte jurídico completo, combinando conhecimento técnico profundo e visão estratégica.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {allServices.map((service, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={index}
                                className="group bg-navy-light/10 border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500 hover:bg-navy-light/20"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.category}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                                        <div className="p-2 bg-navy/80 backdrop-blur-sm rounded-sm border border-gold/30 text-gold">
                                            <service.icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white">{service.category}</h3>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <ul className="space-y-3">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                                <span className="text-base font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <a href="https://wa.me/5545988023369" className="text-gold text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                            Agendar Consulta <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

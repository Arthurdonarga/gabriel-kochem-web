"use client";

import { Header } from "@/components/Header";
import { Contact as Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Compass, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LocationPage() {
    // Fade-in animation variants
    const fadeInUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <main className="bg-navy min-h-screen text-white overflow-hidden selection:bg-gold selection:text-navy">
            {/* Navigation Header */}
            <Header />

            {/* Immersive Header Banner */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy-dark">
                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-navy-light/10 skew-x-12 translate-x-32" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                            Atendimento Presencial e Digital
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                            Nossa <span className="text-gold italic">Localização</span>
                        </h1>
                        <div className="w-24 h-1 bg-gold mx-auto mb-6" />
                        <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide leading-relaxed">
                            Um espaço estruturado para oferecer o máximo conforto, privacidade e excelência no seu atendimento.
                            Atendemos de forma física em Marechal Cândido Rondon - PR e de forma digital em todo o Brasil.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content: Info & Interactive Map */}
            <section className="py-16 md:py-24 relative z-10 bg-navy">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
                    >
                        {/* Left Column: Office details (5 cols on lg) */}
                        <motion.div
                            variants={fadeInUp}
                            className="lg:col-span-5 space-y-8"
                        >
                            {/* Card 1: Main Location Info */}
                            <div className="bg-navy-light/40 border border-white/10 p-8 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
                                {/* Subtle corner decoration */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 transform translate-x-8 -translate-y-8 rotate-45 transition-transform duration-700 group-hover:scale-150" />
                                
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                        <MapPin className="w-6 h-6 animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-white">Escritório Central</h3>
                                        <span className="text-xs text-gold uppercase tracking-wider font-semibold">Marechal Cândido Rondon - PR</span>
                                    </div>
                                </div>

                                <div className="space-y-6 text-gray-300">
                                    <div className="border-l border-gold/30 pl-4 space-y-1">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest block">Endereço</span>
                                        <p className="text-lg font-serif text-white">
                                            Rua 7 de Setembro, 949 - Centro
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Esquina do Mercado Cercar — Marechal Cândido Rondon - PR, CEP 85960-000
                                        </p>
                                    </div>

                                    <div className="border-l border-gold/30 pl-4 space-y-1">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest block">Horário de Funcionamento</span>
                                        <p className="text-base text-white font-medium flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                                            Segunda a Sexta: 08:30 – 11:30, 13:30 – 18:00
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            Finais de semana e feriados: Plantão de urgência via WhatsApp.
                                        </p>
                                    </div>

                                    <div className="border-l border-gold/30 pl-4 space-y-1">
                                        <span className="text-xs text-gray-500 uppercase tracking-widest block">Abrangência</span>
                                        <p className="text-sm text-gray-300">
                                            Dispomos de estrutura para reuniões presenciais e sustentação oral física, além de assessoria jurídica 100% digital a nível nacional com assinatura eletrônica de documentos e reuniões virtuais em alta definição.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Interactive Route CTAs */}
                            <div className="bg-navy-light/40 border border-white/10 p-8 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.3)] space-y-6 hover:border-gold/30 transition-all duration-500">
                                <h4 className="font-serif text-lg text-white flex items-center gap-2">
                                    <Navigation className="w-5 h-5 text-gold" />
                                    Como Chegar?
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Clique abaixo para iniciar sua rota usando seu aplicativo de GPS favorito e vir diretamente até nós.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <a
                                        href="https://maps.google.com/?q=Rua+7+de+Setembro,+949,+Centro,+Marechal+C%C3%A2ndido+Rondon+-+PR"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3 px-4 bg-gold hover:bg-white text-navy font-bold text-xs uppercase tracking-wider text-center transition-all duration-500 rounded-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.15)] group"
                                    >
                                        <span>Google Maps</span>
                                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                    <a
                                        href="https://waze.com/ul?q=Rua+7+de+Setembro,+949,+Centro,+Marechal+C%C3%A2ndido+Rondon+-+PR"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3 px-4 border border-white/20 hover:border-gold text-white hover:text-gold font-bold text-xs uppercase tracking-wider text-center transition-all duration-500 rounded-sm flex items-center justify-center gap-2"
                                    >
                                        <span>Waze</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>

                            {/* Card 3: Quick Contacts */}
                            <div className="bg-navy-light/20 border border-white/5 p-8 rounded-sm space-y-4">
                                <h4 className="font-serif text-lg text-white">Canais de Contato</h4>
                                <div className="space-y-3">
                                    <a
                                        href="https://wa.me/5545988023369"
                                        target="_blank"
                                        className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors text-sm group"
                                    >
                                        <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                                        <span>(45) 98802-3369 (WhatsApp)</span>
                                    </a>
                                    <a
                                        href="mailto:advgabrielkochem@gmail.com"
                                        className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors text-sm group"
                                    >
                                        <Mail className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                                        <span>advgabrielkochem@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Google Maps IFrame (7 cols on lg) */}
                        <motion.div
                            variants={fadeInUp}
                            className="lg:col-span-7 h-full min-h-[450px] md:min-h-[600px] w-full relative group"
                        >
                            {/* Decorative geometric borders representing structure and law */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold/50 transition-all duration-750 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold/50 transition-all duration-750 group-hover:translate-x-1 group-hover:translate-y-1" />
                            
                            <div className="w-full h-full min-h-[450px] md:min-h-[600px] rounded-sm overflow-hidden border border-white/15 bg-navy-dark shadow-[0_0_50px_rgba(212,175,55,0.08)] relative">
                                <iframe
                                    src="https://maps.google.com/maps?q=Rua%207%20de%20Setembro%2C%20949%2C%20Centro%2C%20Marechal%20C%C3%A2ndido%20Rondon%20-%20PR&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full min-h-[450px] md:min-h-[600px] border-0 grayscale opacity-80 contrast-110 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização Gabriel Kochem Advocacia"
                                ></iframe>
                            </div>
                            
                            {/* Tiny dark mode filter indicator */}
                            <div className="absolute bottom-4 left-4 bg-navy-dark/90 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest pointer-events-none">
                                <Compass className="w-3.5 h-3.5 text-gold animate-spin-slow" />
                                <span>Mapa Interativo</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quality and Trust Pillars Section */}
            <section className="py-16 bg-navy-light/10 border-t border-white/5 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex gap-4 items-start p-6 rounded-sm bg-navy-dark/20 border border-white/5">
                            <Shield className="w-8 h-8 text-gold flex-shrink-0" />
                            <div>
                                <h4 className="font-serif text-lg text-white mb-2">Privacidade Absoluta</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Nossa estrutura física e digital conta com salas de reuniões blindadas acusticamente e criptografia de ponta para sigilo completo de suas informações.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start p-6 rounded-sm bg-navy-dark/20 border border-white/5">
                            <Compass className="w-8 h-8 text-gold flex-shrink-0" />
                            <div>
                                <h4 className="font-serif text-lg text-white mb-2">Localização Estratégica</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Situado na região central de Marechal Cândido Rondon, com fácil acesso, estacionamento conveniente e comodidades para receber nossos clientes da melhor forma.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start p-6 rounded-sm bg-navy-dark/20 border border-white/5">
                            <CheckCircle className="w-8 h-8 text-gold flex-shrink-0" />
                            <div>
                                <h4 className="font-serif text-lg text-white mb-2">Agilidade no Atendimento</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Integração completa de sistemas judiciais virtuais. Protocolos imediatos e acompanhamento em tempo real para soluções ágeis e assertivas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standard Premium Footer & Contact Form */}
            <Footer />
        </main>
    );
}

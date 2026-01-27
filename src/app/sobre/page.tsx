"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Contact as Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Award, Scale, BookOpen, ChevronDown } from "lucide-react";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <main ref={containerRef} className="bg-navy min-h-screen text-white overflow-hidden">
            <Header />

            {/* 1. Immersive Hero Section */}
            {/* 1. Immersive Hero Section - Split Layout */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-navy z-0">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-navy-light/20 skew-x-12 translate-x-32" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="py-12 lg:py-0 text-center lg:text-left"
                    >
                        <span className="block text-gold text-sm tracking-[0.4em] uppercase mb-6 font-bold">
                            Referência & Estratégia
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-white leading-tight">
                            Gabriel <br />
                            <span className="text-gold italic relative">
                                Kochem
                                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gold hidden lg:block" />
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-2 border-gold/30 pl-6">
                            "Minha missão é oferecer uma advocacia de resultado, pautada na confiança, na técnica e no compromisso inegociável com os interesses do cliente."
                        </p>

                        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-3 text-gray-400 text-sm tracking-widest uppercase">
                                <Scale className="text-gold" size={20} /> OAB/PR 130.601
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm tracking-widest uppercase">
                                <Award className="text-gold" size={20} /> 8 Anos de Exp.
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Side - Encaixed & Presentable */}
                    <motion.div
                        style={{ opacity: opacityHero }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative h-[60vh] lg:h-[80vh] w-full flex items-end justify-center lg:justify-end"
                    >
                        {/* Frame Effect */}
                        <div className="absolute inset-4 lg:inset-y-8 lg:inset-x-12 border border-gold/30 rounded-sm z-0 transform translate-x-4 translate-y-4" />

                        <div className="relative h-full w-full lg:w-4/5 z-10 rounded-sm overflow-hidden shadow-2xl bg-navy-dark">
                            <Image
                                src="/images/portrait-kochem.jpg"
                                alt="Gabriel Kochem Portrait"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-40" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/30 hidden lg:block"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* 2. The Philosophy (Text Heavy / Storytelling) */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <Quote className="text-gold w-16 h-16 opacity-50" />
                        <h2 className="text-4xl font-serif leading-tight">
                            "A advocacia é a arte de <span className="text-gold border-b border-gold/30 pb-1">transformar conflitos</span> em soluções."
                        </h2>
                        <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed text-justify">
                            <p>
                                Minha jornada no direito começou com um propósito claro: oferecer mais do que apenas representação legal.
                                Busco entender a fundo a história de cada cliente, pois acredito que cada caso carrega consigo vidas,
                                patrimônios e sonhos.
                            </p>
                            <p>
                                Com uma abordagem generalista e estratégica, meu escritório se destaca por não apenas reagir aos problemas,
                                mas antecipar cenários. Seja no âmbito civil, empresarial ou familiar, a técnica jurídica precisa caminhar
                                lado a lado com a sensibilidade humana.
                            </p>
                        </div>
                        <div className="pt-4">
                            <p className="font-serif text-2xl text-gold/80 italic">Gabriel Kochem</p>
                        </div>
                    </motion.div>

                    {/* Visual Abstract Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] w-full"
                    >
                        <div className="absolute inset-0 bg-gold/5 rounded-full blur-3xl" />
                        <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                            <div className="space-y-4 mt-12">
                                <div className="h-64 bg-white/5 backdrop-blur-md rounded-sm border border-white/10 p-6 flex flex-col justify-end group hover:bg-gold/10 transition-colors">
                                    <Award className="text-gold w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-serif">Excelência</h3>
                                    <p className="text-xs text-gray-400 mt-2">Busca incessante pela perfeição técnica.</p>
                                </div>
                                <div className="h-48 bg-navy-light rounded-sm border border-white/5 relative overflow-hidden">
                                    <Image src="/images/WhatsApp Image 2026-01-26 at 14.15.56.jpeg" alt="Detail" fill className="object-cover opacity-50 hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 bg-navy-light rounded-sm border border-white/5 relative overflow-hidden">
                                    <Image src="/images/WhatsApp Image 2026-01-26 at 14.15.57 (2).jpeg" alt="Detail" fill className="object-cover opacity-50 hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="h-64 bg-white/5 backdrop-blur-md rounded-sm border border-white/10 p-6 flex flex-col justify-end group hover:bg-gold/10 transition-colors">
                                    <Scale className="text-gold w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-serif">Integridade</h3>
                                    <p className="text-xs text-gray-400 mt-2">Transparência absoluta em todas as etapas.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Education / Credentials */}
            <section className="py-24 bg-navy-light/20 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif mb-4">Formação e <span className="text-gold">Credenciais</span></h2>
                        <div className="w-24 h-1 bg-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: "Bacharel em Direito", loc: "Universidade de Referência", year: "2018", icon: BookOpen },
                            { title: "Pós-Graduação", loc: "Direito Processual Civil", year: "2020", icon: Award },
                            { title: "OAB/PR 130.601", loc: "Ordem dos Advogados do Brasil", year: "Ativo", icon: Scale }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-navy p-8 text-center border border-white/5 hover:border-gold/30 transition-all rounded-sm group"
                            >
                                <div className="w-16 h-16 bg-navy-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
                                    <item.icon className="text-gold w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                                <p className="text-gold text-sm font-medium mb-1">{item.loc}</p>
                                <p className="text-gray-500 text-xs">{item.year}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mt-24">
                <Footer />
            </div>
        </main>
    );
}

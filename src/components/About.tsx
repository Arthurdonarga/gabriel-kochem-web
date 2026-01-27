import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function About() {
    return (
        <section id="sobre" className="py-24 bg-navy relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative h-[600px] w-full rounded-sm overflow-hidden border-2 border-gold/20 shadow-2xl">
                            {/* Using another image as profile - ideally the one with the person */}
                            <Image
                                src="/images/WhatsApp Image 2026-01-26 at 14.15.57.jpeg"
                                alt="Dr. Gabriel Kochem"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold/50" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gold/50" />
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-2">
                            <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">Sobre o Escritório</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                                Experiência e <span className="text-gold italic">Excelência</span> em Advocacia
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed font-light border-l border-gold pl-6">
                            Gabriel Kochem lidera uma atuação jurídica moderna e eficiente, focada em resultados e no atendimento personalizado para pessoas e empresas.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Atendimento 24h para Urgências",
                                "Sigilo Absoluto e Discrição",
                                "Estratégias Jurídicas Personalizadas",
                                "Atuação em Todo o Território Nacional"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-4 text-gray-200">
                                    <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                                    <span className="text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a href="#contato" className="text-gold border-b border-gold hover:text-white hover:border-white transition-colors pb-1 uppercase tracking-widest text-sm">
                                Conheça Nossa História
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

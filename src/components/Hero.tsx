import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScaleOfJustice } from "./ScaleOfJustice";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/fundokoche.jpeg"
                    alt="Gabriel Kochem Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight drop-shadow-2xl animate-fade-in-up delay-100">
                        SOLUÇÕES <span className="text-gold italic">JURÍDICAS</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light tracking-wide leading-relaxed animate-fade-in-up delay-200">
                        Atuação estratégica e multidisciplinar.
                        Defesa intransigente dos seus direitos em todas as esferas.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto animate-fade-in-up delay-300">
                        <a
                            href="https://wa.me/5545988023369"
                            className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_40px_rgba(22,163,74,0.6)] flex items-center justify-center gap-2 group"
                        >
                            Falar com Advogado
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <Link
                            href="/areas-de-atuacao"
                            className="px-10 py-4 border border-white/20 hover:border-gold text-white hover:text-gold font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-sm hover:bg-navy-light"
                        >
                            Conhecer Áreas
                        </Link>
                    </div>
                </div>

                {/* Hero Visual: Scale & Photo Mix */}
                <div className="flex justify-center items-center order-1 lg:order-2 w-full mt-12 lg:mt-0 px-4 sm:px-8">
                    <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-[4/5] relative animate-fade-in-up group">

                        {/* Background Photo - Com Cor, Maior (aspect-ratio mais vertical) e mais completa */}
                        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] overflow-hidden transition-all duration-1000 z-0 border border-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
                            <Image
                                src="/images/gabriel-2.jpg"
                                alt="Gabriel Kochem"
                                fill
                                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            {/* Inner gradient to blend bottom edge with the dark background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy w-full h-full via-navy/20 to-transparent z-10 pointer-events-none" />
                        </div>

                        {/* Scale of Justice - Mais Menor, mais para baixo e à esquerda, com desfoque branco ao fundo */}
                        <div className="absolute -left-8 -bottom-8 sm:-left-12 sm:-bottom-10 md:-left-16 md:-bottom-12 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 z-20 pointer-events-none transition-transform duration-1000 group-hover:scale-105">

                            {/* Desfoque branco no fundo da balança */}
                            <div className="absolute inset-0 bg-white/50 blur-2xl rounded-full scale-[0.6] opacity-90 transition-opacity duration-1000"></div>

                            {/* Ícone da Balança */}
                            <ScaleOfJustice className="relative z-10 w-full h-full text-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.5)] group-hover:drop-shadow-[0_0_40px_rgba(212,175,55,0.8)]" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

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
                            className="px-10 py-4 bg-gold hover:bg-white text-navy font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] flex items-center justify-center gap-2 group"
                        >
                            Falar com Especialista
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

                {/* Scale Animation */}
                <div className="flex justify-center items-center order-1 lg:order-2 w-full">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] relative animate-fade-in-up">
                        <ScaleOfJustice className="w-full h-full text-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.2)]" />
                    </div>
                </div>

            </div>
        </section>
    );
}

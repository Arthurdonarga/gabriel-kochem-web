"use client";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Footer";
import { motion } from "framer-motion";

export default function ThankYou() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy flex flex-col">
            <Header />

            <div className="flex-grow flex items-center justify-center px-6 py-24 mt-20"> {/* Added mt-20 for spacing */}
                <div className="text-center max-w-2xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 relative inline-block">
                        Recebemos sua <span className="text-gold italic">mensagem</span>
                        <motion.div
                            className="absolute -bottom-2 left-0 w-full h-1 bg-gold"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: [0, 1, 1, 0], originX: ["0%", "0%", "100%", "100%"] }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                times: [0, 0.4, 0.6, 1],
                                repeat: Infinity,
                                repeatDelay: 0.5
                            }}
                        />
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        Entraremos em contato o mais breve possível.
                    </p>

                    <p className="text-lg text-gold font-serif mt-8">
                        Obrigado pela confiança.
                    </p>

                    <a
                        href="/"
                        className="inline-block mt-12 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-colors font-bold uppercase tracking-widest text-sm"
                    >
                        Voltar ao Início
                    </a>
                </div>
            </div>

            <Contact />
        </main>
    );
}

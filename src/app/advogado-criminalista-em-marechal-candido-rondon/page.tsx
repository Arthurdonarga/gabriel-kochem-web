
import { Header } from "@/components/Header";
import { Contact } from "@/components/Footer";
import { CheckCircle2, MapPin, Gavel, Siren, Lock, Phone } from "lucide-react";

export default function AdvogadoCriminalistaMarechal() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-medium text-red-100">Atendimento 24h em Marechal Cândido Rondon</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Defesa Criminal <br />
                        <span className="text-gold">Combattiva</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Sua liberdade é nossa prioridade. Atuação combativa em inquéritos, prisões em flagrante e processos criminais.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            href="https://wa.me/5545999887766?text=URGENTE: Preciso de um advogado criminalista em Marechal Cândido Rondon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-red-800 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:bg-red-700 shadow-lg shadow-red-900/30 border-2 border-white/30 animate-pulse hover:animate-none"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                <Siren className="w-5 h-5" />
                                Plantão Criminal 24h
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-navy-light relative border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-4">Áreas de Atuação Criminal</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Defesa técnica e sigilosa em todas as fases da persecução penal.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Lock,
                                title: "Liberdade Provisória",
                                desc: "Pedidos de revogação de prisão preventiva, relaxamento de prisão e Habeas Corpus."
                            },
                            {
                                icon: Siren,
                                title: "Acompanhamento em Delegacia",
                                desc: "Atuação imediata em flagrantes e depoimentos para evitar autoincriminação."
                            },
                            {
                                icon: Gavel,
                                title: "Defesa no Processo",
                                desc: "Defesa completa no Tribunal do Júri e em todas as instâncias judiciais."
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-7 h-7 text-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-6">
                                O Momento da <span className="text-gold">Abordagem</span> Define Tudo
                            </h3>
                            <p className="text-gray-300 mb-6 text-lg">
                                O que é dito na delegacia pode condenar ou absolver. Nunca preste depoimento sem a presença do seu advogado.
                            </p>
                            <div className="bg-red-900/20 border border-red-500/20 p-6 rounded-xl">
                                <p className="font-bold text-red-200 flex items-start gap-3">
                                    <Siren className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                    "Você tem o direito de permanecer calado." Use esse direito até a chegada do seu advogado.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Audiência de Custódia",
                                    "Lei de Drogas",
                                    "Crimes contra o Patrimônio",
                                    "Violência Doméstica (Maria da Penha)",
                                    "Crimes de Trânsito (Embriaguez)",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-gold/20 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-gold" />
                                        <span className="text-gray-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative overflow-hidden bg-navy-light">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-8">
                        Em Casos Criminais, <span className="text-gold">Tempo é Liberdade</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Atendemos emergências 24 horas por dia em Marechal Cândido Rondon e região.
                    </p>
                    <a
                        href="https://wa.me/5545999887766?text=URGENTE: Preciso de um advogado criminalista"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-red-700 text-white font-bold text-xl rounded-full shadow-lg shadow-red-900/30 hover:bg-red-600 hover:scale-105 transition-all duration-300"
                    >
                        <Phone className="w-6 h-6" />
                        Ligar para o Plantão Agora
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
}

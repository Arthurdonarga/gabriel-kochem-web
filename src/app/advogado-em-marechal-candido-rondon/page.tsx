
import { Header } from "@/components/Header";
import { Contact } from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, MapPin, Scale, Shield, Users, Phone } from "lucide-react";

export default function AdvogadoMarechal() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-sm font-medium text-gold">Atendendo Marechal Cândido Rondon e Região</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Advogado Atuante em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                            Marechal Cândido Rondon
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Defesa jurídica estratégica e personalizada. Resolvemos seus problemas com agilidade, transparência e excelência.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            href="https://wa.me/5545999887766?text=Olá, preciso de um advogado em Marechal Cândido Rondon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gold text-navy font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Falar com Advogado Agora
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-navy-light relative border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-4">Por que nos escolher?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Compromisso com a justiça e dedicação total ao seu caso.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Experiência Comprovada",
                                desc: "Anos de atuação em Marechal Cândido Rondon com histórico de sucesso."
                            },
                            {
                                icon: Users,
                                title: "Atendimento Personalizado",
                                desc: "Cada caso é único. Tratamos seu problema com a atenção que ele merece."
                            },
                            {
                                icon: Scale,
                                title: "Transparência Total",
                                desc: "Acompanhe cada passo do seu processo com clareza e honestidade."
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

            {/* Areas */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px]" />

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-6">
                                Atuação Jurídica <br />
                                <span className="text-gold">Abrangente</span>
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Oferecemos suporte jurídico em diversas áreas, garantindo uma defesa robusta e estratégica para você ou sua empresa.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Direito Civil e Contratos",
                                    "Direito Trabalhista",
                                    "Direito Penal e Criminal",
                                    "Direito de Família e Sucessões",
                                    "Direito Previdenciário"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/5545999887766?text=Quero saber mais sobre suas áreas de atuação"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 font-semibold"
                            >
                                Agendar Consulta
                            </a>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gold/20 blur-2xl transform rotate-3" />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                {/* Placeholder for an office image or lawyer image */}
                                <div className="aspect-[4/5] bg-navy-light flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80')] bg-cover bg-center">
                                    <div className="absolute inset-0 bg-navy/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-8">
                        Não Espere o Problema <span className="text-gold">Crescer</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        A orientação jurídica correta pode economizar tempo, dinheiro e garantir seus direitos.
                        Entre em contato hoje mesmo.
                    </p>
                    <a
                        href="https://wa.me/5545999887766?text=Olá, gostaria de agendar uma consulta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-gold to-yellow-500 text-navy font-bold text-xl rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
                    >
                        <Phone className="w-6 h-6" />
                        Falar pelo WhatsApp
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
}

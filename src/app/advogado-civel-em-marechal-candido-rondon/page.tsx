
import { Header } from "@/components/Header";
import { Contact } from "@/components/Footer";
import { CheckCircle2, MapPin, Search, FileText, Home, Phone } from "lucide-react";

export default function AdvogadoCivelMarechal() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-sm font-medium text-gold">Advocacia Cível em Marechal Cândido Rondon</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Proteja Seus Direitos e <br />
                        <span className="text-gold">Patrimônio</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Foco em contratos, indenizações, direito de família e questões patrimoniais. Soluções jurídicas seguras para você.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            href="https://wa.me/5545999887766?text=Preciso de um advogado cível em Marechal Cândido Rondon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gold text-navy font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Consulta Cível
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-navy-light relative border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-4">Áreas de Atuação Cível</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Assistência completa em todas as esferas do Direito Civil.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: "Contratos e Obrigações",
                                desc: "Análise, elaboração e revisão de contratos para garantir sua segurança jurídica."
                            },
                            {
                                icon: Home,
                                title: "Direito de Família",
                                desc: "Divórcios, pensão alimentícia, guarda e inventários com sensibilidade e técnica."
                            },
                            {
                                icon: Search,
                                title: "Indenizações",
                                desc: "Danos morais e materiais, defesa do consumidor e responsabilidade civil."
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

            {/* Detailed List */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <FileText className="w-32 h-32 text-gold" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-8">
                            Como podemos ajudar no seu caso?
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Cobrança e recuperação de créditos",
                                "Ações de despejo e locação",
                                "Usucapião e regularização de imóveis",
                                "Revisão de contratos bancários",
                                "Defesa em processos civis",
                                "Tutela e curatela"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gold" />
                                    <span className="text-gray-300 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10 text-center md:text-left">
                            <a
                                href="https://wa.me/5545999887766?text=Tenho uma dúvida sobre direito cível"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold font-bold hover:text-white transition-colors inline-flex items-center gap-2"
                            >
                                Tire suas dúvidas agora <CheckCircle2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative overflow-hidden bg-navy-light">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-8">
                        Soluções Jurídicas <span className="text-gold">Inteligentes</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Não deixe suas questões cíveis sem resolução. Conte com nossa expertise em Marechal Cândido Rondon.
                    </p>
                    <a
                        href="https://wa.me/5545999887766?text=Olá, preciso de um advogado civel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-navy font-bold text-xl rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
                    >
                        <Phone className="w-6 h-6" />
                        Falar com Advogado Cível
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
}

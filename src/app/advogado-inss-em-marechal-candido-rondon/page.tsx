
import { Header } from "@/components/Header";
import { Contact } from "@/components/Footer";
import { CheckCircle2, MapPin, FileX, AlertCircle, FileCheck, Phone } from "lucide-react";

export default function AdvogadoINSSMarechal() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-navy bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-sm font-medium text-gold">Advocacia contra o INSS em Marechal Cândido Rondon</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Problemas com o <br />
                        <span className="text-gold">INSS?</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Teve seu benefício negado ou cortado? Atuamos para reverter decisões injustas e garantir seu pagamento.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            href="https://wa.me/5545988023369?text=Preciso de ajuda com o INSS em Marechal Cândido Rondon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-green-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(22,163,74,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Resolver Problema no INSS
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-20 bg-navy-light relative border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-4">Como Podemos Ajudar</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Enfrentamos a burocracia do INSS por você.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileX,
                                title: "Benefício Negado",
                                desc: "Entramos com recurso administrativo ou ação judicial para reverter a negativa do INSS."
                            },
                            {
                                icon: AlertCircle,
                                title: "Limbo Previdenciário",
                                desc: "Empresa diz que você não pode voltar, INSS diz que você pode? Resolvemos esse impasse."
                            },
                            {
                                icon: FileCheck,
                                title: "Perícia Médica",
                                desc: "Orientação e acompanhamento para perícias de auxílio-doença e aposentadoria por invalidez."
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

            {/* Content Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl opacity-50" />
                            <div className="relative border border-white/10 bg-navy-light p-8 rounded-2xl">
                                <h3 className="text-2xl font-cinzel font-bold text-white mb-6 border-b border-white/10 pb-4">
                                    Atuação Especializada:
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Restabelecimento de Auxílio-Doença",
                                        "Aposentadoria Rural Negada",
                                        "Adicional de 25% na Aposentadoria",
                                        "Pensão por Morte (Dependência Econômica)",
                                        "Cobrança de Atrasados",
                                        "LOAS/BPC para Idoso e Deficiente"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-gold" />
                                            <span className="text-gray-300 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-6">
                                Recupere Seus <br />
                                <span className="text-gold">Atrasados</span>
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Se o INSS demorou para conceder seu benefício ou pagou o valor errado, você tem direito a receber os valores atrasados com correção. Nós calculamos isso para você.
                            </p>
                            <a
                                href="https://wa.me/5545988023369?text=Quero saber sobre meus atrasados do INSS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white border border-green-600 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 font-semibold"
                            >
                                Calcular Atrasados
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative overflow-hidden bg-white/5">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-8">
                        O INSS Errou? <span className="text-gold">Nós Corrigimos.</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Não aceite um "não" como resposta final. Busque seus direitos hoje mesmo.
                    </p>
                    <a
                        href="https://wa.me/5545988023369?text=Olá, preciso de um advogado contra o INSS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-xl rounded-full shadow-lg shadow-green-600/20 hover:shadow-green-600/40 hover:scale-105 transition-all duration-300"
                    >
                        <Phone className="w-6 h-6" />
                        Falar com Advogado do INSS
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
}

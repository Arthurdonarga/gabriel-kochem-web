
import { Header } from "@/components/Header";
import { Contact } from "@/components/Footer";
import { CheckCircle2, MapPin, Landmark, HeartHandshake, Calculator, Phone } from "lucide-react";

export default function AdvogadoPrevidenciarioMarechal() {
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
                        <span className="text-sm font-medium text-gold">Advocacia Previdenciária em Marechal Cândido Rondon</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Garanta Sua Aposentadoria <br />
                        <span className="text-gold">Com Segurança</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Análise completa do seu tempo de contribuição para buscar o melhor benefício possível. Planejamento previdenciário e revisões.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            href="https://wa.me/5545999887766?text=Preciso de um advogado previdenciário em Marechal Cândido Rondon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gold text-navy font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Planejar Minha Aposentadoria
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-navy-light relative border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-4">Direito Previdenciário</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Soluções completas para você se aposentar com tranquilidade e o melhor valor.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Calculator,
                                title: "Planejamento Previdenciário",
                                desc: "Descubra o momento ideal para se aposentar e simule o valor do seu benefício futuro."
                            },
                            {
                                icon: Landmark,
                                title: "Aposentadorias",
                                desc: "Por tempo de contribuição, idade, especial, rural e por invalidez. Cuidamos de todo o processo."
                            },
                            {
                                icon: HeartHandshake,
                                title: "Pensões e Auxílios",
                                desc: "Pensão por morte, auxílio-doença, BPC/LOAS e salário-maternidade."
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
                                    Benefícios que Atuamos:
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Aposentadoria Rural",
                                        "Aposentadoria Especial (Insalubridade)",
                                        "Revisão da Vida Toda",
                                        "Auxílio-Acidente",
                                        "Aposentadoria da Pessoa com Deficiência",
                                        "BPC (Benefício Assistencial)"
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
                                Seu Direito Não Pode <br />
                                <span className="text-gold">Ser Ignorado</span>
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                O INSS nega milhares de benefícios todos os dias, muitas vezes injustamente. Nossa atuação administrativa e judicial busca reverter essas decisões e garantir o que é seu por direito.
                            </p>
                            <a
                                href="https://wa.me/5545999887766?text=Quero saber se tenho direito a revisão"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 font-semibold"
                            >
                                Analisar Meu Caso
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative overflow-hidden bg-white/5">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-8">
                        Planeje Seu <span className="text-gold">Futuro</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Não deixe sua aposentadoria nas mãos da sorte. Conte com apoio profissional experiente.
                    </p>
                    <a
                        href="https://wa.me/5545999887766?text=Olá, preciso de um advogado previdenciário"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-gold to-yellow-500 text-navy font-bold text-xl rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
                    >
                        <Phone className="w-6 h-6" />
                        Falar com Advogado Previdenciário
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
}

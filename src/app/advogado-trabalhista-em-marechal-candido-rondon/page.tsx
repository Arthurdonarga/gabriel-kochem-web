
import { Header } from "@/components/Header";
import { Contact } from "@/components/Footer";
import { CheckCircle2, MapPin, Briefcase, Clock, AlertTriangle, Phone } from "lucide-react";

export default function AdvogadoTrabalhistaMarechal() {
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
                        <span className="text-sm font-medium text-gold">Advocacia Trabalhista em Marechal Cândido Rondon</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
                        Seus Direitos Trabalhistas <br />
                        <span className="text-gold">Não Podem Esperar</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Lutamos para garantir que você receba tudo o que é seu por lei. Demissão, horas extras, insalubridade e mais.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <a
                            href="https://wa.me/5545999887766?text=Preciso de um advogado trabalhista em Marechal Cândido Rondon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gold text-navy font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Analisar Meu Caso Agora
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Rights Section */}
            <section className="py-20 bg-navy-light relative border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold mb-4">Direitos do Trabalhador</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Conheça as principais situações onde atuamos para defender você.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: AlertTriangle,
                                title: "Demissão Injusta",
                                desc: "Foi demitido sem justa causa e não recebeu o que devia? Revertemos justa causa indevida."
                            },
                            {
                                icon: Clock,
                                title: "Horas Extras",
                                desc: "Trabalhou além do horário e não foi pago? Buscamos o pagamento de horas extras e adicionais."
                            },
                            {
                                icon: Briefcase,
                                title: "Vínculo Empregatício",
                                desc: "Trabalhou sem registro? Buscamos o reconhecimento do vínculo e todos os direitos retroativos."
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

            {/* FAQ/Checklist Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gold/20 rounded-full blur-3xl opacity-50" />
                            <div className="relative border border-white/10 bg-navy-light p-8 rounded-2xl">
                                <h3 className="text-2xl font-cinzel font-bold text-white mb-6 border-b border-white/10 pb-4">
                                    Você pode ter direito a:
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Aviso prévio indenizado",
                                        "Férias proporcionais + 1/3",
                                        "13º Salário proporcional",
                                        "Multa de 40% do FGTS",
                                        "Adicional de insalubridade ou periculosidade",
                                        "Indenização por danos morais"
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
                                Cálculo Rescisório <br />
                                <span className="text-gold">Correto</span>
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                Muitas vezes, empresas calculam as verbas rescisórias incorretamente. Nossa equipe realiza uma análise minuciosa para garantir que nenhum centavo seu fique para trás.
                            </p>
                            <a
                                href="https://wa.me/5545999887766?text=Quero conferir meu cálculo rescisório"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 font-semibold"
                            >
                                Solicitar Análise
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative overflow-hidden bg-white/5">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-8">
                        Não Abra Mão dos Seus <span className="text-gold">Direitos</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        O prazo para entrar com ação trabalhista é de 2 anos após a saída. Não perca tempo.
                    </p>
                    <a
                        href="https://wa.me/5545999887766?text=Olá, preciso de um advogado trabalhista"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-gold to-yellow-500 text-navy font-bold text-xl rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
                    >
                        <Phone className="w-6 h-6" />
                        Falar com Advogado Trabalhista
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
}

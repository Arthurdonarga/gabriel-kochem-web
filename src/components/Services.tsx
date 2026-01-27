"use client";

import Image from "next/image";

export function Services() {
    const services = [
        {
            title: "Direito Civil",
            description: "Resolução de conflitos, contratos e responsabilidade civil com técnica e precisão.",
            image: "/images/civil-law.png"
        },
        {
            title: "Direito de Família",
            description: "Divórcios, guarda e inventários tratados com a sensibilidade e rigor necessários.",
            image: "/images/family-law.png"
        },
        {
            title: "Direito Empresarial",
            description: "Assessoria estratégica para empresas, blindagem patrimonial e compliance.",
            image: "/images/business-law.png"
        },
        {
            title: "Direito Imobiliário",
            description: "Segurança jurídica em transações, locações e regularização de imóveis.",
            image: "/images/real-estate-law.png"
        }
    ];

    return (
        <section id="areas-de-atuacao" className="py-24 bg-navy-light/30 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">Nossa Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">
                        Áreas de <span className="text-gold italic">Atuação</span>
                    </h2>
                    <p className="text-gray-400">
                        Soluções jurídicas completas com foco em resultados efetivos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group relative h-[400px] border border-white/5 bg-navy rounded-sm overflow-hidden hover:-translate-y-2 transition-all duration-500">
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-6 relative z-10">
                                <div className="w-12 h-1 bg-gold mb-4 group-hover:w-24 transition-all duration-300" />
                                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="/areas-de-atuacao" className="inline-block px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-navy font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 rounded-sm">
                        Ver Todas as Áreas
                    </a>
                </div>
            </div>
        </section>
    );
}

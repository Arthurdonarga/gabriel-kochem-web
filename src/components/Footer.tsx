import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export function Contact() {
    return (
        <footer id="contato" className="bg-navy-dark pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-4xl font-serif text-white mb-6">
                            Precisa de orientação <br />
                            <span className="text-gold italic">jurídica especializada?</span>
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Conte com nossa experiência para defender seus interesses e garantir seus direitos com eficiência e segurança.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Phone className="text-gold w-6 h-6 mt-1" />
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Telefone / WhatsApp</span>
                                    <a href="https://wa.me/5545988023369" className="text-xl text-white hover:text-gold transition-colors font-serif">
                                        (45) 98802-3369
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-gold w-6 h-6 mt-1" />
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Email</span>
                                    <a href="mailto:advgabrielkochem@gmail.com" className="text-xl text-white hover:text-gold transition-colors font-serif">
                                        advgabrielkochem@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-gold w-6 h-6 mt-1" />
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Localização</span>
                                    <p className="text-white font-serif">
                                        Atendimento Presencial e Online<br />
                                        Escritório em Foz do Iguaçu - PR
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-navy p-8 md:p-10 border border-white/5 rounded-sm">
                        <h3 className="text-2xl font-serif text-white mb-6">Envie uma Mensagem</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Nome" className="bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm" />
                                <input type="tel" placeholder="Telefone" className="bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm" />
                            </div>
                            <input type="email" placeholder="Email" className="w-full bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm" />
                            <textarea rows={4} placeholder="Descreva brevemente seu caso" className="w-full bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm resize-none"></textarea>
                            <button type="button" className="w-full bg-gold text-navy font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                                Enviar Solicitação
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Gabriel Kochem. OAB/PR 130.601. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

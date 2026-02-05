"use client";

import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

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
                                        Marechal Cândido Rondon - PR
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-navy p-8 md:p-10 border border-white/5 rounded-sm">
                        <h3 className="text-2xl font-serif text-white mb-6">Envie uma Mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nome"
                                    required
                                    className="bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Telefone"
                                    className="bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Descreva brevemente seu caso"
                                required
                                className="w-full bg-navy-light border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gold text-navy font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-500 text-center mt-2">Mensagem enviada com sucesso!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-center mt-2">Erro ao enviar. Tente novamente.</p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Gabriel Kochem. OAB/PR 130.601. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="https://instagram.com/advgabrielkochem" target="_blank" className="text-gray-500 hover:text-gold transition-colors flex items-center gap-2"><Instagram size={20} /> <span className="text-sm">@advgabrielkochem</span></a>
                        <a href="https://www.linkedin.com/in/gabriel-matheus-kochem-7a4871369" target="_blank" className="text-gray-500 hover:text-gold transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

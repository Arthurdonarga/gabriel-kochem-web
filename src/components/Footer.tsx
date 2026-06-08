"use client";

import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        company: '' // Honeypot field
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' });

    useEffect(() => {
        const n1 = Math.floor(Math.random() * 10);
        const n2 = Math.floor(Math.random() * 10);
        setCaptcha({ num1: n1, num2: n2, answer: '' });
    }, [status === 'success', status === 'error']); // Regenerate on reset

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaptcha({ ...captcha, answer: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
            alert("Por favor, resolva a conta matemática corretamente para provar que você não é um robô.");
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '', company: '' });
                window.open('/recebemos-sua-mensagem', '_blank');
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
                            <span className="text-gold italic">jurídica de excelência?</span>
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
                                    <p className="text-white font-serif text-sm">
                                        Rua 7 de Setembro, 949 - Centro<br />
                                        Marechal Cândido Rondon - PR
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Imagens (Galeria Reduzida) */}
                    <div className="grid grid-cols-2 gap-4 h-full content-center">
                        {/* Photo */}
                        <div className="relative aspect-[3/4] sm:aspect-square overflow-hidden rounded-sm group">
                            <Image src="/images/gabriel-1.jpg" alt="Gabriel Kochem" fill className="object-cover object-[center_30%] grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-all duration-700 pointer-events-none"></div>
                        </div>
                        {/* Initials block */}
                        <div className="relative aspect-[3/4] sm:aspect-square overflow-hidden rounded-sm bg-navy-light flex items-center justify-center border border-white/5 group hover:border-gold/30 transition-all duration-700">
                            <div className="text-center">
                                <span className="font-serif text-gold/30 group-hover:text-gold text-5xl block mb-2 transition-colors duration-700">GK</span>
                                <span className="text-gray-500 group-hover:text-gold/80 text-xs uppercase tracking-[0.2em] transition-colors duration-700">Advocacia</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Links Area */}
                <div className="border-t border-white/5 py-8">
                    <h3 className="text-white font-serif mb-4 text-center">Nossas Especialidades em Marechal Cândido Rondon</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                        <Link href="/advogado-civel-em-marechal-candido-rondon" className="hover:text-gold transition-colors">Advogado Cível</Link>
                        <Link href="/advogado-criminalista-em-marechal-candido-rondon" className="hover:text-gold transition-colors">Advogado Criminalista</Link>
                        <Link href="/advogado-em-marechal-candido-rondon" className="hover:text-gold transition-colors">Advogado Geral</Link>
                        <Link href="/advogado-imobiliario-em-marechal-candido-rondon" className="hover:text-gold transition-colors">Advogado Imobiliário</Link>
                        <Link href="/advogado-inss-em-marechal-candido-rondon" className="hover:text-gold transition-colors">Advogado INSS</Link>
                        <Link href="/advogado-previdenciario-em-marechal-candido-rondon" className="hover:text-gold transition-colors">Advogado Previdenciário</Link>
                        <Link href="/advogado-trabalhista-em-marechal-candido-rondon" className="hover:text-gold transition-colors">Advogado Trabalhista</Link>
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
                        <a href="https://wa.me/5545988023369" target="_blank" className="text-gray-500 hover:text-gold transition-colors"><Phone size={20} /></a>

                    </div>
                </div>
            </div>
        </footer>
    );
}

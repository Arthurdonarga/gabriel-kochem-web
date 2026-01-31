"use client";

import Link from "next/link";
import { Phone, Mail, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Sobre", href: "/sobre" },
        { label: "Áreas de Atuação", href: "/#areas-de-atuacao" },
        { label: "Feedbacks", href: "/#feedbacks" },
        { label: "Contato", href: "/#contato" }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Placeholder for Logo Image if needed, or text */}
                    <div className="flex flex-col">
                        <span className="text-2xl font-serif text-gold tracking-widest group-hover:text-gold-light transition-colors">
                            GABRIEL KOCHEM
                        </span>
                        <span className="text-[0.6rem] text-gray-400 tracking-[0.3em] uppercase ml-1">
                            Assessoria Jurídica
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { label: "Sobre", href: "/sobre" },
                        { label: "Áreas de Atuação", href: "/#areas-de-atuacao" },
                        { label: "Feedbacks", href: "/#feedbacks" },
                        { label: "Contato", href: "/#contato" }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Action Button (Keep external for visibility or hide? User asked for menu to be same as mobile) 
                    On mobile, "Fale Agora" is inside the menu. 
                    I will keep "Fale Agora" visible on Desktop as it's a primary CTA, 
                    but the NAVIGATION links will be in the hamburger.
                */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://wa.me/5545988023369"
                        target="_blank"
                        className="px-6 py-2 bg-gold text-navy font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 rounded-sm"
                    >
                        Fale Agora
                    </a>
                </div>

                {/* Menu Button (Visible on ALL screens now) */}
                <button
                    className="md:hidden text-gold flex items-center gap-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Menu</span>
                    <Menu size={28} />
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`} />
                </button>
            </div>

            {/* Menu Dropdown (Visible on ALL screens when open) */}
            {isMenuOpen && (
                <div className="bg-navy-dark border-t border-white/10 absolute w-full left-0 top-full p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 z-40">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-lg font-serif text-center text-gray-300 hover:text-gold py-2 border-b border-white/5"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    {/* Add CTA to mobile menu as well (duplicate is fine for responsive behavior, 
                        or we can hide the top one on mobile. 
                        The top one has `hidden md:flex`, so it hides on mobile. 
                        We need one here for mobile. 
                        For desktop, we already have one outside. 
                        If we want strictly "same as mobile", desktop users would see links AND the button in dropdown.
                        Let's keep the button here for mobile users, and maybe hide it on desktop if it's already visible?
                        Or just show it everywhere in the menu for consistency.
                    */}
                    <a
                        href="https://wa.me/5545988023369"
                        className="md:hidden mt-4 w-full py-4 text-center bg-gold text-navy font-bold uppercase tracking-widest"
                    >
                        Fale Agora
                    </a>
                </div>
            )}
        </header>
    );
}

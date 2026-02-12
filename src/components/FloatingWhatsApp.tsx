"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingWhatsApp() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Link
            href="https://wa.me/5545988023369"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Falar no WhatsApp"
        >
            <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-110">
                {/* Pulsing Background */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

                {/* Static Background circle */}
                <span className="absolute inline-flex rounded-full h-full w-full bg-green-500 opacity-20 group-hover:opacity-40 transition-opacity"></span>

                {/* Button Image */}
                <Image
                    src="/whatsapp-btn.png"
                    alt="WhatsApp"
                    width={80}
                    height={80}
                    className="relative z-10 w-14 h-14 md:w-[70px] md:h-[70px] object-cover drop-shadow-lg rounded-full"
                />
            </div>
        </Link>
    );
}

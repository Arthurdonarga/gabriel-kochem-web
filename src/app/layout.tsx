import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Kochem | Advocacia Especializada",
  description: "Assessoria jurídica completa com excelência e comprometimento em diversas áreas do direito.",
};

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${cinzel.variable} antialiased relative`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { LayoutDashboard, Users, FileText, Settings, LogOut } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabase";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Mock logout for now
    const handleLogout = () => {
        // supabase.auth.signOut();
        window.location.href = "/login";
    };

    return (
        <div className="min-h-screen bg-navy-dark flex">
            {/* Sidebar */}
            <aside className="w-64 bg-navy border-r border-white/5 flex flex-col fixed h-full z-20">
                <div className="p-6 border-b border-white/5">
                    <span className="text-xl font-serif text-white">GK <span className="text-gold">Admin</span></span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {[
                        { name: "Visão Geral", icon: LayoutDashboard, href: "/dashboard" },
                        { name: "Clientes", icon: Users, href: "/dashboard/clients" },
                        { name: "Processos", icon: FileText, href: "/dashboard/cases" },
                        { name: "Configurações", icon: Settings, href: "/dashboard/settings" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-gold rounded-sm transition-colors"
                        >
                            <item.icon size={18} />
                            <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-sm transition-colors"
                    >
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Sair</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-64">
                <header className="h-16 bg-navy border-b border-white/5 flex items-center justify-between px-8">
                    <h1 className="text-gray-200 text-sm uppercase tracking-widest">Painel Administrativo</h1>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold text-xs font-bold">GK</div>
                    </div>
                </header>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2 } from "lucide-react";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message || "Erro ao fazer login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md p-8 bg-navy border border-white/10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy"></div>

            <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-white">Área Restrita</h2>
                <p className="text-gray-400 mt-2 text-sm">Acesso exclusivo para administradores</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-navy-light/50 border border-white/10 p-3 pl-10 text-white focus:border-gold outline-none rounded-sm transition-colors"
                            placeholder="admin@gabrielkochem.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Senha</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-navy-light/50 border border-white/10 p-3 pl-10 text-white focus:border-gold outline-none rounded-sm transition-colors"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-200 text-sm rounded-sm">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold hover:bg-white text-navy font-bold uppercase tracking-widest py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    {loading ? <Loader2 className="animate-spin" /> : "Entrar no Sistema"}
                </button>
            </form>

            <div className="mt-6 text-center">
                <a href="/" className="text-xs text-gray-500 hover:text-gold transition-colors">Voltar para o site</a>
            </div>
        </div>
    );
}

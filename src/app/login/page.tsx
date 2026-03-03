"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScanFace, Lock, Mail, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulating login
        setTimeout(() => {
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(circle_at_top_right,_var(--tw-query-primary)_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_var(--tw-query-primary)_0%,_transparent_40%)] bg-bg-dark">
            <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-4 shadow-[0_0_30px_rgba(212,17,98,0.2)]">
                        <ScanFace className="w-10 h-10 text-primary animate-pulse" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white">
                        Visage <span className="text-primary italic">Engine</span>
                    </h1>
                    <p className="text-white/50 text-lg">Acesse sua plataforma de análise biométrica</p>
                </div>

                <GlassCard className="border-white/10 shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70 ml-1">E-mail Corporativo</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="exemplo@empresa.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-sm font-medium text-white/70">Senha</label>
                                    <button type="button" className="text-xs text-primary hover:underline">Esqueci a senha</button>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={cn(
                                "w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2 overflow-hidden relative",
                                loading && "opacity-80 cursor-not-allowed"
                            )}
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Entrar na Plataforma
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                </GlassCard>

                <p className="text-center text-white/30 text-sm">
                    Novo por aqui? <button className="text-primary hover:underline font-medium">Criar conta corporativa</button>
                </p>

                <div className="text-center pt-8 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
                        Powered by Secure Biometrics Group
                    </p>
                </div>
            </div>
        </main>
    );
}

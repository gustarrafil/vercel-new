"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus, ArrowRight, Camera, User, Phone, Mail, MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export default function NewClientPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push("/analysis/new");
        }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
                    <UserPlus className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-white">Cadastro de Cliente</h2>
                    <p className="text-white/50">Inicie o registro de um novo parceiro comercial preenchendo as informações essenciais.</p>
                </div>
            </div>

            <GlassCard className="border-white/5">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Avatar Upload Placeholder */}
                    <div className="flex flex-col items-center gap-4 border-b border-white/5 pb-8">
                        <div className="w-24 h-24 rounded-full bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center group hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden">
                            <Camera className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors" />
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                        <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Foto de Referência (Opcional)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70 ml-1">Nome Completo</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Nome do paciente"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70 ml-1">E-mail</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    required
                                    placeholder="email@exemplo.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70 ml-1">Telefone / WhatsApp</label>
                            <div className="relative group">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="tel"
                                    placeholder="(00) 00000-0000"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70 ml-1">Cidade / Estado</label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="São Paulo, SP"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="flex-1 px-6 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-[2] bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Continuar para Medição
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </GlassCard>
        </div>
    );
}

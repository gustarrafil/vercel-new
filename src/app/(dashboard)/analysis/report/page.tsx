"use client";

import { useState } from "react";
import {
    ScanFace,
    FileCheck,
    Download,
    Share2,
    Lock,
    Sparkles,
    CheckCircle2,
    ChevronRight
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export default function AnalysisReportPage() {
    const [isPro, setIsPro] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleUnlockPro = () => {
        setLoading(true);
        // Simulating Stripe Redirect
        setTimeout(() => {
            // In a real app, window.location = checkoutUrl
            setIsPro(true);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
                        <ScanFace className="w-3 h-3" />
                        Análise Biométrica Concluída
                    </div>
                    <h2 className="text-4xl font-extrabold text-white">Relatório de Visagismo</h2>
                    <p className="text-white/50">ID da Análise: #VE-2026-0303-01 | Paciente: Ana Beatriz Silva</p>
                </div>
                <div className="flex gap-3">
                    <button className="p-3 rounded-xl glass border-white/5 text-white/50 hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl border border-white/10 transition-all">
                        <Download className="w-5 h-5" />
                        Exportar PDF
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Analysis */}
                <div className="lg:col-span-2 space-y-8">
                    <GlassCard className="border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />

                        <div className="relative space-y-8">
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-bold text-white/30 uppercase tracking-widest flex items-center gap-2">
                                        <ScanFace className="w-4 h-4" /> Formato Facial
                                    </h3>
                                    <p className="text-5xl font-black text-white italic">OVAL</p>
                                </div>
                                <div className="w-24 h-24 bg-primary/20 rounded-2xl border border-primary/30 flex items-center justify-center">
                                    <ScanFace className="w-12 h-12 text-primary" />
                                </div>
                            </div>

                            <p className="text-white/70 leading-relaxed text-lg italic">
                                "O formato oval é considerado o 'padrão áureo' do visagismo. É caracterizado por linhas suaves, com a largura da testa ligeiramente maior que a do maxilar e bochechas levemente curvadas."
                            </p>
                        </div>
                    </GlassCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <GlassCard className="border-white/5 space-y-4">
                            <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest">Terços Faciais</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Superior (Intelecto)", value: "33.2%", status: "Proporcional" },
                                    { label: "Médio (Emoção)", value: "33.4%", status: "Proporcional" },
                                    { label: "Inferior (Ação)", value: "33.4%", status: "Proporcional" },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/60">{item.label}</span>
                                            <span className="text-primary font-bold">{item.value}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(212,17,98,0.5)]" style={{ width: item.value }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard className="border-white/5 space-y-4">
                            <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest text-center">Simetria Orbital</h3>
                            <div className="flex justify-center py-4">
                                <div className="relative w-40 h-40 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-10 h-10 text-primary/40" />
                                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" />
                                </div>
                            </div>
                            <p className="text-center text-sm font-bold text-green-400 flex items-center justify-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> 98.4% Simetria Detectada
                            </p>
                        </GlassCard>
                    </div>
                </div>

                {/* Pro Content / Side Info */}
                <div className="space-y-6">
                    {!isPro ? (
                        <GlassCard variant="primary" className="border-primary/40 bg-primary/20 relative overflow-hidden flex flex-col items-center text-center py-10 space-y-6">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-dark/80" />
                            <div className="relative z-10 space-y-6 w-full">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-white">Prescrições Estéticas</h3>
                                    <p className="text-white/60 text-sm leading-relaxed px-4">
                                        Desbloqueie o relatório técnico completo com diretrizes de Contorno, Blush, Iluminação e Sobrancelhas baseadas na biometria.
                                    </p>
                                </div>

                                <div className="space-y-3 px-4">
                                    <div className="flex items-center gap-3 text-white/40 text-xs text-left">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Sugestões de Maquiagem
                                    </div>
                                    <div className="flex items-center gap-3 text-white/40 text-xs text-left">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Curadoria de Produtos
                                    </div>
                                    <div className="flex items-center gap-3 text-white/40 text-xs text-left">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Estudo Cromático (Sazonal)
                                    </div>
                                </div>

                                <div className="pt-4 px-4 w-full">
                                    <button
                                        onClick={handleUnlockPro}
                                        disabled={loading}
                                        className="w-full bg-white text-primary font-black py-4 rounded-xl shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                DESBLOQUEAR POR R$ 47
                                                <ChevronRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                    <p className="mt-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">Pagamento Único via Stripe</p>
                                </div>
                            </div>
                        </GlassCard>
                    ) : (
                        <GlassCard className="border-green-500/30 bg-green-500/10 space-y-8 animate-in zoom-in duration-500">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Prescrições Liberadas</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Contorno e Blush</h4>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Aplique o blush nas maçãs do rosto subindo em direção às têmporas para enfatizar a estrutura natural.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Iluminador</h4>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Foque no centro da testa, ponte do nariz e arco do cupido para criar pontos de luz estratégicos.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Sobrancelhas</h4>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Mantenha o arco natural. Evite ângulos muito agudos para não quebrar a suavidade do rosto oval.
                                    </p>
                                </div>
                            </div>

                            <button className="w-full py-4 text-sm font-bold text-white/50 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
                                Imprimir para o Paciente
                            </button>
                        </GlassCard>
                    )}

                    <GlassCard className="border-white/5">
                        <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Notas do Profissional</h3>
                        <textarea
                            placeholder="Adicione observações clínicas..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary transition-all h-32 resize-none"
                        />
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}

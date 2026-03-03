"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScanFace, Ruler, Info, ArrowRight, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const measurementSections = [
    {
        title: "1. Larguras (cm)",
        fields: [
            { label: "Largura da Testa", name: "width_forehead" },
            { label: "Largura das Maçãs", name: "width_cheekbones" },
            { label: "Largura do Maxilar", name: "width_jaw" },
        ]
    },
    {
        title: "2. Comprimento (cm)",
        fields: [
            { label: "Altura Total da Face", name: "height_total" },
            { label: "Comprimento do Nariz", name: "height_nose" },
        ]
    },
    {
        title: "3. Terços Faciais (cm)",
        fields: [
            { label: "Terço Superior", name: "third_upper" },
            { label: "Terço Médio", name: "third_middle" },
            { label: "Terço Inferior", name: "third_lower" },
        ]
    },
    {
        title: "4. Olhos (cm)",
        fields: [
            { label: "Distância Interocular", name: "dist_interocular" },
            { label: "Largura dos Olhos", name: "width_eyes" },
        ]
    }
];

export default function NewAnalysisPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push("/analysis/report"); // For demo simplicity
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Ruler className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-white">Nova Análise Facial</h2>
                    <p className="text-white/50">Insira as medidas técnicas precisas em centímetros para o processamento da biometria facial.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {measurementSections.map((section, sIdx) => (
                                <GlassCard key={sIdx} className="space-y-4 border-white/5">
                                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest border-b border-primary/10 pb-2">
                                        {section.title}
                                    </h3>
                                    <div className="space-y-3">
                                        {section.fields.map((field, fIdx) => (
                                            <div key={fIdx} className="space-y-1">
                                                <label className="text-xs font-medium text-white/50 ml-1">{field.label}</label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    required
                                                    placeholder="0,00"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            ))}
                        </div>

                        <GlassCard variant="primary" className="border-primary/30 py-8 text-center animate-pulse-slow">
                            <Sparkles className="w-12 h-12 text-white mx-auto mb-4 opacity-50" />
                            <p className="text-white font-medium mb-2">Pronto para o Processamento IA?</p>
                            <p className="text-white/60 text-xs mb-6 max-w-xs mx-auto">
                                Nossa IA utiliza proporção áurea e algoritmos de simetria para gerar recomendações estéticas clínicas.
                            </p>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-primary font-black py-4 rounded-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                ) : (
                                    <>
                                        PROCESSAR BIOMETRIA
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </GlassCard>
                    </form>
                </div>

                <div className="space-y-6">
                    <GlassCard className="border-white/5 space-y-4">
                        <div className="flex items-center gap-3 text-white">
                            <Info className="w-5 h-5 text-primary" />
                            <h4 className="font-bold">Guia de Referência</h4>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Mantenha o paquímetro perpendicular ao plano facial para medições precisas. O erro máximo admitido é de 0,1cm.
                        </p>
                        <div className="aspect-[4/5] rounded-xl bg-white/5 border border-dashed border-white/10 flex items-center justify-center">
                            <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Diagrama de Medição</span>
                        </div>
                    </GlassCard>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-[10px] text-white/30 text-center uppercase tracking-tighter">
                        © 2024 Visage Engine. Professional Grade Medical UI.
                    </div>
                </div>
            </div>
        </div>
    );
}

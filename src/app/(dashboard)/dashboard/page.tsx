"use client";

import {
    Users,
    BarChart3,
    PlusCircle,
    Search,
    ArrowRight,
    UserPlus,
    ScanFace,
    FileText
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

const stats = [
    { label: "Total de Clientes", value: "128", icon: Users, color: "text-blue-400" },
    { label: "Análises Realizadas", value: "342", icon: BarChart3, color: "text-primary" },
    { label: "Novos este Mês", value: "+24", icon: UserPlus, color: "text-green-400" },
];

const recentClients = [
    { name: "Ana Beatriz Silva", lastAnalysis: "24/02/2026", type: "Oval" },
    { name: "Carlos Eduardo Lima", lastAnalysis: "22/02/2026", type: "Quadrado" },
    { name: "Marina Mendes", lastAnalysis: "20/02/2026", type: "Oval" },
    { name: "Roberto Souza", lastAnalysis: "18/02/2026", type: "Redondo" },
    { name: "Juliana Freitas", lastAnalysis: "15/02/2026", type: "Coração" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Bem-vindo, Profissional</h2>
                    <p className="text-white/50 tracking-wide">Gerencie o histórico e novas medições faciais de seus pacientes.</p>
                </div>
                <Link
                    href="/clients/new"
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
                >
                    <PlusCircle className="w-5 h-5" />
                    Novo Cadastro
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <GlassCard key={i} className="flex items-center gap-5 border-white/5 hover:border-white/10 transition-colors cursor-default group">
                        <div className={`p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
                            <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white/30 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-3xl font-black text-white">{stat.value}</p>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Clients */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">Clientes Recentes</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                                type="text"
                                placeholder="Buscar cliente..."
                                className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-primary transition-all w-64"
                            />
                        </div>
                    </div>

                    <GlassCard className="p-0 overflow-hidden border-white/5">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/5">
                                    <th className="px-6 py-4 text-xs font-bold text-white/30 uppercase tracking-widest">Nome do Cliente</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/30 uppercase tracking-widest">Última Análise</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/30 uppercase tracking-widest">Tipo Facial</th>
                                    <th className="px-6 py-4 text-xs font-bold text-white/30 uppercase tracking-widest">Ação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentClients.map((client, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4 text-white font-medium">{client.name}</td>
                                        <td className="px-6 py-4 text-white/50 text-sm">{client.lastAnalysis}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                                                {client.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-white/30 group-hover:text-primary transition-colors">
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </GlassCard>
                </div>

                {/* Shortcuts/Quick Actions */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white">Ações Rápidas</h3>
                    <div className="space-y-4">
                        <Link href="/analysis/new" className="block w-full">
                            <GlassCard variant="primary" className="border-primary/20 hover:bg-primary/20 transition-all flex items-center gap-4 py-8 group">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <ScanFace className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Nova Análise</h4>
                                    <p className="text-xs text-white/60">Processamento biométrico IA</p>
                                </div>
                            </GlassCard>
                        </Link>

                        <GlassCard className="border-white/5 hover:border-white/20 transition-all cursor-pointer flex items-center gap-4 py-8 group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                                <FileText className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Relatórios</h4>
                                <p className="text-xs text-white/40">Exportar PDF profissional</p>
                            </div>
                        </GlassCard>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-primary/20 border border-white/10 relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
                        <h4 className="font-bold text-white mb-1">Dica de Visagismo</h4>
                        <p className="text-sm text-white/50 leading-relaxed italic">
                            "O formato oval permite maior liberdade criativa. Use contornos sutis para ressaltar a simetria natural sem sobrecarregar."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

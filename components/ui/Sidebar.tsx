"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    BarChart3,
    FileText,
    Settings,
    HelpCircle,
    ScanFace
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Clientes", href: "/clients" },
    { icon: BarChart3, label: "Análises", href: "/analysis" },
    { icon: FileText, label: "Relatórios", href: "/reports" },
    { icon: Settings, label: "Configurações", href: "/settings" },
    { icon: HelpCircle, label: "Suporte", href: "/support" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 h-screen glass border-r border-white/10 flex flex-col p-6 fixed left-0 top-0">
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <ScanFace className="text-white w-5 h-5" />
                </div>
                <h1 className="text-xl font-bold tracking-tight">Visage <span className="text-primary italic">Engine</span></h1>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-white/60 hover:text-white hover:bg-white/5",
                            pathname.startsWith(item.href) && "bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5 transition-transform duration-200 group-hover:scale-110",
                            pathname.startsWith(item.href) && "text-primary"
                        )} />
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="mt-auto px-2">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/10">
                    <p className="text-xs font-semibold text-primary/80 uppercase mb-1">Versão Enterprise</p>
                    <p className="text-sm text-white/50">Acesso Biométrico Ativo</p>
                </div>
            </div>
        </div>
    );
}

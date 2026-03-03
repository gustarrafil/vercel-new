import { Sidebar } from "@/components/ui/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-bg-dark min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {children}
                </div>
            </main>
        </div>
    );
}

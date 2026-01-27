export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Total de Clientes", value: "124", color: "text-gold" },
                    { title: "Processos Ativos", value: "48", color: "text-blue-400" },
                    { title: "Audiências Hoje", value: "3", color: "text-green-400" },
                ].map((stat, i) => (
                    <div key={i} className="bg-navy p-6 border border-white/5 rounded-sm">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">{stat.title}</h3>
                        <p className={`text-4xl font-serif ${stat.color}`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="bg-navy p-6 border border-white/5 rounded-sm">
                <h2 className="text-xl font-serif text-white mb-6">Processos Recentes</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-500 text-sm uppercase">
                                <th className="pb-4">Cliente</th>
                                <th className="pb-4">Nº Processo</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4">Última Movimentação</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[1, 2, 3, 4].map((i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 font-medium text-white">João da Silva {i}</td>
                                    <td className="py-4">5002451-88.2024.8.16.0030</td>
                                    <td className="py-4"><span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full">Em Andamento</span></td>
                                    <td className="py-4">26/01/2026</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

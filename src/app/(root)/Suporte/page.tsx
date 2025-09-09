export default function Suporte() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="max-w-2xl w-full border shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl p-8">
                {/* Informações de Contato Direto */}
                <div className="mt-6 mb-6 p-8">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
                        Central de Suporte
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-blue-50 rounded-xl">
                            <h4 className="font-semibold text-gray-900">Telefone</h4>
                            <p className="text-blue-600 break-words">(92) 3000-0000</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl">
                            <h4 className="font-semibold text-gray-900">Email</h4>
                            <p className="text-green-600 break-words">
                                marciacarina931@gmail.com
                            </p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-xl">
                            <h4 className="font-semibold text-gray-900">Chat Online</h4>
                            <p className="text-purple-600">8h-20h disponível</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

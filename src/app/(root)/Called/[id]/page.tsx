import Participant from "./components/Participant";
import Details from "./components/Details";
import CalledHeader from "./components/Header";

export default function CalledId() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
                <CalledHeader
                    title="Lampada do corredor queimada"
                    status="Aguardando"
                    footer={<> <span>Criado em: 04/08</span> </>}
                />

                <div className="grid lg:grid-cols-3 gap-6 mt-8">
                    <div className="lg:col-span-2 space-y-6"> 
                        <Details/>
                    </div>

                    <div className="space-y-6">
                        <Participant
                            title="Solicitante"
                        />
                        <Participant
                            title="Tecnico"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
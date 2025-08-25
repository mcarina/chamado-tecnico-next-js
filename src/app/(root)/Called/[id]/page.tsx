'use client'
import Participant from "./components/Participant";
import Details from "./components/Details";
import CalledHeader from "./components/Header";
import { chamadoData } from "@/constants";
import { useParams } from "next/navigation";

export default function CalledId() {
  const params = useParams();
  const chamado = chamadoData.find(c => c.id === params.id);

  if (!chamado) return <div>Chamado não encontrado</div>;

    return (
        <section className="min-h-screen from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
                <CalledHeader
                    title={chamado.titulo}
                    status={chamado.status}
                    footer={<span>{chamado.dataCriacao}</span>}
                />

                <div className="grid lg:grid-cols-3 gap-6 mt-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Details 
                            description={chamado.descricao}
                        />
                    </div>

                    <div className="space-y-6">
                        <Participant title="Solicitante" {...chamado.solicitante} />
                        <Participant title="Técnico" {...chamado.tecnico} />
                    </div>
                </div>
            </div>

        </section>
    );
}
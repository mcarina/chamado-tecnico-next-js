'use client'
import Participant from "./components/Participant";
import Details from "./components/Details";
import CalledHeader from "./components/Header";
import { chamadoData } from "@/constants";
import { useParams } from "next/navigation";
import Images from "./components/Images";
import BoxComments from "./components/BoxComments";

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
                            title="Detalhes do Relato"
                            description={chamado.descricao}
                        />
                        <Images
                            title="Anexo aqui.jpg"
                            size="12 kb"
                        />

                        <BoxComments
                        title="Adicione comentários"
                        // defaultValue="comentários a serem escritos aqui"
                        onSubmit={(comment) => console.log("Comentário enviado:", comment)}
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
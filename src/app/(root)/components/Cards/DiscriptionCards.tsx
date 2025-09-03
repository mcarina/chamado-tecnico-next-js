import DiscriptionCards from "@/components/Cards/DiscriptionCards";
import Link from "next/link";
import { LuChartLine, LuEye } from "react-icons/lu";
import { chamadoData } from "@/constants";

const DiscriptionCardsHome = () => {
    return (
        <>
            <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                    <LuChartLine className="h-5 w-5 text-primary"/>
                </div>
             <h2 className="text-xl font-semibold">Chamados Recentes:</h2>
            </div>

            {chamadoData.map((chamado) => (
                <DiscriptionCards
                    title={chamado.titulo}
                    descricao={chamado.descricao}
                    status={chamado.status}
                    footer={
                        <>
                            <span>Usuário: {chamado.solicitante.name}</span>
                            <span>Criado em: {chamado.dataCriacao}</span>
                            <span>Técnico: {chamado.tecnico.name} </span>
                        </>
                    }
                    button={
                    <Link href={`/Called/${chamado.id}`}>
                        <button className="flex text-xs gap-2 hover:text-[#3b82f6]">
                            <LuEye className="w-4 h-4"/>
                            Ver detalhes 
                        </button>
                    </Link>
                    }
                    
                >
                </DiscriptionCards>
            ))}

        </>
    )
}

export default DiscriptionCardsHome;
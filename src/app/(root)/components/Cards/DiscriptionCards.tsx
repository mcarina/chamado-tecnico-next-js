import DiscriptionCards from "@/components/Cards/DiscriptionCards";
import Link from "next/link";
import { LuChartLine } from "react-icons/lu";

const DiscriptionCardsHome = () => {
    return (
        <>
            <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                    <LuChartLine className="h-5 w-5 text-primary"/>
                </div>
             <h2 className="text-xl font-semibold">Chamados Recentes:</h2>
            </div>

            <DiscriptionCards
                title="Portao da caragem com defeito"
                descricao="portao nao abre"
                status="Em Andamento"
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
                button={
                <Link href={'/Called/1'}>
                    <button className="text-xs ml-4 hover:text-[#3b82f6]">Ver detalhes</button>
                </Link>
                }
                
            >
            </DiscriptionCards>

            <DiscriptionCards
                title="Lampada do corredor queimada"
                descricao="lampada do corredor do 2 andar queimada"
                status="Aguardando"
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
                button={
                <Link href={'/Called/2'}>
                    <button className="text-xs ml-4 hover:text-[#3b82f6]">Ver detalhes</button>
                </Link>
                }
            >
            </DiscriptionCards>
            <DiscriptionCards
                title="Lampada do corredor queimada"
                descricao="lampada do corredor do 2 andar queimada"
                status="Agendado"
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
                button={
                <Link href={'/Called/3'}>
                    <button className="text-xs ml-4 hover:text-[#3b82f6]">Ver detalhes</button>
                </Link>
                }
            >
            </DiscriptionCards>
            <DiscriptionCards
                title="Lampada do corredor queimada"
                descricao="lampada do corredor do 2 andar queimada"
                status="Concluído"
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
                button={
                <Link href={'/Called/4'}>
                    <button className="text-xs ml-4 hover:text-[#3b82f6]">Ver detalhes</button>
                </Link>
                }
            >
            </DiscriptionCards>
        </>
    )
}

export default DiscriptionCardsHome;
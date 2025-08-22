import DiscriptionCards from "@/components/Cards/DiscriptionCards";
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
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
            >
                em andamento
            </DiscriptionCards>

            <DiscriptionCards
                title="Lampada do corredor queimada"
                descricao="lampada do corredor do 2 andar queimada"
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
            >
                concluido
            </DiscriptionCards>
            <DiscriptionCards
                title="Lampada do corredor queimada"
                descricao="lampada do corredor do 2 andar queimada"
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
            >
                Aguardando
            </DiscriptionCards>
            <DiscriptionCards
                title="Lampada do corredor queimada"
                descricao="lampada do corredor do 2 andar queimada"
                footer={
                    <>
                        <span>Usuário: João</span>
                        <span>Criado em: 04/08</span>
                        <span>Técnico: </span>
                    </>
                }
            >
                Agendado
            </DiscriptionCards>
        </>
    )
}

export default DiscriptionCardsHome;
import DiscriptionCards from "@/components/Cards/DiscriptionCards";

const DiscriptionCardsHome = () => {
  return (
            <div className="space-y-4 rounded-xl shadow p-4 bg-white border">
                <h2 className="text-xl font-semibold">Chamados Recentes:</h2>
                <DiscriptionCards 
                    title="Portao da caragem com defeito"
                    descricao="portao nao abre"
                >
                    em andamento
                </DiscriptionCards>

                <DiscriptionCards 
                    title="Lampada do corredor queimada"
                    descricao="lampada do corredor do 2 andar queimada"
                >
                    concluido
                </DiscriptionCards>
                <DiscriptionCards 
                    title="Lampada do corredor queimada"
                    descricao="lampada do corredor do 2 andar queimada"
                >
                    Aguardando
                </DiscriptionCards>
                <DiscriptionCards 
                    title="Lampada do corredor queimada"
                    descricao="lampada do corredor do 2 andar queimada"
                >
                    Agendado
                </DiscriptionCards>

            </div>
  )
}

export default DiscriptionCardsHome;
import DashboradCards from "@/components/Cards/DashboradCards"

const DashboardcardsHome = () => {
    return (
        <>
            <DashboradCards
                title="Total de chamados"
                number="13">
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Em andamento"
                number="1">
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Aguardando"
                number="1">
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Agendados"
                number="1">
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Concluídos"
                number="10">
                Atualizado às 10h15m
            </DashboradCards>
        </>
    )
}

export default DashboardcardsHome
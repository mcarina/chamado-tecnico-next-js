import DashboradCards from "@/components/Cards/DashboradCards"
import { LuPhone, LuAlarmClockCheck, LuInfo, LuCalendarCheck2, LuCircleCheckBig } from "react-icons/lu";

const DashboardcardsHome = ({ setFilter }: { setFilter: (value: string) => void }) => {
    return (
        <>
            <DashboradCards
                title="Total de chamados"
                status="total"
                number="13"
                icon={LuPhone}
                onClick={() => setFilter("all")}
                >
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Em andamento"
                status="em andamento"
                number="1"
                icon={LuInfo}
                onClick={() => setFilter("em andamento")}
                >
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Aguardando"
                status="aguardando"
                number="1"
                icon={LuAlarmClockCheck}
                onClick={() => setFilter("aguardando")}
                >
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Agendados"
                status="agendado"
                number="1"
                icon={LuCalendarCheck2}
                onClick={() => setFilter("agendado")}
                >
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Concluído"
                status="concluído"
                number="10"
                icon={LuCircleCheckBig}
                onClick={() => setFilter("concluído")}
                >
                Atualizado às 10h15m
            </DashboradCards>
        </>
    )
}

export default DashboardcardsHome
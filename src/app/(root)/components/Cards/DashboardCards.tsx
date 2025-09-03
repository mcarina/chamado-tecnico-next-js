import DashboradCards from "@/components/Cards/DashboradCards"
import { LuPhone, LuAlarmClockCheck, LuInfo, LuCalendarCheck2, LuCircleCheckBig } from "react-icons/lu";

const DashboardcardsHome = () => {
    return (
        <>
            <DashboradCards
                title="Total de chamados"
                status="total"
                number="13"
                icon={LuPhone}>
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Em andamento"
                status="em andamento"
                number="1"
                icon={LuInfo}>
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Aguardando"
                status="aguardando"
                number="1"
                icon={LuAlarmClockCheck}>
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Agendados"
                status="agendado"
                number="1"
                icon={LuCalendarCheck2}>
                Atualizado às 10h15m
            </DashboradCards>

            <DashboradCards
                title="Concluído"
                status="concluído"
                number="10"
                icon={LuCircleCheckBig}>
                Atualizado às 10h15m
            </DashboradCards>
        </>
    )
}

export default DashboardcardsHome
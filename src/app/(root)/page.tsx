'use client'
import PageHeader from "@/components/Header";
import { useState } from "react";
import DashboardcardsHome from "./components/Cards/DashboardCards";
import DiscriptionCardsHome from "./components/Cards/DiscriptionCards";
import ButtonCall from "./components/buttons/ButtonCall";

const Home = async () => {

    const [userType] = useState<"morador" | "sindico">("morador")

    return (
        <section className="p-6 space-y-6">
            <div className="max-w-7xl mx-auto">
                <PageHeader
                    title={`Bem-vindo, ${userType === "morador" ? "João" : "Síndico"}!`}
                    subtitle="Acompanhe os chamados técnicos de forma simples e rápida."
                />
                <ButtonCall />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    <DashboardcardsHome/>
                </div>
                <div className="space-y-4 rounded-xl shadow p-4 bg-white border">
                    <DiscriptionCardsHome />
                </div>
            </div>
        </section>
    );
}
export default Home
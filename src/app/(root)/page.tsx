'use client'
import PageHeader from "@/components/Header";
import { useState } from "react";
import DashboardcardsHome from "./components/Cards/DashboardCards";
import DiscriptionCardsHome from "./components/Cards/DiscriptionCards";
import Button from "@/components/Buttons";

export default function Home () {

    const [userType] = useState<", morador" | "sindico">(", morador")

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <div className="mb-8 animate-slide-up">
                <div className="flex items-center justify-between">
                    <div>
                        <PageHeader
                            title={`Bem-vindo${userType === ", morador" ? " " : ", Síndico"}!`}
                            subtitle="Acompanhe os chamados técnicos de forma simples e rápida."
                        />
                    </div>
                        <Button href="/NewCall">
                            Novo Chamado
                        </Button>
                </div>
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
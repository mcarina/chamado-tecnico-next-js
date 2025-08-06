"use client"
import { useState } from "react";
import DiscriptionCards from "@/components/Cards/DiscriptionCards";
import ModalComponent from "@/components/Modal";

const AdminDescriprionCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <h2 className="text-xl font-semibold">Chamados Recentes:</h2>
            <DiscriptionCards
                title="Portao da caragem com defeito"
                descricao="portao nao abre"
                button={
                    <button
                        className="px-3 py-1 bg-blue-800 text-white rounded"
                        onClick={() => setIsModalOpen(true)}>
                        Ver detalhes
                    </button>}
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

            <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3 className="text-lg font-semibold mb-2">Detalhes do chamado</h3>
                <p><strong>Título:</strong> Portão da garagem com defeito</p>
                <p><strong>Descrição:</strong> Portão não abre</p>
                <p><strong>Status:</strong> Em andamento</p>
                <p><strong>Usuário:</strong> João</p>
                <p><strong>Data de criação:</strong> 04/08</p>
            </ModalComponent>
        </>
    )
}

export default AdminDescriprionCard;
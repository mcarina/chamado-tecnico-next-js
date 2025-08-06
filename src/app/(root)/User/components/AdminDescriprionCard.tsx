"use client"
import { useState } from "react";
import DiscriptionCards from "@/components/Cards/DiscriptionCards";
import ModalComponent from "@/components/Modal";
import ModalAdmin from "./ModalAdmin";

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

            <ModalComponent 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            >
                <ModalAdmin imagens={['/path/to/image1.jpg', '/path/to/image2.jpg']} />
            </ModalComponent>
        </>
    )
}

export default AdminDescriprionCard;
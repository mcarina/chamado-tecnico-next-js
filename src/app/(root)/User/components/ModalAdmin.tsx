"use client"
import Link from "next/link";
import { useState } from "react";

interface ModalAdminProps {
    imagens: string[];
}


const ModalAdmin = ({ imagens = [] }: ModalAdminProps) => {
    const [tecnicoAgendado, setTecnicoAgendado] = useState<'sim' | 'nao' | ''>('');
    const [nomeTecnico, setNomeTecnico] = useState('');
    const [dataAgendada, setDataAgendada] = useState('');
    return (
        <>
            <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-semibold">Mais Detalhes: </h3>
                <p className="text-muted-foreground">Em andamento</p>
                <p><strong>Criado:</strong> 04/08</p>
            </div>
            <h3 className="text-lg font-semibold mb-2"></h3>

            <div>
                <label className="block font-medium mb-1">Titulo</label>
                <input
                    type="text"
                    disabled
                    className="w-full border rounded px-3 py-2 mb-4"
                    value="Portão da garagem com defeito"

                />
                <label className="block font-medium mb-1">Descrição</label>
                <textarea
                    id="description"
                    name="description"
                    disabled
                    className="w-full border rounded px-3 py-2 mb-4"
                    value="Portão 2 do bloco b, rua 4, predio 8, o portão não abre, apenas manual"

                />
            </div>
            {/* Campo: Técnico agendado? */}
            <div>
                <label className="block font-medium mb-1">Técnico agendado?</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-1">
                        <input
                            type="radio"
                            name="tecnicoAgendado"
                            value="sim"
                            checked={tecnicoAgendado === 'sim'}
                            onChange={() => setTecnicoAgendado('sim')}
                        />
                        Sim
                    </label>
                    <label className="flex items-center gap-1">
                        <input
                            type="radio"
                            name="tecnicoAgendado"
                            value="nao"
                            checked={tecnicoAgendado === 'nao'}
                            onChange={() => setTecnicoAgendado('nao')}
                        />
                        Não
                    </label>
                </div>
            </div>

            {/* Campos adicionais se técnico agendado for "sim" */}
            {tecnicoAgendado === 'sim' && (
                <>
                    <div>
                        <label className="block font-medium mb-1">Adicione o nome do técnico</label>
                        <input
                            type="text"
                            value={nomeTecnico}
                            onChange={(e) => setNomeTecnico(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Ex: Carlos Silva"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Selecione a data agendada da visita técnica</label>
                        <input
                            type="date"
                            value={dataAgendada}
                            onChange={(e) => setDataAgendada(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                </>
            )}

            {/* Campos adicionais se técnico agendado for "nao" */}
            {tecnicoAgendado === 'nao' && (
                <>
                    <div>
                        <label className="block font-medium mb-1">Por que o tecnico não agendado?</label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full border rounded-md px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Descreva para que o usuário fique ciente do motivo"
                        />

                    </div>

                </>
            )}

            {/* Imagens */}
            {imagens.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold mb-2">Imagens:</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {imagens.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Imagem ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg border"
                            />
                        ))}
                    </div>
                </div>
            )}

            <div>
                <button
                    type="submit"
                    className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                >
                    Salvar
                </button>
            </div>
        </>
    )
}

export default ModalAdmin;
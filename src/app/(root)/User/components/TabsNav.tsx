"use client";
import { useState } from "react";

const tabs = [
  { name: "Meus Chamados", id: "meus" },
  { name: "Histórico", id: "historico" },
  { name: "Favoritos", id: "favoritos" },
];

const TabsNav = () => {
  const [activeTab, setActiveTab] = useState("meus");

  return (
    <div>
      {/* Barra de navegação */}
      <nav className="border-b border-gray-200 mb-4 p-4">
        <ul className="flex space-x-6">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block px-4 py-2 font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Conteúdo de cada tab */}
      <div>
        {activeTab === "meus" && (
          <div>📋 Aqui ficam os meus chamados</div>
        )}
        {activeTab === "historico" && (
          <div>📜 Aqui fica o histórico de chamados</div>
        )}
        {activeTab === "favoritos" && (
          <div>⭐ Aqui ficam os chamados favoritos</div>
        )}
      </div>
    </div>
  );
};

export default TabsNav;

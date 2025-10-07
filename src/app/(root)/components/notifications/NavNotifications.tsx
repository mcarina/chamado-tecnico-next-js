'use client'

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { LuBellRing } from "react-icons/lu";

const PageNavNotification = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <>
            <div className="" ref={dropdownRef}>
                {/* Notificação */}
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <LuBellRing className="h-6 w-6 text-gray-700" />
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                        3
                    </span>
                </button>

                {/* Dropdown */}
                {showDropdown && (
                    <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                        <div className="p-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Notificações</h4>
                            <ul className="space-y-2 max-h-48 overflow-y-auto">
                                <li className="text-sm text-gray-600">
                                    <span className="font-semibold">Novo chamado:</span> Vazamento no 301
                                    <div className="text-xs text-gray-400">Hoje, 14:32</div>
                                </li>
                                <li className="text-sm text-gray-600">
                                    <span className="font-semibold">Chamado atualizado:</span> Portão Bloco B
                                    <div className="text-xs text-gray-400">Ontem, 10:15</div>
                                </li>
                                <li className="text-sm text-gray-600">
                                    <span className="font-semibold">Visita técnica agendada</span>
                                    <div className="text-xs text-gray-400">02/08, 16:00</div>
                                </li>
                            </ul>
                            <div className="mt-3 text-right">
                                <Link href="/notificacoes" className="text-blue-600 text-sm hover:underline">
                                    Ver todas
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
};

export default PageNavNotification;

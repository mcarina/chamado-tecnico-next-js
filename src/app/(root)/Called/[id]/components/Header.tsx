import { getStatusColor } from "@/utils/statusColors";

interface PageHeaderProps {
    title: string;
    status: string;
    footer?: React.ReactNode;
}

const CalledHeader = ({ title, status, footer }: PageHeaderProps) => {
    return (
        <div className="rounded-xl shadow p-6 bg-white border min-w-[200px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <header className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                        <span
                            className={`px-2 py-1 text-xs rounded-md font-semibold border ${getStatusColor(
                                status
                            )}`}
                        >
                            {status}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        {footer && (
                            <div className="flex items-center space-x-4 text-xs text-gray-600 mt-2">
                                {footer}
                            </div>
                        )}
                    </div>
                </header>

                <div className="flex gap-2">
                    <button className="rounded-lg p-2 border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent">
                        Editar
                    </button>
                    <button className="rounded-lg p-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:bg-blue-700 text-white">
                        Concluir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CalledHeader;

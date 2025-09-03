import { LuMail, LuSquarePen, LuPhone } from "react-icons/lu";

interface CardUserProps {
    email: string;
    telefone: string;
    name: string;
    ap: string;
}

const CardUser = ({ email, telefone, name, ap }: CardUserProps) => {
    return (
        <div className="flex items-start gap-4 p-4 gap-4">

            <div className="flex items-center justify-center w-12 h-12 
                            rounded-full bg-gradient-to-r from-blue-600 
                            via-blue-700 to-indigo-700 text-white text-lg font-bold"
            >
                {name.charAt(0).toUpperCase()}
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
                <div className="flex items-center gap-2 text-sm">
                    <LuSquarePen className="text-gray-600" />
                    <span className="text-gray-600">{ap}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <LuMail className="text-gray-600" />
                    <span className="text-gray-600">{email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <LuPhone className="text-gray-600" />
                    <span className="text-gray-600">{telefone}</span>
                </div>
            </div>
        </div>
    );
};

export default CardUser;

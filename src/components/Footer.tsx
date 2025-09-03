import Link from "next/link";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white mt-8">
            <div className="max-w-7xl mx-auto py-12">

                <div className="border-t border-white/10 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-blue-100 text-sm">© 2025 CallTech. Todos os direitos reservados.</p>
                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="flex items-center space-x-1 text-blue-100 text-sm">
                                <LuPhone className="h-4 w-4 mr-2 mt-0" />
                                Suporte
                            </Link>
                            <div className="flex items-center space-x-1 text-blue-100 text-sm">
                                Versão v1.0.0
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;

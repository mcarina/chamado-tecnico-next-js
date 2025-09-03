import { LuPaperclip } from "react-icons/lu";
import Header from "./title/headertitle";

interface ImagesProps {
    title: string;
    size: string;
}

const Images = ({ title, size }:ImagesProps) => {
    return (
        <div className="rounded-xl shadow p-6 bg-white border min-w-[200px]">
            <Header title={title}/>
           <div>
            <div className="space-y-3">
                <div
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                    <LuPaperclip className="w-5 h-5 text-gray-500" />
                    <div className="flex-1">
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">{size}</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Images;

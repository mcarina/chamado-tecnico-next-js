import { getStatusColor } from "@/utils/statusColors";
interface DiscriptionCardsProps {
  title: string;
  status: string;
  descricao: string
  footer?: React.ReactNode;
  button?: React.ReactNode;
}

const DiscriptionCards = ({ title, status, descricao, footer, button }: DiscriptionCardsProps) => {


  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <header className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-x font-semibold">{title}</h3>
            <span
              className={`px-2 py-1 text-xs rounded-md font-semibold border ${getStatusColor(
                status
              )}`}
            >
              {status}
            </span>
          </div>
          <p className="text-muted-foreground">{descricao}</p>
          {footer && (
            <div className="flex items-center space-x-4 text-xs text-gray-600 mt-2">
              {footer}
            </div>
          )}
        </header>
        {button && (
          <div className="ml-4">
            {button}
          </div>
        )}
      </div>
    </article>
  );
};

export default DiscriptionCards;

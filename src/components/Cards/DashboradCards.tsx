import { IconType } from "react-icons";
import { getStatusColor } from "@/utils/statusColors";
interface CardsProps {
  title: string;
  number: string;
  children: React.ReactNode;
  icon?: IconType;
  status?: string;
}

const DashboradCards = ({ title, number, children, icon: Icon, status }: CardsProps) => {
  const colorClasses = status ? getStatusColor(status) : "border-gray-200";

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      <div className={`rounded-xl shadow p-6 bg-white border min-w-[200px] ${colorClasses}`}>
          <header className="flex flex-row items-center justify-between space-y-0 pb-2">
              {Icon && <Icon className="w-5 h-5 text-blue-500" />}
               <h2 className="text-sm font-bold text-muted-foreground mb-1">{title}</h2>
          </header>
          <section>
              <div className="text-2xl font-bold mb-1">{number}</div>
              <p className="text-xs text-muted-foreground">{children}</p>
          </section>
      </div>
    </article>
  );
};

export default DashboradCards;

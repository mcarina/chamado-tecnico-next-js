interface DiscriptionCardsProps {
  title: string;
  children: React.ReactNode;
  descricao: string
}

const DiscriptionCards = ({ title, children, descricao }: DiscriptionCardsProps) => {
  return (
    <article className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <header className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-x font-semibold">{title}</h3>
                    <p className="text-muted-foreground">{children}</p>
                </div>
                <p className="text-muted-foreground">{descricao}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <span>usuario:</span>
                    <span>criado em:</span>
                    <span>tecnico:</span>
                    <span>Agendado/concluido:</span>
                </div>
            </header>

        </div>
    </article>
  );
};

export default DiscriptionCards;

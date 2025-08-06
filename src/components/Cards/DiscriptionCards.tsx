interface DiscriptionCardsProps {
  title: string;
  children: React.ReactNode;
  descricao: string
  footer?: React.ReactNode;
  button?: React.ReactNode;
}

const DiscriptionCards = ({ title, children, descricao, footer, button }: DiscriptionCardsProps) => {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <header className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-x font-semibold">{title}</h3>
            <p className="text-muted-foreground">{children}</p>
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

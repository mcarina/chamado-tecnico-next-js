interface CardsProps {
  title: string;
  number: string;
  children: React.ReactNode;
}

const DashboradCards = ({ title, number, children }: CardsProps) => {
  return (
    <article className="rounded-xl shadow p-4 bg-white border min-w-[200px]">
        <header className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h2 className="text-xl font-semibold">{title}</h2>
        </header>
        <section>
            <div className="text-2xl font-bold mb-1">{number}</div>
            <p className="text-xs text-muted-foreground">{children}</p>
        </section>
    </article>
  );
};

export default DashboradCards;

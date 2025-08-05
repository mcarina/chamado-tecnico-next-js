interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="mb-6 border-b pb-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="mb-6 border-b pb-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    </header>
  );
};

export default Header;

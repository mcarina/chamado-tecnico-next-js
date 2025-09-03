import Link from "next/link";

interface ButtonProps {
  href?: string; // se tiver vira Link
  onClick?: () => void; // se não tiver href, vira button
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "md:col-span-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition-colors duration-200";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

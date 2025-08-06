import Link from "next/link";
import { LuMonitorSmartphone, LuBellRing, LuUserRound } from "react-icons/lu";

const PageNavBar = () => {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <LuMonitorSmartphone className="h-8 w-8 text-blue-700" />
                <h1 className="text-xl font-bold text-gray-900">CallTech</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button>
              <LuBellRing className="h-5 w-5" />
            </button>
            <Link href="/User">
            <button>
              <LuUserRound className="h-6 w-6 text-gray-700" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageNavBar;

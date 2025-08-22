import Link from "next/link";
import { LuMonitorSmartphone, LuSearch, LuUserRound } from "react-icons/lu";
import PageNavNotification from "./notifications/NavNotifications";

const PageNavBar = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <LuMonitorSmartphone className="h-8 w-8 text-blue-700" />
                <h1 className="text-xl font-bold text-gray-900">CallTech</h1>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar chamados..."
                className="pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            <div className="relative">
              <button>
                <PageNavNotification />
              </button>
            </div>
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

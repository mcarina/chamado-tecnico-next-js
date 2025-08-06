import DashboardcardsHome from "../components/Cards/DashboardCards";
import AdminDescriprionCard from "./components/AdminDescriprionCard";

const PageUser = async () => {
    return (
        <section className="p-6 space-y-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-6 items-start">
                    <div className="flex-1 space-y-4 rounded-xl shadow p-4 bg-white border">
                        <AdminDescriprionCard />
                    </div>
                    <div className="w-64 space-y-4 rounded-xl shadow p-4 bg-white border">
                        <DashboardcardsHome />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PageUser
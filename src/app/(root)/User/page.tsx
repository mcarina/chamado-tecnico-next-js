import CardUser from "./components/CardUser";
import TabsNav from "./components/TabsNav";

export default function PageUser() {
    return (
        <section className="p-6 space-y-6">
            <div className="max-w-7xl mx-auto">
                <div className="gap-6 items-start">
                    <div className="flex-1 space-y-4 rounded-xl shadow p-4 bg-white border">
                      <CardUser
                        name="usuarioaq"
                        email="user@email.com"
                        telefone="(92) 9 9999-9999"
                        ap= "Bloco c, rua 2, apart.201"

                      />
                    </div>
                    <div className="mt-6">
                        <TabsNav/>
                    </div>
                </div>
            </div>
        </section>
    );
}
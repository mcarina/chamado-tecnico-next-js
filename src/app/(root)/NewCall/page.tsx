import PageHeader from "@/components/Header";
import FormNewCall from "./components/Form";

const NewCall = async () => {
    return (
        <section className="p-6 space-y-6">
            <div className="max-w-7xl mx-auto">
                <PageHeader
                    title="Novo Chamado Técnico"
                    subtitle="Descreva o problema no formulário abaixo."
                />
                <FormNewCall />
            </div>
        </section>
    );
}
export default NewCall
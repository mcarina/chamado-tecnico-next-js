interface DetailsProps {
    description: string;
} 
const Details = ({ description }: DetailsProps) => {
    return (
        <div className="rounded-xl shadow p-6 bg-white border min-w-[200px]">
            <div className="lg:flex-row lg:items-center lg:justify-between gap-4">
                <header>
                    <h2 className="text-lg font-semibold text-gray-900">
                        Detalhes do Relato
                    </h2>
                </header>
                <div className="mt-6">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Descrição</h4>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

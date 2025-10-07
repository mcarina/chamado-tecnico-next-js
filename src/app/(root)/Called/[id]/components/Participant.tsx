interface ParticipantProps {
    title: string;
    subtitle: string;
    email: string;
    telefone: string;
    name: string;
}

const Participant = ({ title, subtitle, email, telefone, name }: ParticipantProps) => {
    return (
        <div className="rounded-xl shadow p-6 bg-white border min-w-[200px]">
            <div className="lg:flex-row lg:items-center lg:justify-between gap-4">
                <header>
                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                </header>

                <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                        - {name}
                    </h4>
                    <p className="text-sm text-gray-500 flex items-center">{subtitle}</p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">{email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">{telefone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participant;

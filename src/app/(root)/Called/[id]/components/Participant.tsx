interface ParticipantProps {
    title: string;
}

const Participant = ({ title }: ParticipantProps) => {
    return (
        <div className="rounded-xl shadow p-6 bg-white border min-w-[200px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {title}
            </div>
        </div>
    );
};

export default Participant;

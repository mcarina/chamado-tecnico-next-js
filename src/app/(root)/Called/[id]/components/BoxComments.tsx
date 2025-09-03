import Header from "./title/headertitle";

interface BoxCommentsProps {
    title: string;
    defaultValue?: string;
    onSubmit?: (comment: string) => void;
}
const BoxComments = ( {title, defaultValue = "", onSubmit }:BoxCommentsProps ) => {
    return (
        <div className="rounded-xl shadow p-6 bg-white border min-w-[200px]">
            <Header title={title}/>

            <form
                className="space-y-6"
                onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const textarea = form.elements.namedItem("comment") as HTMLTextAreaElement;
                onSubmit?.(textarea.value);
                }}
            >
                <textarea
                name="comment"
                // defaultValue={defaultValue}
                placeholder="Digite seu comentário ou atualização sobre o chamado..."
                className="w-full max-w-xg min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2"
                />

                <div className="flex justify-end">
                <button
                    type="submit"
                    className="rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                    Enviar comentário
                </button>
                </div>
            </form>
        </div>
    );
};

export default BoxComments;

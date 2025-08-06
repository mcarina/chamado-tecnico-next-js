interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalComponent = ({ isOpen, onClose, children}: ModalProps) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold"
        >
          ×
        </button>

        {/* Conteúdo do modal */}
        <div className="space-y-4">
          {children}

        </div>
      </div>
    </div>
  );
};

export default ModalComponent;

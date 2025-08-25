export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) { // <- normaliza para evitar problema de maiúscula/minúscula
    case "em andamento":
      return "text-blue-800 border-blue-200";
    case "Concluído":
      return "text-green-800 border-green-200";
    case "Aguardando":
      return "text-yellow-800 border-yellow-200";
    case "agendado":
      return "text-indigo-800 border-indigo-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

  export const getStatusColor = (status: string) => {
    switch (status) {
      case "em andamento":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "concluído":
        return "bg-green-100 text-green-800 border-green-200"
      case "aguardando":
        return "text-yellow-800 border-yellow-200"
      case "agendado":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }


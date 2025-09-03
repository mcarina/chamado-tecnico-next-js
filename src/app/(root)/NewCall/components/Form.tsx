'use client'
import Link from "next/link";
import { useState } from "react";
import { LuFileImage } from "react-icons/lu";

const FormNewCall = () => {
  const [fotos, setFotos] = useState<File[]>([])
  const [fotosPreview, setFotosPreview] = useState<string[]>([])
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])

    const newFotos = [...fotos, ...files]
    setFotos(newFotos)

    // Criar previews das imagens
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFotosPreview(prev => [...prev, e.target?.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeFoto = (index: number) => {
    setFotos(prev => prev.filter((_, i) => i !== index))
    setFotosPreview(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4 rounded-xl shadow p-8 bg-white border">
      <div>
        <h3 className="text-xl font-semibold">Informações do chamado:</h3>
        <p>Preencha todos os campos para que possamos atender sua solicitação da melhor forma</p>
      </div>

      <form action="" className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Título *
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Portão da garagem com defeito"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium text-gray-700">
            Descrição *
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border rounded-md px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Descreva detalhadamente o problema encontrado..."
          />
        </div>

        <div className="space-y-2">
          <div>
            <label htmlFor="description" className="text-sm font-medium text-gray-700">
              Adicione Fotos *
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Adicione fotos para ajudar na identificação do problema
            </p>
          </div>

          {/* Preview das fotos */}
          {fotosPreview.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {fotosPreview.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview || "/placeholder.svg"}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => removeFoto(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}

          <div>
            <input
              type="file"
              id="fotos"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="fotos" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors">
              <div className="text-center">
                <LuFileImage className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm text-gray-600">
                  Clique para adicionar fotos
                </span>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG até 5MB cada
                </p>
              </div>
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Enviar chamado
          </button>

          <Link href="/" className="ml-2">
            <button type="button" className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm">
              Cancelar
            </button>
          </Link>

        </div>

      </form>
    </div>
  );
};

export default FormNewCall;

import Link from "next/link"

const ButtonCall = () => {
  return (
    <Link href="/NewCall">
            <div>
                <button
                    type="button"
                    className="md:col-span-1 bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition-colors duration-200"
                >
                    Novo chamado
                </button>
            </div>
    </Link>
  )
}

export default ButtonCall
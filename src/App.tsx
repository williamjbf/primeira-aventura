import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <h1 className="text-5xl font-extrabold mb-4">Teste Tailwind + React + TS</h1>
            <p className="text-lg mb-6">Se você está vendo isso estilizado, o Tailwind está funcionando!</p>
            <button
                className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-indigo-100 transition">
                Botão Teste
            </button>
        </div>
    )
}

export default App

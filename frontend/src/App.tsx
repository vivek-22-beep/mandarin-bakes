// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#8B4513]">
          Mandarin Bakes
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Crafted with Love, Baked to Perfection
        </p>

        <button className="mt-8 rounded-lg bg-[#8B4513] px-6 py-3 text-white transition hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

export default function App() {
  const [selectedColor, setSelectedColor] = useState("Negro");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg
            viewBox="0 0 1600 1000"
            className="w-[1100px] md:w-[1500px] h-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="M800 210C745 220 700 245 670 285L590 520L710 675"
              stroke="white"
              strokeWidth="34"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M800 210C855 220 900 245 930 285L1010 520L890 675"
              stroke="white"
              strokeWidth="34"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M590 520L705 390C760 330 840 330 895 390L1010 520"
              stroke="white"
              strokeWidth="34"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M710 675L560 760V870"
              stroke="white"
              strokeWidth="34"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M890 675L1040 760V870"
              stroke="white"
              strokeWidth="34"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/95" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-red-500 mb-4">
            Movimiento Oficial
          </p>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
            LOS INVISIBLES
          </h1>

          <p className="text-xl md:text-3xl font-light mb-8 leading-relaxed">
            NO QUEREMOS APLAUSOS. <br />
            <span className="text-red-500 font-semibold">
              EXIGIMOS RESPETO.
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#comprar"
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform"
            >
              COMPRAR AHORA
            </a>

            <a
              href="#historia"
              className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition-all"
            >
              NUESTRA HISTORIA
            </a>
          </div>
        </div>
      </section>

      {/* MENSAJE */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
          TODOS SOMOS INVISIBLES PARA ALGUIEN.
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Pero sin nosotros, nada funciona.
        </p>
      </section>

      {/* PRODUCTO */}
      <section id="comprar" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
              alt="Camiseta Los Invisibles"
              className="rounded-3xl shadow-2xl object-cover w-full h-[650px]"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-red-500 mb-4">
              Primera colección oficial
            </p>

            <h3 className="text-5xl md:text-7xl font-black mb-6">
              ALBAÑILES
            </h3>

            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              SIN NOSOTROS, TODO SE VIENE ABAJO.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold">39,99€</span>
            </div>

            {/* COLORES */}
            <div className="mb-8">
              <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-3">
                Color
              </p>

              <div className="flex gap-3">
                {["Negro", "Blanco", "Aloe"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-3 rounded-xl border text-sm font-bold ${
                      selectedColor === color
                        ? "bg-white text-black border-white"
                        : "border-zinc-700 text-white"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* TALLAS */}
            <div className="mb-10">
              <p className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-3">
                Talla
              </p>

              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-xl border font-black ${
                      selectedSize === size
                        ? "bg-red-600 border-red-600 text-white"
                        : "border-zinc-700 text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="bg-white text-black px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-transform w-full md:w-auto">
              COMPRAR CAMISETA
            </button>

            <div className="mt-10 border-t border-zinc-800 pt-8 space-y-3 text-gray-300">
              <p>✔ Stanley/Stella Creator 2.0</p>
              <p>✔ Algodón orgánico premium</p>
              <p>✔ Envío 24/72h</p>
              <p>✔ Compra segura</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section
        id="historia"
        className="py-24 px-6 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-8">
          ESTO NO ES SOLO ROPA.
        </h2>

        <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
          Es orgullo. <br />
          Es identidad. <br />
          Es respeto.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-3xl font-black">LOS INVISIBLES</h3>
            <p className="text-gray-400 mt-2">
              NO QUEREMOS APLAUSOS. EXIGIMOS RESPETO.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400 text-sm justify-center">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

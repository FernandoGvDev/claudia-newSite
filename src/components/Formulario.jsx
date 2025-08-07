import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const typingText = "Formulário de Contato";

export default function Formulario() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Máquina de escrever no título
  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + typingText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Função de envio que abre o WhatsApp com a mensagem
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nome = formData.get("nome");
    const cidade = formData.get("cidade");
    const assunto = formData.get("assunto");

    let mensagem = `Olá, gostaria de entrar em contato.\n\n`;
    mensagem += `Nome: ${nome}\n`;
    if (cidade) mensagem += `Cidade: ${cidade}\n`;
    mensagem += `Assunto: ${assunto}`;

    setEnviando(true);

    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);

      const numero = "555193736889";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    }, 2000);
  }

  return (
    <section
      ref={ref}
      id="formulario"
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Background animado sutil (zoom) */}
      <div className="absolute inset-0 bg-black/30 animate-zoomSlow pointer-events-none" />

      <AnimatePresence>
        {!enviado && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white/70 max-w-md w-full p-6 rounded-lg shadow-lg backdrop-blur-md z-10"
          >
            <h1 className="text-[#57201c] text-center text-2xl font-bold mb-6 whitespace-nowrap">
              {typed}
            </h1>

            <label
              htmlFor="nome"
              className="block font-semibold text-gray-700 mb-1"
            >
              Nome (obrigatório):
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
            />

            <label
              htmlFor="cidade"
              className="block font-semibold text-gray-700 mb-1"
            >
              Cidade (opcional):
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              className="w-full p-2 border border-gray-300 rounded mb-4
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
            />

            <label
              htmlFor="assunto"
              className="block font-semibold text-gray-700 mb-1"
            >
              Assunto (obrigatório):
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              required
              className="w-full p-2 border border-gray-300 rounded mb-6
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={enviando}
              className="w-full bg-[#57201c] text-white py-2 rounded
                hover:bg-[#694a1b] transition duration-200 font-semibold flex justify-center items-center gap-2"
            >
              {enviando ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                  ></path>
                </svg>
              ) : (
                "Enviar para WhatsApp"
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Mensagem após envio */}
      {enviado && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 p-6 rounded-lg shadow-lg max-w-md text-center text-[#57201c] font-semibold z-10"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <h2 className="text-xl mb-4">Mensagem enviada com sucesso!</h2>
          <p>Obrigado pelo contato, responderemos em breve.</p>
        </motion.div>
      )}

      {/* Estilos extras para background animado */}
      <style>{`
        @keyframes zoomSlow {
          0% { background-size: 100% 100%; }
          50% { background-size: 110% 110%; }
          100% { background-size: 100% 100%; }
        }
        .animate-zoomSlow {
          animation: zoomSlow 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

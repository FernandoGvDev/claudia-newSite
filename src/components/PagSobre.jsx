// PagSobre.jsx
import React from "react";
import { motion } from "framer-motion";
import perfil from "./../assets/img/perfil01.png"; // ajuste o caminho se necessário

/*
  PagSobre.jsx - Página "Sobre" aprimorada (único arquivo)
  - Tipografia: título serifado, corpo sans
  - Layout: imagem | linha dourada | conteúdo
  - Seções: quem é, história, especialidades, valores, formação
  - CTA premium (botão selo dourado)
  - Animações sutis com Framer Motion
  - Acessibilidade: alt, aria-labels, semantic tags
*/

const FADE_UP = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.9, 0.36, 1], delay }
  })
};

export default function PagSobre() {
  return (
    <main className="bg-[#f8f5f2] text-[#111827]">
      <section
        id="sobre"
        className="max-w-6xl mx-auto px-6 py-12 lg:py-20"
        aria-labelledby="sobre-title"
      >
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* IMAGE */}
          <motion.figure
            className="flex-shrink-0 w-full lg:w-[380px] rounded-xl overflow-hidden border-2 border-transparent"
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            custom={0}
          >
            <div
              className="rounded-xl overflow-hidden mx-auto"
              style={{
                border: "4px solid rgba(197,167,107,0.92)",
                padding: 6,
                boxShadow: "0 18px 40px rgba(87,32,28,0.08)",
                background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(197,167,107,0.03))"
              }}
            >
              <img
                src={perfil}
                alt="Dra. Claudia Steinntz — foto institucional"
                loading="lazy"
                width={420}
                height={560}
                className="block w-full h-auto object-cover rounded-[8%]"
                style={{ objectPosition: "10% 10%" }}
              />
            </div>
          </motion.figure>

          {/* GOLD DIVIDER */}
          <div className="hidden lg:flex items-stretch">
            <div
              aria-hidden="true"
              className="w-[1px] bg-gradient-to-b from-transparent via-[#c8a951] to-transparent mx-6"
              style={{ height: 420 }}
            />
          </div>

          {/* CONTENT */}
          <motion.article
            className="flex-1 font-sans"
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            custom={0.1}
          >
            <header className="mb-4">
              <h2 id="sobre-title" className="text-3xl md:text-4xl font-serif text-[#57201c] font-bold leading-tight mb-3">
                Conheça a advogada que vai te ajudar
              </h2>
              <p className="text-base text-[#374151] leading-relaxed max-w-3xl">
                <strong className="font-semibold">Claudia Steinntz</strong>, advogada (OAB/RS 138.087) e fundadora do escritório Steinntz Advogados. Atuação voltada para resolver conflitos com técnica e empatia, priorizando soluções objetivas para cada caso.
              </p>
            </header>

            <motion.div className="space-y-4 mb-6" variants={FADE_UP} custom={0.2}>
              <p className="text-[16px] leading-relaxed text-[#222]">
                Após uma transição de carreira aos 30 anos, Dra. Claudia construiu uma trajetória marcada por dedicação e superação. Hoje lidera uma atuação autônoma com apoio de uma rede de parceiros, garantindo atendimento humano e especializado.
              </p>

              <p className="text-[16px] leading-relaxed text-[#222]">
                Além da atuação jurídica, Dra. Claudia valoriza a vida familiar — é esposa e mãe — e incorpora valores como <strong>compromisso, empatia</strong> e <strong>responsabilidade</strong> em cada caso.
              </p>
            </motion.div>

            {/* SPECIALTIES + VALUES */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6" variants={FADE_UP} custom={0.3}>
              <div className="bg-white rounded-lg p-5 shadow-sm border border-[#efe7da]">
                <h3 className="text-lg font-semibold text-[#3f2b25] mb-3">Especialidades</h3>
                <ul className="list-inside space-y-2 text-[#333]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#57201c]" aria-hidden="true" />
                    <span><strong>Direito do Trabalho</strong> — contencioso e consultivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#c5a76b]" aria-hidden="true" />
                    <span><strong>Previdenciário</strong> — aposentadorias e auxílios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#57201c]" aria-hidden="true" />
                    <span><strong>Famílias</strong> — guarda, divórcio e inventário</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-[#efe7da]">
                <h3 className="text-lg font-semibold text-[#3f2b25] mb-3">Valores</h3>
                <ul className="space-y-2 text-[#333]">
                  <li><strong>Empatia</strong> — cada cliente ouvido com atenção</li>
                  <li><strong>Ética</strong> — transparência em cada passo do processo</li>
                  <li><strong>Efetividade</strong> — foco em resultados práticos</li>
                </ul>
              </div>
            </motion.div>

            {/* FORMATION + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <motion.div variants={FADE_UP} custom={0.35}>
                <p className="text-[15px] text-[#374151]">
                  <strong>Formação:</strong> Universidade Ritter dos Reis (UNIRITTER)
                </p>
                <p className="text-sm text-[#6b6b6b] mt-2">Mais de <strong>120</strong> atendimentos realizados com foco humano e técnico.</p>
              </motion.div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CONVERSION BAND */}
      <section className="bg-white border-t-2 border-[#efe7da]">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            custom={0.45}
            className="text-lg text-[#333] max-w-2xl mx-auto leading-relaxed mb-6"
          >
            Se você busca atendimento jurídico humano, ético e competente, entre em contato conosco. Vamos analisar seu caso com cuidado e apresentar a melhor estratégia.
          </motion.p>

          <motion.a
            href="https://wa.me/555193736889"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Dra. Claudia agora pelo WhatsApp"
            className="inline-block px-7 py-3 bg-gradient-to-r from-[#c8a951] to-[#bfa237] text-white text-[16px] font-semibold rounded-full shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            custom={0.5}
          >
            Fale com a Dra. Claudia
          </motion.a>
        </div>
      </section>
    </main>
  );
}

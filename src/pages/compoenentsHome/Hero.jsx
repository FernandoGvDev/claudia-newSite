import TypingEffect from "../../components/TypingEffect";
import bannerImg from "../../assets/img/banner.jpg";

export default function Hero({
  title = "Fornecemos orientação jurídica com",
  highlight = "profissionalismo e total transparência!",
  subtitle = "Auxiliamos você em demandas:",
  words = ["trabalhistas", "familiares", "cíveis", "penais"],
  ctaLabel = "AGENDAR UMA CONSULTA",
  ctaLink = "#formulario",
  background = bannerImg,
}) {
  return (
    <section
      className="relative flex items-center justify-center min-h-[70vh] sm:min-h-screen px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.35] z-0 transition-opacity duration-700"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Gradiente por cima */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-0" />

      {/* Conteúdo */}
      <section
        className="relative z-10 text-center max-w-3xl mx-auto 
        p-6 sm:p-10 mt-16 mb-10 animate-fade-up"
      >
        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl font-semibold font-serif mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>

        {/* H2 */}
        <h2 className="text-2xl sm:text-4xl font-bold font-serif mb-3 sm:mb-5 leading-snug">
          <span className="text-[#f5d29b]">{highlight}</span>
        </h2>

        {/* H3 */}
        <h3 className="text-lg sm:text-2xl font-serif mb-6 sm:mb-8 leading-relaxed">
          {subtitle}
          <br />
          <TypingEffect words={words} speed={90} deleteSpeed={70} pause={1200} />
        </h3>

        {/* 🔥 Novo botão estiloso do Uiverse */}
        <a href={ctaLink}>
          <button
            className="
              relative inline-flex items-center gap-2 
              px-6 py-3 font-semibold text-[#fffaf5]
              bg-gradient-to-tr from-[#57201c]/30 via-[#57201c]/80 to-[#57201c]/90
              ring-4 ring-[#57201c]/20 
              rounded-full overflow-hidden hover:opacity-90 
              transition-opacity
              before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 
              before:w-[100px] before:h-[100px] before:rounded-full 
              before:bg-gradient-to-b before:from-white/10 before:blur-xl
            "
          >
            {ctaLabel}
          </button>
        </a>
      </section>
    </section>
  );
}

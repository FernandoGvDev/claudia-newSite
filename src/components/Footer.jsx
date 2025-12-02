export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-[#3b1f1d] text-[#f8f5f2] text-center py-10 px-6 border-t-4 border-[#c8a951]"
    >
      <p className="text-sm tracking-wide opacity-90">
        &copy; 2021 - {anoAtual} Steinntz Advogados — Todos os direitos reservados
      </p>

      <div className="mt-4 leading-relaxed">
        <p className="text-[15px]">Entre em contato</p>

        <a
          href="mailto:contato@steinntz.adv.br"
          className="text-[#c8a951] font-medium hover:opacity-80 transition-opacity block mt-1"
        >
          contato@steinntz.adv.br
        </a>
      </div>
    </footer>
  );
}

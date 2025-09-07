import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaBars } from "react-icons/fa";
import TypingEffect from '../components/TypingEffect';
import ServicosCard from '../components/ServicosCard';
import Sobre from '../components/Sobre';
import FAQ from '../components/FAQ';
import Formulario from '../components/Formulario';
import { Link } from 'react-router-dom';

import logo from "../assets/img/logo-trasparente.jpg";
import bannerImg from '../assets/img/banner.jpg';

function Home() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(prev => !prev);
  };

  return (
    <div>
      {/* Header */}
      <header className="relative flex items-center justify-between px-4 sm:px-6 py-3 bg-[#57201c] text-white h-[70px] sm:h-[80px]">
        {/* Ícones sociais */}
        <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl">
          <a href="https://wa.me/555193736889" target="_blank" aria-label="WhatsApp" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/steinntz_advogados" target="_blank" aria-label="Instagram" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Logo central absoluta */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo da Advogada" className="h-[60px] sm:h-[100px]" />
        </div>

        {/* Botão do menu */}
        <button
          className="text-xl sm:text-2xl"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <FaBars />
        </button>

        {/* Menu suspenso */}
        <nav
          id="menu"
          className={`${menuAtivo ? "flex" : "hidden"} absolute top-[70px] sm:top-[80px] right-4 bg-[#333] rounded-md p-4 z-50 text-center flex-col w-40`}
        >
          <a href="#inicio" className="block text-white hover:text-yellow-400 py-1">Início</a>
          <Link to="/sobre" className="block text-white hover:text-yellow-400 py-1">
            Sobre
          </Link>
          <a
            href="https://wa.me/555193736889"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-yellow-400 py-1"
          >
            Contato
          </a>
        </nav>
      </header>

      {/* Banner */}
      <main
  className="relative flex items-center justify-center min-h-[70vh] sm:min-h-screen px-4 sm:px-6 text-white overflow-hidden"
>
  {/* Fundo */}
  <div
    className="absolute inset-0 bg-cover bg-center brightness-[0.45] z-0"
    style={{ backgroundImage: `url(${bannerImg})` }}
  ></div>

  {/* Caixa de texto centralizada */}
  <section className="relative z-10 text-center p-6 sm:p-10 mb-16 mt-16">
    <h1 className="text-3xl sm:text-6xl font-semibold font-serif mb-4 sm:mb-6">
      Fornecemos orientação jurídica com
    </h1>

    <h2 className="text-2xl sm:text-4xl font-bold font-serif mb-3 sm:mb-4">
      <span className="text-[#f5d29b] font-semibold">
        profissionalismo e total transparência!
      </span>
    </h2>

    <h3 className="text-lg sm:text-2xl font-serif mb-6 sm:mb-8">
      Auxiliamos você em demandas:<br />
      <TypingEffect words={['trabalhistas', 'familiares', 'cíveis', 'penais']} />
    </h3>

    <a
      href="#formulario"
      className="inline-block bg-[#c8a951] text-[#57201c] font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-[#b89738] hover:scale-105 transition duration-200"
    >
      AGENDAR UMA CONSULTA
    </a>
  </section>
</main>


      {/* Serviços */}
      <div className="mb-10 px-4 sm:px-0">
        <ServicosCard />
      </div>

      {/* Sobre */}
      <div className="mb-20 sm:mb-36 px-4 sm:px-0">
        <Sobre />
      </div>

      {/* FAQ */}
      <div className="mb-20 sm:mb-32 px-4 sm:px-0">
        <FAQ />
      </div>

      {/* Formulário de contato */}
      <div className="px-4 sm:px-0">
        <Formulario />
      </div>

      {/* Rodapé */}
      <footer className="bg-[#222] text-white text-center py-6 px-4" id="contato">
        <p>&copy; 2021 - 2025 Steinntz Advogados - Todos os direitos reservados</p>
        <p className="mt-2">
          Entre em contato <br />
          <a
            href="mailto:contato@steinntz.adv.br"
            className="text-[#ffcc00] hover:underline"
          >
            contato@steinntz.adv.br
          </a>
          <br />
          <a
            href="https://wa.me/555193736889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffcc00] hover:underline"
          >
            WhatsApp
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;

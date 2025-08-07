import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaBars } from "react-icons/fa";
import PagSobre from '../components/PagSobre';
import { Link } from 'react-router-dom';

import logo from "../assets/img/logo-trasparente.jpg";


function PaginaSobre() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(prev => !prev);
  };

  return (
    <>
      <div>
        {/* Header */}
        <header className="relative flex items-center justify-between px-6 py-3 bg-[#57201c] text-white h-[80px]">
          {/* Ícones sociais */}
          <div className="flex gap-4 text-2xl">
            <a href="https://wa.me/555193736889" target="_blank" aria-label="WhatsApp" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/steinntz_advogados" target="_blank" aria-label="Instagram" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>

          {/* Logo central absoluta */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Logo da Advogada" className="h-[100px]" />
          </div>

          {/* Botão do menu */}
          <button
            className="text-2xl"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <FaBars />
          </button>

          {/* Menu suspenso */}
          <nav
            id="menu"
            className={`${menuAtivo ? "flex" : "hidden"} absolute top-[80px] right-6 bg-[#333] rounded-md p-4 z-50 text-center flex-col`}
          >
            <Link to="/" className="block text-white hover:text-yellow-400 py-1">
              Início
            </Link>
            <a href="#" className="block text-white hover:text-yellow-400 py-1">Sobre</a>
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

        {/* Pagina */}
        <PagSobre />

        {/* Rodapé */}
        <footer className="bg-[#222] text-white text-center py-6" id="contato">
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

      </div >
    </>
  );
}

export default PaginaSobre;

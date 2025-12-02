import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React, { useState } from "react";

import logo from "../assets/img/logo-trasparente.jpg";

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => setMenuAtivo(prev => !prev);
  const fecharMenu = () => setMenuAtivo(false);

  return (
    <header className="relative flex items-center justify-between px-4 sm:px-6 py-3 bg-[#57201c] text-white h-[70px] sm:h-[80px] border-b-2 border-[#d4af37]/40 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">

      {/* Ícones sociais */}
      <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl">
        <a
          href="https://wa.me/555193736889"
          target="_blank"
          aria-label="WhatsApp"
          rel="noreferrer"
          className="hover:text-[#d4af37] transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/steinntz_advogados"
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
          className="hover:text-[#d4af37] transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Logo central */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src={logo}
          alt="Logo da Advogada"
          className="h-[60px] sm:h-[100px] drop-shadow-md"
        />
      </div>

      {/* Botão Menu — UIVERSE */}
      <button
        onClick={toggleMenu}
        aria-label="Abrir menu"
        className="group flex items-center justify-center relative z-10 transition-all duration-500 ease-in-out rounded-md p-[5px] cursor-pointer border border-[#999] outline-none focus-visible:outline-0 text-white hover:text-[#d4af37]"
      >

        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className={`w-7 h-7 overflow-visible transition-transform duration-300 ease-in-out
      ${menuAtivo ? "rotate-45" : "rotate-0"}
    `}
        >
          <path
            className={`transition-transform duration-300 ease-in-out
        ${menuAtivo ? "[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]" : ""}
      `}
            d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
          ></path>

          <path
            className={`transition-transform duration-300 ease-in-out
        ${menuAtivo ? "[transform:rotate(22.5deg)_translate(15.5%,-23%)]" : ""}
      `}
            d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
          ></path>

          <path
            className={`transition-transform duration-300 ease-in-out
        ${menuAtivo ? "[transform:rotate(112.5deg)_translate(-15%,-149.5%)]" : ""}
      `}
            d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
          ></path>

        </svg>
      </button>


      {/* Menu suspenso */}
      <nav
        id="menu"
        className={`
          ${menuAtivo ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          absolute top-[70px] sm:top-[80px] right-4 
          bg-[#222]/70 backdrop-blur-md border border-[#d4af37]/30 
          rounded-xl p-4 z-50 text-center flex flex-col w-44 
          shadow-[0_4px_15px_rgba(0,0,0,0.35)]
          transform transition-all duration-200
        `}
      >
        <Link
          to="/"
          onClick={fecharMenu}
          className="block text-[#f9f9f9] hover:text-[#d4af37] py-2 transition"
        >
          Início
        </Link>

        <Link
          to="/sobre"
          onClick={fecharMenu}
          className="block text-[#f9f9f9] hover:text-[#d4af37] py-2 transition"
        >
          Sobre
        </Link>

        <a
          href="https://wa.me/555193736889"
          target="_blank"
          rel="noopener noreferrer"
          onClick={fecharMenu}
          className="block text-[#f9f9f9] hover:text-[#d4af37] py-2 transition"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}

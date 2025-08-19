// Sobre.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import perfil from './../assets/img/perfil-sobre.png';
import { Link } from "react-router-dom";

const textoDigitado = "Advogada\nOAB: 138.087/RS";
const MotionLink = motion(Link);

const Sobre = () => {
  const [texto, setTexto] = useState('');
  const [index, setIndex] = useState(0);

  const imagemControls = useAnimation();
  const textoControls = useAnimation();

  const imagemRef = useRef(null);
  const textoRef = useRef(null);

  const imagemInView = useInView(imagemRef, { threshold: 0.3 });
  const textoInView = useInView(textoRef, { threshold: 0.3 });

  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  // Detectar direção do scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Digitação do texto
  useEffect(() => {
    if (index < textoDigitado.length) {
      const timeout = setTimeout(() => {
        setTexto((prev) => prev + textoDigitado[index]);
        setIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Anima entrada/saída da imagem com base na direção
  useEffect(() => {
    if (imagemInView) {
      imagemControls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      imagemControls.start({
        opacity: 0,
        y: scrollDirection === 'down' ? -100 : 100,
        scale: 0.8,
      });
    }
  }, [imagemInView, scrollDirection, imagemControls]);

  // Anima entrada/saída do texto com base na direção
  useEffect(() => {
    if (textoInView) {
      textoControls.start({ opacity: 1, y: 0 });
    } else {
      textoControls.start({
        opacity: 0,
        y: scrollDirection === 'down' ? -100 : 100,
      });
    }
  }, [textoInView, scrollDirection, textoControls]);

  return (
    <section className="sobre bg-[#57201c] py-16 px-4 text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-white mb-10">Conheça quem pode te ajudar</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        {/* Imagem animada */}
        <motion.div
          ref={imagemRef}
          className="sobre-imagem"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={imagemControls}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img
            src={perfil}
            alt="Claudia Steinntz"
            className="w-72 h-72 rounded-full border-4 border-yellow-500 object-cover object-[10%_top] shadow-lg"
          />
        </motion.div>

        {/* Texto animado */}
        <motion.div
          ref={textoRef}
          className="sobre-texto max-w-md text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={textoControls}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-2xl font-bold text-yellow-500 mb-2">Claudia Steinntz</h3>
          <h4 className="text-lg text-yellow-500 mb-4 leading-relaxed whitespace-pre-line">
            {texto}
            <span className="animate-pulse">|</span>
          </h4>
          <MotionLink
            to="/sobre"
            className="inline-block bg-yellow-500 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-[#c49b2e] transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Saiba mais
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;

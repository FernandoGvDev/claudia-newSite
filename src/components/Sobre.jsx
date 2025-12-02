// Sobre.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import perfil from "./../assets/img/perfil-sobre.png";

const FULL_NAME = "Claudia Steinntz";
const OAB = "OAB: 138.087/RS";
const ROLE_LINE = "Advogada · Defesa trabalhista • Famílias • Cível • Criminal";
const SHORT_PITCH =
  "Atuação humana, técnica e estratégica para resultados consistentes. Atendimento personalizado e foco em soluções práticas.";
const YEARS_EXPERIENCE = 12;

function useTypewriter(targetText, { start = false, baseDelay = 70, variance = 40 }) {
  const [output, setOutput] = useState("");
  const indexRef = useRef(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    if (!start) return;
    if (indexRef.current >= targetText.length) return;

    let timeout;
    const step = () => {
      if (!mounted.current) return;
      const nextChar = targetText[indexRef.current];
      setOutput((s) => s + nextChar);
      indexRef.current += 1;

      if (indexRef.current < targetText.length) {
        const delay = baseDelay + Math.floor((Math.random() - 0.5) * variance);
        timeout = setTimeout(step, Math.max(20, delay));
      }
    };

    timeout = setTimeout(step, 120);
    return () => clearTimeout(timeout);
  }, [start, targetText, baseDelay, variance]);

  return output;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 0.9, 0.36, 1] }
  }
};

export default function Sobre() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.28, rootMargin: "-10px" });

  const imgControls = useAnimation();
  const textControls = useAnimation();
  const btnControls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      imgControls.start("visible");
      textControls.start("visible");
      btnControls.start("visible");
    }
  }, [sectionInView, imgControls, textControls, btnControls]);

  const typedName = useTypewriter(`${FULL_NAME}\n${OAB}`, {
    start: sectionInView,
    baseDelay: 70,
    variance: 30
  });

  const waMessage = useMemo(
    () => encodeURIComponent(`Olá! Gostaria de saber mais sobre atendimento com ${FULL_NAME}.`),
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 sm:px-8 lg:px-12 bg-[#f8f5f2] overflow-hidden"
      aria-labelledby="sobre-title"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(87,32,28,0.03) 0%, rgba(245,240,236,0.6) 35%, rgba(255,255,255,0.85) 100%)"
        }}
      />

      <svg className="absolute inset-0 w-full h-full -z-20 pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="p" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="transparent" />
            <path d="M0 24 L24 0" stroke="rgba(0,0,0,0.015)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p)" />
      </svg>

      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-[#5c5048] font-serif mb-2">Quem sou</p>
        <h2
          id="sobre-title"
          className="text-4xl sm:text-5xl font-serif text-[#57201c] font-bold leading-tight"
        >
          Conheça quem pode te ajudar
        </h2>
      </div>

      <motion.div
        className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
      >
        <motion.div
          className="w-full md:w-2/3 relative z-10"
          variants={itemFadeUp}
          initial="hidden"
          animate={textControls}
        >
          <div className="mb-4 text-left">
            <h3 className="text-3xl sm:text-4xl font-serif text-[#3f261f] leading-tight" aria-hidden="true">
              <span className="whitespace-pre-line">{typedName || ""}</span>
            </h3>
            <span className="sr-only">{`${FULL_NAME} - ${OAB}`}</span>
          </div>

          <motion.p className="text-lg sm:text-xl text-[#4a403a] mb-4" variants={itemFadeUp}>
            <strong className="font-semibold">{ROLE_LINE.split("·")[0].trim()}</strong>
            <span className="mx-2 text-[#c5a76b]">•</span>
            <span className="opacity-90">{ROLE_LINE.split("·").slice(1).join("·").trim()}</span>
          </motion.p>

          <motion.p className="text-base text-[#3f3a37] leading-relaxed mb-4" variants={itemFadeUp}>
            {SHORT_PITCH}
          </motion.p>

          <motion.ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left" variants={itemFadeUp}>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#c5a76b]" aria-hidden="true" />
              <span>
                Atendimento <strong>personalizado</strong> e estratégia orientada para resultados
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#57201c]" aria-hidden="true" />
              <span>
                Especialista em <strong>Direito do Trabalho</strong> e Previdenciário
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#c5a76b]" aria-hidden="true" />
              <span>
                Atuação também em <strong>Famílias, Cível e Criminal</strong>
              </span>
            </li>
          </motion.ul>

          <motion.div className="mt-8" variants={itemFadeUp}>
            <div className="inline-block" aria-hidden="true">
              <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="
                      1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10"
                      result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>

              <motion.a
                href={`https://wa.me/555193736889?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                aria-label={`Falar com ${FULL_NAME} por WhatsApp`}
                initial={{ opacity: 0, y: 8 }}
                animate={btnControls}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() =>
                  btnControls.start({ boxShadow: "0 10px 30px rgba(87,32,28,0.12)" })
                }
                onHoverEnd={() =>
                  btnControls.start({ boxShadow: "0 6px 18px rgba(87,32,28,0.08)" })
                }
                className="relative inline-flex items-center justify-center overflow-visible"
              >
                <div
                  style={{ filter: "url(#goo)" }}
                  className="absolute -inset-0 z-0 pointer-events-none flex items-center justify-center"
                >
                  <span className="blob w-8 h-8 rounded-full bg-[#c5a76b] opacity-90 transform translate-x-[-22px] translate-y-[-8px]"></span>
                  <span className="blob w-6 h-6 rounded-full bg-[#e6cf98] opacity-85 transform translate-x-[10px] translate-y-[-4px]"></span>
                </div>

                <span
                  className="relative z-10 inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#57201c] bg-white text-[#57201c] font-semibold shadow-sm"
                  style={{
                    boxShadow: "0 6px 18px rgba(87,32,28,0.08)",
                    backdropFilter: "blur(4px)"
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="#f3e8c9" stroke="#c5a76b" strokeWidth="1.3" />
                    <path
                      d="M12 7 L13.6 10.6 L17 11.2 L14 13.5 L14.6 17 L12 15.3 L9.4 17 L10 13.5 L7 11.2 L10.4 10.6 Z"
                      fill="#57201c"
                    />
                  </svg>
                  <span>Falar no WhatsApp</span>
                </span>
              </motion.a>
            </div>

            <motion.div className="inline-block ml-4 align-middle" variants={itemFadeUp}>
              <Link
                to="/sobre"
                className="inline-block text-sm px-4 py-2 rounded-md font-medium text-[#6b574f] hover:underline"
                whileHover={{ scale: 1.02 }}
              >
                Saiba mais
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/3 flex items-center justify-center md:justify-end relative"
          initial="hidden"
          animate={imgControls}
          variants={{
            hidden: { opacity: 0, scale: 0.92, y: 18, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.9, ease: [0.22, 0.9, 0.36, 1] }
            }
          }}
        >
          <div className="relative" style={{ width: 300, maxWidth: "40vw", minWidth: 200 }}>
            <div
              className="rounded-[48%] overflow-hidden mx-auto"
              style={{
                boxShadow: "0 20px 40px rgba(87,32,28,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
                border: "4px solid rgba(197,167,107,0.92)",
                padding: 0,
                background: "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(197,167,107,0.03))"
              }}
            >
              <img
                src={perfil}
                alt={`${FULL_NAME} - advogada (foto institucional)`}
                className="block object-cover w-full h-full aspect-[3/4] rounded-[48%]"
                style={{
                  aspectRatio: "3/4",
                  objectPosition: "10% 10%"
                }}
                width={420}
                height={560}
              />
            </div>

            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-6%",
                top: "-6%",
                width: "110%",
                height: "110%",
                borderRadius: "48%",
                boxShadow: "0 30px 60px rgba(197,167,107,0.06)",
                pointerEvents: "none"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <meta itemProp="name" content={FULL_NAME} />
    </section>
  );
}

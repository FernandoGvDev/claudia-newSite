// ServicosCard.jsx
import { motion } from "framer-motion";
import { FaGavel, FaUsers, FaBalanceScale, FaShieldAlt } from "react-icons/fa";

const servicos = [
  {
    icon: <FaGavel aria-hidden="true" className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito do trabalho e previdência social",
    itens: [
      "Rescisão indireta, horas extras, assédio moral, acidentes e doenças do trabalho.",
      "Aposentadoria, auxílio incapacidades, LOAS, salário maternidade.",
    ],
    destaque: ["reconhecimento de vínculo", "pensão por morte"]
  },
  {
    icon: <FaUsers aria-hidden="true" className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito das Famílias e Sucessões",
    itens: [
      "Divórcio consensual e litigioso, união estável, guarda e alimentos.",
      "Inventário, visitação e adoção."
    ],
    destaque: ["partilha de bens", "alienação parental"]
  },
  {
    icon: <FaBalanceScale aria-hidden="true" className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito Cível",
    itens: [
      "Usucapião, curatela, compra e venda.",
      "Indenizações e ações possessórias."
    ],
    destaque: ["dano moral por negativação indevida", "execuções"]
  },
  {
    icon: <FaShieldAlt aria-hidden="true" className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito Criminal",
    itens: [
      "Crimes contra a vida, honra e patrimônio.",
      "Acompanhamento jurídico completo."
    ],
    destaque: ["Maria da Penha", "liberdade"]
  }
];

const fadeScale = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const ServicosCard = () => {
  return (
    <section
      className="py-20 bg-[#f8f5f2] text-center"
      aria-labelledby="servicos-titulo"
    >
      <p className="text-sm uppercase tracking-wider text-black font-serif mb-2">
        SERVIÇOS
      </p>

      <h2
        id="servicos-titulo"
        className="text-4xl text-[#57201c] font-serif font-bold mb-14"
      >
        Qual tipo de ajuda você precisa?
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {servicos.map((item, idx) => {
          const mensagem = encodeURIComponent(
            `Olá! Gostaria de saber mais sobre ${item.titulo}.`
          );

          return (
            <motion.div
              key={idx}
              variants={fadeScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="
                w-full sm:w-[300px]
                p-7 rounded-xl shadow-lg bg-white
                border border-[#e0d5c8]
                hover:shadow-2xl transition-all duration-300 hover:-translate-y-1
                relative overflow-hidden
              "
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>

              <div className="relative z-10">
                {item.icon}

                <h3
                  itemProp="name"
                  tabIndex="0"
                  className="text-2xl font-serif font-bold text-[#57201c] mb-5 text-center"
                >
                  {item.titulo}
                </h3>

                <ul className="text-[16px] text-black leading-relaxed space-y-3 text-left pl-4">
                  {item.itens.map((t, i) => (
                    <li key={i} className="list-disc marker:text-[#57201c]">
                      {t}
                    </li>
                  ))}

                  {item.destaque.map((d, i) => (
                    <li
                      key={i}
                      className="list-disc marker:text-[#c5a76b] font-semibold"
                    >
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Botão estilo selo jurídico */}
                <a
                  href={`https://wa.me/555193736889?text=${mensagem}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 inline-block w-full
                    text-center py-3 rounded-full
                    font-serif text-[17px] font-bold
                    border-2 border-[#57201c]
                    text-[#57201c]
                    transition-all duration-300
                    hover:bg-[#57201c] hover:text-white
                    hover:-translate-y-[2px]
                    active:scale-95
                    shadow-sm hover:shadow-md
                  "
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicosCard;

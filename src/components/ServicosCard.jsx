// ServicosCard.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FaGavel, FaUsers, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';

const servicos = [
  {
    icon: <FaGavel className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito do trabalho e previdência social",
    texto: "Rescisão indireta, horas extras, assédio moral, acidentes e doenças do trabalho, reconhecimento de vínculo empregatício, acordos, desvio e acumulo de função, equiparação salarial... Aposentadoria, auxilio incapacidades, loas, salário maternidade, auxilio reclusão, pensão por morte..."
  },
  {
    icon: <FaUsers className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito das Famílias e Sucessões",
    texto: "Divórcio (consensual ou litigioso), reconhecimento e dissolução de união estável (consensual ou litigioso), partilha de bens, guarda, alimentos, visita, adoção, alienação parental, reconhecimento socioafetivo, inventário..."
  },
  {
    icon: <FaBalanceScale className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito cível",
    texto: "Usucapião, curatela, compra e venda, ações possessórias, contrato de cessão de posse, indenizatórias, dano moral por negativação indevida (SPC/SERASA), cobranças, execuções, interdições."
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#57201c] mx-auto mb-4" />,
    titulo: "Direito criminal",
    texto: "Maria da penha, crimes contra a vida, crimes contra a honra, crimes contra o patrimônio, crimes contra a liberdade individual..."
  }
];

const cardVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 }
  },
  exit: { 
    opacity: 0, 
    x: 100, 
    scale: 0.8,
    transition: { duration: 0.5 }
  }
};


const ServicosCard = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <p className="text-sm uppercase tracking-wider text-black font-serif mb-2">SERVIÇOS</p>
      <h2 className="text-3xl text-[#57201c] font-bold mb-10">Qual tipo de ajuda você precisa?</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {servicos.map((item, idx) => (
            <motion.div
              key={idx}
              className="border-4 border-[#57201c] w-72 p-6 rounded-lg shadow-xl font-serif bg-white"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
            >
              {item.icon}
              <h3 className="text-2xl font-bold text-black mb-2">{item.titulo}</h3>
              <p className="text-[17px] text-black leading-relaxed">{item.texto}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};


export default ServicosCard;

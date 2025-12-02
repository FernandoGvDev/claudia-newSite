import { useState, useRef, useEffect } from "react";

interface Pergunta {
  pergunta: string;
  resposta: string;
}

const SEO = ({ title, description }: { title: string; description?: string }) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};

const FAQ = () => {
  const perguntas: Pergunta[] = [
    {
      pergunta: "O que é atendimento jurídico?",
      resposta:
        "É o contato inicial entre cliente e advogado. Pode envolver ouvir o relato do problema, coletar dados, explicar o funcionamento do escritório ou até mesmo apresentar os serviços, mas não exige análise técnica profunda.",
    },
    {
      pergunta: "O que é consulta jurídica?",
      resposta:
        "É o ato em que o advogado analisa o seu caso concreto, fornece orientações jurídicas de forma técnica ao seu caso específico para construir a linha de defesa dos seus direitos. Exige análise técnica profunda levando em consideração caso a caso.",
    },
    {
      pergunta: "Estou sendo processado e não sei o que fazer.",
      resposta:
        "Ser processado pode ser assustador, mas é importante manter a calma e buscar orientação jurídica o quanto antes. O escritório Steinntz Advogados está pronto para atendê-lo(a), vamos analisar a situação, preparar sua defesa e proteger seus direitos.",
    },
    {
      pergunta: "Meu ex não paga pensão corretamente, tenho que entrar com ação na justiça?",
      resposta:
        "Sim. A pensão alimentícia é uma obrigação moral e um direito garantido por lei. Quando o genitor(a) não paga pensão, é possível que o responsável pela criança procure a justiça através do advogado para assegurar os direitos do menor. O escritório Steinntz Advogados está pronto para atendê-lo(a), ajuizando ação de alimentos e garantindo os direitos do seu filho.",
    },
    {
      pergunta: "Juiz mandou meu ex pagar pensão, mas ele não paga corretamente.",
      resposta:
        "Após decisão judicial, o não pagamento de pensão pode gerar consequências legais, como cobrança judicial, bloqueio de bens, de valores em banco, CNH e até prisão. Os valores em atraso terão que ser pagos com o valor corrigido, com juros e multa por mora. O escritório Steinntz vai te auxiliar na busca do cumprimento dessa obrigação.",
    },
    {
      pergunta: "Quero me divorciar, mas não sei por onde começar.",
      resposta:
        "O divórcio pode ser consensual ou litigioso, judicial ou extrajudicial (no cartório), a depender de cada caso. Se tiverem filhos menores, é necessário pensar sobre guarda, pensão e visitas, além de divisão de bens e dívidas. O escritório Steinntz está aqui para orientar e amenizar o abalo emocional desse processo, garantindo que seus direitos sejam respeitados.",
    },
    {
      pergunta: "Qual a importância de fazer um inventário?",
      resposta:
        "O inventário é necessário para formalizar a transferência da propriedade dos bens de uma pessoa falecida aos seus herdeiros de forma legal e segura. Sem o inventário, o herdeiro não é dono da herança e não pode vender bens. Pode ser feito extrajudicialmente (cartório) ou judicialmente. O escritório Steinntz está aqui para oferecer tranquilidade nesse momento.",
    },
    {
      pergunta: "Quando é necessário fazer a curatela de alguém?",
      resposta:
        "A curatela é necessária quando a pessoa não tem capacidade de gerir sua própria vida civil devido a limitações mentais, intelectuais ou físicas duradouras. A curatela exige um processo judicial, com laudo médico e decisão do juiz. O escritório Steinntz está aqui para ajudá-lo com essa demanda.",
    },
    {
      pergunta: "Fui demitido, quando vou receber minhas verbas rescisórias?",
      resposta:
        "O prazo para pagamento das verbas rescisórias depende do tipo de demissão, mas em regra, deve ser pago em até 10 dias corridos após o término do contrato de trabalho. Se você acha que algum dos seus direitos foi violado, o escritório Steinntz Advogados está pronto para ajudar.",
    },
  ];

  const [aberta, setAberta] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setAberta(aberta === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;
      if (aberta === index) {
        ref.style.maxHeight = ref.scrollHeight + "px";
      } else {
        ref.style.maxHeight = "0px";
      }
    });
  }, [aberta]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Perguntas Frequentes | Steinntz Advogados"
        description="Tire suas dúvidas sobre atendimento jurídico, pensão, divórcio, inventário e muito mais com o escritório Steinntz Advogados — atendimento em todo o Rio Grande do Sul."
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-3xl mx-auto py-16 px-4 bg-[#f8f5f2] rounded-2xl shadow-sm border border-[#e8dbc5]">
        <h2 className="text-3xl font-bold text-[#57201c] mb-10 text-center tracking-wide">
          Perguntas Frequentes
        </h2>

        {perguntas.map((item, index) => (
          <div
            key={index}
            className="mb-4 rounded-xl border border-[#e2d4bc] bg-white shadow-sm overflow-hidden transition-all duration-500"
          >
            {/* BOTÃO DO ITEM */}
            <button
              onClick={() => toggle(index)}
              className="w-full p-5 font-medium bg-white hover:bg-[#f4ede4] transition-colors flex items-center justify-between text-left text-[#4a3f3b] text-lg"
            >
              {item.pergunta}

              <span
                className={`text-[#c8a951] text-xl transform transition-transform duration-300 ${
                  aberta === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* ÁREA DE RESPOSTA */}
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="px-5 overflow-hidden transition-all duration-500"
              style={{ maxHeight: "0px" }}
            >
              <div className="py-4 flex gap-4">
                {/* Faixa dourada */}
                <div className="w-1 bg-[#c8a951] rounded"></div>

                <p className="text-[#4a3f3b] leading-relaxed">
                  {item.resposta}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FAQ;

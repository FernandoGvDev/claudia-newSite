import { useState, useRef, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface Pergunta {
  pergunta: string;
  resposta: string;
}

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

  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Perguntas Frequentes | Steinntz Advogados</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre atendimento jurídico, pensão, divórcio, inventário e muito mais com o escritório Steinntz Advogados — atendimento em todo o Rio Grande do Sul."
        />
        <meta
          name="keywords"
          content="advogado, direito civil, direito de família, pensão alimentícia, divórcio, inventário, Steinntz Advogados, consultoria jurídica RS"
        />
        <meta name="author" content="Steinntz Advogados" />
        <meta property="og:title" content="FAQ | Steinntz Advogados" />
        <meta
          property="og:description"
          content="Conheça as principais dúvidas jurídicas e veja como o escritório Steinntz pode ajudar você em causas de família, trabalho, cível e previdenciário."
        />
        <meta property="og:url" content="https://steinntz.adv.br/faq" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://steinntz.adv.br/faq" />
        <meta property="og:image" content="https://steinntz.adv.br/public/logo-trasparente.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Steinntz Advogados" />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-[#57201c] mb-8 text-center">
          Perguntas Frequentes
        </h2>

        {perguntas.map((item, index) => (
          <div
            key={index}
            className="mb-4 border border-gray-300 rounded overflow-hidden transition-all duration-500"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full p-4 font-medium bg-white hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
            >
              {item.pergunta}
              <span
                className={`transform transition-transform duration-300 ${
                  aberta === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              ref={(el) => {
                contentRefs.current[index] = el}}
              className="px-4 overflow-hidden transition-all duration-500 text-gray-700"
              style={{
                maxHeight: aberta === index ? "auto" : "0px",
              }}
            >
              <div className="py-2">{item.resposta}</div>
            </div>
          </div>
        ))}
      </section>
    </HelmetProvider>
  );
};

export default FAQ;

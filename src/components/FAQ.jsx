import { useState, useRef, useEffect } from "react";

const FAQ = () => {
  const perguntas = [
    {
      pergunta: "O que é atendimento jurídico?",
        resposta:
          "É o contato inicial entre cliente e advogado. Pode envolver ouvir o relato do problema, coletar dados, explicar o funcionamento do escritório ou até mesmo apresentar os serviços, mas não exige análise técnica profunda."
      },
      {
        pergunta: "O que é consulta jurídica?",
        resposta:
          "É o ato em que o advogado analisa o seu caso concreto, fornece orientações jurídicas de forma técnica ao seu caso específico para construir a linha de defesa dos seus direitos. Exige análise técnica profunda levando em consideração caso a caso."
      },
      {
        pergunta: "Estou sendo processado e não sei o que fazer.",
        resposta:
          "Ser processado pode ser assustador, mas é importante manter a calma e buscar orientação jurídica o quanto antes. O escritório Steinntz Advogados está pronto para atendê-lo(a), vamos analisar a situação, preparar sua defesa e proteger seus direitos."
      },
      {
        pergunta: "Meu ex. Não paga pensão corretamente, tenho que entrar com ação na justiça?",
        resposta:
          "Sim. A pensão alimentícia é uma obrigação moral e um direito garantido por lei. Quando o genitor(a) não paga pensão, é possível que o responsável pela criança procure a justiça através do advogado para assegurar os direitos do menor. O escritório Steinntz Advogados está pronto para atendê-lo(a), ajuizando ação de alimentos e garantindo os direitos do seu filho."
      },
      {
        pergunta: "Juiz mandou meu ex. pagar pensão, mas ele não paga corretamente.",
        resposta:
          "Após decisão judicial, o não pagamento de pensão pode gerar consequências legais, como cobrança judicial, bloqueio de bens, de valores em banco, CNH e até prisão. Os valores em atraso terão que ser pagos com o valor corrigido, com juros e multa por mora. O escritório Steinntz vai te auxiliar na busca do cumprimento dessa obrigação."
      },
      {
        pergunta: "Quero me divorciar, mas não sei por onde começar.",
        resposta:
          "O divórcio pode ser consensual ou litigioso, judicial ou extrajudicial (no cartório), a depender de cada caso. Se tiverem filhos menores de dezoito anos de idade, é necessário ir pensando sobre guarda, pensão e visitas, além de divisão de bens e dívidas. O escritório Steinntz está aqui para orientar de forma técnica e amenizar o abalo emocional que traz um divórcio, garantindo que esse processo seja feito de forma segura e com seus direitos respeitados."
      },
      {
        pergunta: "Qual a importância de fazer um inventário?",
        resposta:
          "O inventário é necessário para formalizar a transferência da propriedade dos bens de uma pessoa falecida aos seus herdeiros de forma legal e segura. Sem o inventário, o herdeiro não é dono da herança e sim um mero possuidor que não pode nem fazer a venda dos bens caso tenha interesse. Pode ser feito extrajudicialmente (no cartório) ou judicialmente. O escritório Steinntz está aqui para que, nesse momento de dor, você tenha tranquilidade — deixe que as questões jurídicas nós tratamos."
      },
      {
        pergunta: "Quando é necessário fazer a curatela de alguém?",
        resposta:
          "A curatela é necessária quando a pessoa não tem capacidade de gerir sua própria vida civil devido a limitações mentais, intelectuais ou físicas duradouras. A curatela não é automática e exige um processo judicial, com laudo médico e análise do juiz, que define o alcance da curatela (parcial ou total). Se você tem um familiar que precisa de curador, veio ao local certo — o escritório Steinntz está aqui para ajudá-lo com essa demanda."
      },
      {
        pergunta: "Fui demitido, quando vou receber minhas verbas rescisórias?",
        resposta:
          "O prazo para pagamento das verbas rescisórias irá depender do tipo de demissão, mas, em regra, a verba rescisória deve ser paga em até 10 dias corridos após o término do contrato de trabalho. Se você foi demitido e acha que algum dos seus direitos foram violados, o escritório Steinntz está aqui para ajudá-lo com essa demanda."
      },
  ];

  const [aberta, setAberta] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setAberta(aberta === index ? null : index);
  };

  useEffect(() => {
    // Ajustar altura automaticamente para animação suave
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
    <div className="max-w-3xl mx-auto">
      {perguntas.map((item, index) => (
        <div
          key={index}
          className="mb-4 border rounded overflow-hidden transition-all duration-500"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full p-4 font-medium bg-white hover:bg-gray-100 transition-colors flex items-center justify-between"
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
            ref={(el) => (contentRefs.current[index] = el)}
            className="px-4 overflow-hidden transition-all duration-500 text-gray-700"
            style={{
              maxHeight: aberta === index ? "0px" : "0px", // controlado no useEffect
            }}
          >
            <div className="py-2">{item.resposta}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

import React from 'react';
import perfil from './../assets/img/perfil01.png'; // ajuste o caminho se necessário

const PagSobre = () => {
    return (
        <>
            <section
                id="sobre"
                className="flex flex-col lg:flex-row gap-10 items-start bg-white text-black px-5 py-10 mt-12"
            >
                <div className="flex-shrink-0 w-full lg:w-[380px]">
                    <img
                        src={perfil}
                        alt="Claudia Steinntz"
                        className="w-full h-auto block rounded-[5%] border-[3px] border-[#c8a951] object-cover"
                    />
                </div>

                <div className="flex-2 font-[Segoe UI]">
  <h2 className="text-[28px] font-bold mb-5">
    Conheça a advogada que vai te ajudar
  </h2>

  <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
    <strong className="font-bold">Claudia Steinntz</strong>, advogada inscrita
    na OAB/RS sob o nº 138.087 e fundadora do escritório Steinntz Advogados.
  </p>

  <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
    Após mudança radical na carreira aos 30 anos de idade, enfrentou desafios e
    os superou, conquistou importantes realizações, tal como acontece com muitos
    que decidem recomeçar. Hoje, a atuação ocorre de forma autônoma, contando
    também com uma rede de advogados parceiros que integram e fortalecem o
    trabalho realizado no nosso escritório.
  </p>

  <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
    Além da advocacia, é esposa e mãe, com mais de 20 anos de uma vida familiar
    construída com amor e dedicação, valores que também são carregados na atuação
    profissional: compromisso, empatia e responsabilidade com cada cliente.
  </p>

  <p className="text-[16px] mt-5 font-semibold text-[#214d65] leading-relaxed">
    <strong className="font-bold">Onde se formou:</strong> Universidade Ritter
    dos Reis (UNIRITTER)
  </p>
</div>

</section>

<div className="text-center mt-14 px-5 py-10 bg-[#f8f8f8] border-t-2 border-[#c8a951] rounded-lg shadow-md">
  <p className="text-[18px] text-[#333] mb-5 max-w-[600px] mx-auto leading-relaxed">
    Se você busca um atendimento jurídico humano, ético e competente, entre em
    contato conosco.
  </p>
  <a
    href="https://wa.me/555193736889"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-7 py-3 bg-gradient-to-r from-[#c8a951] to-[#bfa237] text-white text-[16px] font-semibold rounded-full shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:from-[#b89738] hover:to-[#a5872c]"
  >
    Fale com a Dra. Claudia
  </a>
</div>

        </>
    );
};

export default PagSobre;

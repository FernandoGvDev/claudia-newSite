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
                        Conheça a Advogada que pode te ajudar
                    </h2>

                    <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
                        <strong className="font-bold">Sou Claudia Steinntz</strong>, advogada inscrita na OAB/RS sob o nº 138.087 e fundadora do
                        escritório Steinntz Advogados.
                    </p>

                    <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
                        Após uma mudança radical de carreira aos 30 anos, enfrentei desafios, superei obstáculos e conquistei
                        importantes realizações – como acontece com muitos que decidem recomeçar. Hoje, atuo de forma autônoma,
                        contando também com uma rede de advogados parceiros que integram e fortalecem o trabalho realizado no
                        nosso escritório.
                    </p>

                    <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
                        Além da advocacia, sou esposa e mãe, com mais de 20 anos de uma vida familiar construída com amor e
                        dedicação – valores que também carrego em minha atuação profissional: compromisso, empatia e
                        responsabilidade com cada cliente.
                    </p>

                    <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
                        Seja bem-vindo(a) ao Steinntz Advogados. Estamos aqui para te ajudar.
                    </p>

                    <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
                        Ao longo de sua carreira, a Dra. Claudia tem se destacado pela atuação personalizada e pela escuta atenta
                        às necessidades de cada pessoa, acreditando que por trás de todo processo existe uma história que merece
                        respeito e atenção.
                    </p>

                    <p className="text-[16px] mb-4 leading-relaxed text-[#222]">
                        Seu escritório é um espaço de acolhimento e seriedade, pronto para orientar e representar com firmeza
                        aqueles que buscam justiça e segurança jurídica.
                    </p>

                    <p className="text-[16px] mt-5 font-semibold text-[#214d65] leading-relaxed">
                        <strong className="font-bold">Onde se formou:</strong> Graduação na Universitário Ritter dos Reis (UniRitter)<br />
                        <strong className="font-bold">Tempo de atuação –</strong> Experiência na advocacia desde o ano de 2021.
                    </p>
                </div>
            </section>

            <div className="text-center mt-14 px-5 py-10 bg-[#f8f8f8] border-t-2 border-[#c8a951] rounded-lg shadow-md">
                <p className="text-[18px] text-[#333] mb-5 max-w-[600px] mx-auto leading-relaxed">
                    Se você busca um atendimento jurídico humano, ético e competente, entre em contato conosco.
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

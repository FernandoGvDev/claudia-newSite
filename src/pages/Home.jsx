import Hero from "./compoenentsHome/Hero"
import ServicosCard from '../components/ServicosCard';
import Sobre from '../components/Sobre';
import FAQ from '../components/FAQ';
import Formulario from '../components/Formulario';
import InstagramEmbed from "../components/InstagramEmbed"

function Home() {
  return (
    <div className="bg-[#57201c]">                                            
      <Hero />
      {/* Serviços */}
      <div className="mb-10">
        <ServicosCard />
      </div>

      {/* Sobre */}
      <div className="mb-20 sm:mb-36">
        <Sobre />
      </div>

      <InstagramEmbed />

      {/* FAQ */}
      <div className="my-20 sm:mb-32 px-4 sm:px-0">
        <FAQ />
      </div>

      {/* Formulário de contato */}
      <div className="px-4 sm:px-0">
        <Formulario />
      </div>
    </div>
  );
}

export default Home;

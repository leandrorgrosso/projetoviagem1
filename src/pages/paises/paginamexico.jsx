import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Estrelas from "../../components/estrelas.jsx";

import "../../App.css";

function Mexico() {
  return (
    <>
      <Header />

      <NavBar />

      <p className="paragrafopais">
        O México é um país da América do Norte com uma cultura vibrante e uma
        história fascinante, marcada por civilizações antigas como os maias e os
        astecas. Sua capital, Cidade do México, é uma das maiores metrópoles do
        mundo e um centro cultural e econômico importante. O país é conhecido
        por sua culinária icônica, que inclui tacos, burritos, guacamole,
        enchiladas e o famoso mole. A comida mexicana é tão influente que foi
        reconhecida como Patrimônio Cultural Imaterial da Humanidade pela
        UNESCO. O México também se destaca por suas festas e tradições, como o
        Dia dos Mortos (Día de los Muertos), uma celebração única da memória dos
        entes queridos, e as mariachis, músicas tradicionais que fazem parte da
        identidade nacional. Além disso, o país tem paisagens incríveis, desde
        as praias paradisíacas de Cancún e Tulum até os desertos e as montanhas
        da Sierra Madre. O México também tem uma forte influência na arte, com
        nomes como Frida Kahlo e Diego Rivera, além de uma grande produção
        cinematográfica reconhecida mundialmente.
      </p>

      <Estrelas />
      
      <Footer
        imgi={Instagram}
        insta="@grupo6"
        imge={gmail}
        email="grupo6@gmail.com"
        texto="Responsável pelo desenvolvimento: Grupo 06"
      />
    </>
  );
}

export default Mexico;

import Header from "../../components/Header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Estrelas from "../../components/estrelas.jsx";

import "../../App.css";

function Brasil() {
  return (
    <>
      <Header />

      <NavBar />

      <p className="paragrafopais">
        O Brasil é o maior país da América do Sul, conhecido por sua diversidade
        cultural, belezas naturais e paixão pelo futebol. É o único país da
        América Latina que fala português, devido à colonização portuguesa, e
        tem uma rica mistura de influências indígenas, africanas e europeias.
        Amazônia, Pantanal, praias paradisíacas, Carnaval, música (como samba,
        bossa nova e funk), e uma culinária incrível (feijoada, pão de queijo,
        açaí) são alguns dos destaques do país. Além disso, o Brasil tem uma
        economia forte na agropecuária e na indústria, e sua cultura é marcada
        pela alegria e hospitalidade do povo.
      </p>

          <Estrelas/>
          
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

export default Brasil;

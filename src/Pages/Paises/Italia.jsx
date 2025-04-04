import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Estrelas from "../../components/estrelas.jsx";

import "../../App.css";

function Italia() {
  return (
    <>
      <Header />

      <NavBar />

      <p className="paragrafopais">
        A Itália é um país europeu com uma história riquíssima, sendo o berço do
        Império Romano e do Renascimento. Localizada no sul da Europa, em
        formato de bota, é famosa por sua arte, arquitetura, gastronomia e
        influência cultural global. Cidades como Roma, com o Coliseu e o
        Vaticano; Florença, berço do Renascimento com obras de Michelangelo e Da
        Vinci; e Veneza, com seus icônicos canais, fazem da Itália um dos
        destinos turísticos mais desejados do mundo. Além disso, a Itália é o
        país com o maior número de Patrimônios Mundiais da UNESCO. A culinária
        italiana é uma das mais apreciadas no mundo, com pratos como pizza,
        massas (lasanha, espaguete, ravioli), risoto e tiramisu. O país também é
        referência em moda, com marcas como Gucci, Prada e Versace, além de ter
        uma forte tradição no automobilismo, sendo lar de marcas como Ferrari e
        Lamborghini. Os italianos são conhecidos por seu jeito expressivo e
        apaixonado, com uma cultura fortemente ligada à família e ao prazer da
        boa comida.
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

export default Italia;

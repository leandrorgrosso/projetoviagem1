import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Estrelas from "../../components/estrelas.jsx";

import "../../App.css";
function Japao() {
  return (
    <>
      <Header />

      <NavBar />

      <p className="paragrafopais">
        O Japão é um país insular no leste da Ásia, conhecido por sua mistura
        única de tradição e modernidade. Composto por quatro ilhas principais
        (Honshu, Hokkaido, Kyushu e Shikoku) e milhares de ilhotas, o país se
        destaca por sua tecnologia avançada, cultura rica e forte senso de
        disciplina e respeito. A cultura japonesa combina tradições antigas,
        como cerimônias do chá, festivais (matsuri), templos xintoístas e
        samurais, com aspectos modernos, como animes, mangás, videogames e uma
        das maiores potências industriais do mundo. Sua culinária é famosa por
        pratos como sushi, ramen, tempurá e takoyaki. Além disso, o Japão tem
        paisagens naturais deslumbrantes, como o Monte Fuji, as cerejeiras em
        flor (sakura) e os jardins zen. A sociedade japonesa valoriza muito a
        educação, a inovação e a coletividade, tornando o país um dos mais
        desenvolvidos e organizados do mundo.
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

export default Japao;

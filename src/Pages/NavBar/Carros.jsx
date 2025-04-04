import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
// import Instagram from "/instagram.png";
// import Gmail from "/gmail.png";
import Cartao from "../../components/cartao.jsx";
// import Carro from "/carro.png";

import "../../App.css";

function Carros() {
  return (
    <div>
      <Header />

      <NavBar />
      <article className="blocoss">
        <Cartao
          img="/carro.png"
          viagem="Carro Econômico"
          saida="Em Lisboa"
          info="Com Budget"
          valor="R$ 148"
          feito="Alugado"
          fazer="Alugar"
        />

        <Cartao
          img="/carro.png"
          viagem="Carro Econômico"
          saida="Em Santiago"
          info="Com Hertz"
          valor="R$ 130"
          feito="Alugado"
          fazer="Alugar"
        />

        <Cartao
          img="/carro.png"
          viagem="Carro Econômico"
          saida="Em Belo Horizonte"
          info="Com Movida"
          valor="R$ 135"
          feito="Alugado"
          fazer="Alugar"
        />

        <Cartao
          img="/carro.png"
          viagem="Carro Econômico"
          saida="Em Miami"
          info="Com Florida Premium RentACar"
          valor="R$ 244"
          feito="Alugado"
          fazer="Alugar"
        />
      </article>
      <Footer
        imgi="/instagram.png"
        insta="@grupo6"
        imge="/gmail.png"
        email="grupo6@gmail.com"
        texto="Responsável pelo desenvolvimento: Grupo 06"
      />
    </div>
  );
}

export default Carros;

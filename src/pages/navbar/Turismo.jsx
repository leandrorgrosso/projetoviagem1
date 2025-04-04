import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Coliseu from "/Coliseu.png";
import MonteFuji from "/Monte_Fuji.png";
import CasaJojo from "/Casa_Joao_Vitor.png";
import Gramado from "/Gramado.png";
import Cartao from "../../components/cartao.jsx";
import "../../App.css";

function Turismo() {
  return (
    <div>
      <Header />

      <NavBar />
      <article className="blocoss">
        <Cartao
          img={Coliseu}
          viagem="Coliseu"
          saida="Em Roma, Itália"
          info="Valor individual"
          valor="R$ 220"
          feito="Agenciado"
          fazer="Agenciar"
        />

        <Cartao
          img={MonteFuji}
          viagem="Monte Fuji"
          saida="Em Ilha de Honshu, Japão"
          info="Valor individual"
          valor="R$ 350"
          feito="Agenciado"
          fazer="Agenciar"
        />

        <Cartao
          img={CasaJojo}
          viagem="Casa do João Vitor"
          saida="Em Juarez, México"
          info="Valor individual"
          valor="R$ 2.999,99"
          feito="Agenciado"
          fazer="Agenciar"
        />

        <Cartao
          img={Gramado}
          viagem="Gramado"
          saida="Em Rio Grande do Sul, Brasil"
          info="Valor para Casal"
          valor="R$ 150"
          feito="Agenciado"
          fazer="Agenciar"
        />
      </article>
      <Footer
        imgi={Instagram}
        insta="@grupo6"
        imge={Gmail}
        email="grupo6@gmail.com"
        texto="Responsável pelo desenvolvimento: Grupo 06"
      />
    </div>
  );
}

export default Turismo;

import Header from "../../components/Header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Cartao from "../../components/cartao.jsx";
import Hotel1 from "/hotel1.png";
import Hotel2 from "/hotel2.png";
import Hotel3 from "/hotel3.png";
import Hotel4 from "/hotel4.png";
import "../../App.css";

function Hospedagens() {
  return (
    <>
      <Header />

      <NavBar />
      <div className="hoteis">
        <Cartao
          img={Hotel1}
          viagem="Hotel em Roma"
          saida="Preço por pessoa"
          info="Diária por adulto"
          valor="R$2.433,00"
          feito="Reservado"
          fazer="Reservar"
        />
        <Cartao
          img={Hotel2}
          viagem="Hotel em Tóquio"
          saida="Preço por pessoa"
          info="Diária por adulto"
          valor="R$1.338,00"
          feito="Reservado"
          fazer="Reservar"
        />
        <Cartao
          img={Hotel3}
          viagem="Hotel no México"
          saida="Preço por pessoa"
          info="Diária por adulto"
          valor="R$424,00"
          feito="Reservado"
          fazer="Reservar"
        />
        <Cartao
          img={Hotel4}
          viagem="Hotel no RJ"
          saida="Preço por pessoa"
          info="Diária por adulto"
          valor="R$495,00"
          feito="Reservado"
          fazer="Reservar"
        />
      </div>
      <Footer
        imgi={Instagram}
        insta="@grupo6"
        imge={Gmail}
        email="grupo6@gmail.com"
        texto="Responsável pelo desenvolvimento: Grupo 06"
      />
    </>
  );
}

export default Hospedagens;

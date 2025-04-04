import Header from "../../components/Header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Guilherme from "/guilherme.png";
import Hayeska from "/hayeska.png";
import Leonardo from "/leonardo.png";
import Quezia from "/quezia.png";
import "../../App.css";

function SobreNos() {
  return (
    <div>
      <Header />

      <NavBar />
      <article className="blocoss">
        <div className="bloquinho">
          <img src={Guilherme} />
          <h2>Guilherme G. Santana</h2>
          <p>Desenvolvedor 💻</p>
        </div>

        <div className="bloquinho">
          <img src={Hayeska} />
          <h2>Hayeska L. A. Machado</h2>
          <p>Desenvolvedora 💻</p>
        </div>

        <div className="bloquinho">
          <img src={Leonardo} />
          <h2>Leonardo M. Vicente</h2>
          <p>Vice-Líder 🧠</p>
        </div>

        <div className="bloquinho">
          <img src={Quezia} />
          <h2>Quezia A. Vieira</h2>
          <p>Líder 👑</p>
        </div>
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

export default SobreNos;

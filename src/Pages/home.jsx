import { Link } from "react-router-dom";


import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import NavBar from "../components/navBar.jsx";
import Slider from "../components/slider.jsx";
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import Card from "../components/card.jsx";


import Japao from "../../public/paises/japao.png";
import Mexico from "../../public/paises/mexico.jpg";
import Roma from "../../public/paises/ItaliaRoma.png";
import Brasil from "../../public/paises/Brasil.png";


import "../App.css";

function App() {
  return (
    <>

    
      <Header />
<Slider/>      <NavBar />







      <div className="blocos">

      <Link  to='/mexico'>  <Card imge={Mexico} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para o México" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/>
 </Link>

        
        <Link to='/italia'> <Card imge={Roma} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para a Itália" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/>
 </Link>

 <Link to='/japao'> <Card imge={Japao} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para o Japão" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/>
 </Link>

<Link to='/brasil' > <Card imge={Brasil} avaliacao="⭐⭐⭐⭐⭐" viagem="Pacotes para o Brasil" saida="Saindo de São Paulo" info="Preço final por pessoa" valor="R$3.993,00"/>
 </Link>

      </div>
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

export default App;

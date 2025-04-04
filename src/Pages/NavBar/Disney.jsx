import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import NavBar from "../../components/navBar.jsx";
import Instagram from "/instagram.png";
import Gmail from "/gmail.png";
import Card from "../../components/card.jsx";
import "../../App.css"
import Animal from '/animalkingdom.png'
import Hollywood from '/disneyhollywood.png'
import Epcot from '/epcot.png'
import Magic from '/magickingdom.png'


function Disney() {
    return (
        <div>
            <Header />

            <NavBar />
            <div className="blocos">
            <Card imge={Animal} viagem="Animal Kingdom" saida="Bay Lake, FL" info="Preço por adulto" valor="R$ 3.137" />

            <Card imge={Hollywood} viagem="Disney Hollywood" saida="Bay Lake, FL" info="Preço por adulto" valor="R$ 2.895" />

            <Card imge={Epcot} viagem="Epcot" saida="Bay Lake, FL" info="Preço por adulto" valor="R$ 2.455" />

            <Card imge={Magic} viagem="Magic Kingdom Park" saida="Orlando, FL" info="Preço por adulto" valor="R$ 3.412" />
            </div>

            <Footer
                imgi={Instagram}
                insta="@grupo6"
                imge={Gmail}
                email="grupo6@gmail.com"
                texto="Responsável pelo desenvolvimento: Grupo 06"
            />

        </div>
    )
}

export default Disney;
import "./cartao.css";
import { useState } from "react";

function Cartao(props) {
  const [isLogado, setIsLogado] = useState(false);

  return (
    <>
      <nav className="blocoo">
        <img className="imagem" src={props.img} width="70%" />
        <h1>{props.viagem}</h1>
        <h3>{props.avaliacao}</h3>
        <p>{props.saida}</p>
        <p>{props.info}</p>
        <h2>{props.valor}</h2>
        <button
          onClick={() => setIsLogado(!isLogado)}
          className={isLogado ? "alugar" : "alugado"}
        >
          {isLogado ? props.feito : props.fazer}
        </button>
      </nav>
    </>
  );
}

export default Cartao;

import { useState } from "react";
import imagem1 from "../assets/coreia.png";
import imagem2 from "../assets/Espanha.png";
import imagem3 from "../assets/JapaoToquio.png";
import imagem4 from "../assets/letonia.png";
import imagem5 from "../assets/Mexico2.png";
import imagem6 from "../assets/Russia.png";
import "./slider.css";

function SliderHome() {
  const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];

  const [imagemAtual, setImagemAtual] = useState(0);

  const Proximo = () => {
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

  const Anterior = () => {
    setImagemAtual((imagemAtual - 1 + imagens.length) % imagens.length);
  };

  return (
    <article className="meio">
      <button id="prevBtn" className="sliderBtn" onClick={Anterior}>
        ⬅
      </button>
      <div id="slider">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            className="img"
            src={imagem}
            style={{ display: index === imagemAtual ? "block" : "none" }}
          />
        ))}
      </div>
      <button id="nextBtn" className="sliderBtn" onClick={Proximo}>
        ➡
      </button>
    </article>
  );
}

export default SliderHome;

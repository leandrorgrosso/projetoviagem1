// import './Footer.css'

// function Footer (props) {
//     return (
//         <>
//         <div className='Footer'>
//            <img src={props.imgi} />
//            <p>{props.insta}</p>
//            <img src={props.imge}/>
//            <p>{props.email}</p>
//            <p>{props.texto}</p>

//         </div>

//         </>
//     )
// }

// export default Footer

import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="Bloco1">
          <div className="Bloco1-1">
            <p>
              Plataforma criada em 2024 por todos os membros da Equipe 6, com o
              propósito de reunir cinco estudantes para colaborar no
              desenvolvimento de websites e aplicativos dinâmicos. Nosso
              objetivo sempre foi proporcionar experiência tanto social quanto
              profissional. Atualmente, contamos com quatro colaboradores, pois,
              infelizmente, um de nossos membros partiu para melhor.
            </p>
          </div>
          <div className="Bloco1-2">
            <p className="consertando">
              Direitos reservados por Grupo 6 SESI SENAI Vinhedo SP
            </p>
          </div>
          <div className="Bloco1-3">
            <p>
              Nossas parceiras aereas: <br></br>Voe Azul<br></br>
              Voe Gol <br></br>
              Voe Latam <br></br>
              American Airlines
            </p>
          </div>
          <div className="Bloco1-4">
            <p>
              Viagens disponíveis:<br></br>
              Italia <br></br>
              Mexico <br></br>
              Brasil <br></br>
              Japão
            </p>
          </div>
        </div>
        <div className="Bloco2img">
          {/* imagem removida */}
          {/* <img src="" alt="" /> */}
        </div>
        <div className="Bloco3">
          <div className="BlocoSobreNos">
            {/* <p> */}
              <div className="footer_social">
                <a href="https://www.instagram.com" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            {/* </p> */}
            <p>Grupo 6</p>
          </div>
          <div className="BlocoReclamacoes">
            <p>Numero para reclamações: 0800-7397 / 19-957359825</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

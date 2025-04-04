import { useState } from "react";

function Estrelas() {
  const [nota, setNota] = useState(0);

  return (
    <div>
      <h2>Avaliar destino</h2>

      <button
        onClick={() => setNota(1)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <i
          className={nota >= 1 ? "bx bxs-star" : "bx bxs-star"}
          style={{ color: nota >= 1 ? "#f8ff00" : "#808080", fontSize: "2em" }}
        ></i>
      </button>

      <button
        onClick={() => setNota(2)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <i
          className={nota >= 2 ? "bx bxs-star" : "bx bxs-star"}
          style={{ color: nota >= 2 ? "#f8ff00" : "#808080", fontSize: "2em" }}
        ></i>
      </button>
      <button
        onClick={() => setNota(3)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <i
          className={nota >= 3 ? "bx bxs-star" : "bx bxs-star"}
          style={{ color: nota >= 3 ? "#f8ff00" : "#808080", fontSize: "2em" }}
        ></i>
      </button>
      <button
        onClick={() => setNota(4)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <i
          className={nota >= 4 ? "bx bxs-star" : "bx bxs-star"}
          style={{ color: nota >= 4 ? "#f8ff00" : "#808080", fontSize: "2em" }}
        ></i>
      </button>
      <button
        onClick={() => setNota(5)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <i
          className={nota >= 5 ? "bx bxs-star" : "bx bxs-star"}
          style={{ color: nota >= 5 ? "#f8ff00" : "#808080", fontSize: "2em" }}
        ></i>
      </button>
      <p>
        Você deu <span style={{ color: "green" }}>{nota}</span> estrelas
      </p>
    </div>
  );
}

export default Estrelas;

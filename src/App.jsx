import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Hospedagens from "./pages/navBar/Hospedagens";
import Carros from "./pages/navBar/Carros";
import Disney from "./pages/navBar/Disney";
import Turismo from "./pages/navBar/Turismo";
import SobreNos from "./pages/navBar/SobreNos";
import Italia from "./pages/paises/Italia";
import Japao from "./pages/paises/Japao";
import Mexico from "./pages/paises/Mexico";
import Brasil from "./pages/paises/Brasil";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hospedagens" element={<Hospedagens />} />
          <Route path="/Carros" element={<Carros />} />
          <Route path="/Turismo" element={<Turismo />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/Disney" element={<Disney />} />

          <Route path="/italia" element={<Italia />} />
          <Route path="/japao" element={<Japao />} />
          <Route path="/mexico" element={<Mexico />} />
          <Route path="/brasil" element={<Brasil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

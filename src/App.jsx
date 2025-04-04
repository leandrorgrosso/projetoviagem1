import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hospedagens from "./pages/navbar/Hospedagens";
import Carros from "./pages/navbar/Carros";
import Disney from "./pages/navbar/Disney";
import Turismo from "./pages/navbar/Turismo";
import SobreNos from "./pages/navbar/SobreNos";
import Brasil from "./pages/paises/Brasil";
import Italia from "./pages/paises/italia";
import Japao from "./pages/paises/japao";
import Mexico from "./pages/paises/mexico";

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

import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="link" to="/Hospedagens">
            {" "}
            Hospedagens{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/Carros">
            {" "}
            Carros{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/Turismo">
            {" "}
            Turismo{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/Disney">
            {" "}
            Disney{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/SobreNos">
            {" "}
            Sobre nós{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

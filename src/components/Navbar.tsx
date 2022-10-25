import { Link } from "react-router-dom";
// import "./Navbar.css";
import { BtnGoBack, Nav } from "./Navbar.style";

type NavBarProps = {
  hasGoBack?: boolean;
};
function Navbar(props: NavBarProps) {
  return (
    <Nav className="nav">
      <Link to="/" className="brand">
        Pokédex
      </Link>
      {props.hasGoBack && <BtnGoBack to="/">Voltar</BtnGoBack>}
    </Nav>
  );
}
export default Navbar;

import { useSelector } from "react-redux";
import { StoreState } from "../redux";
import { Nav, CustomLink, TotalPokemons } from "./NavBar.style";

type NavBarProps = {
  hasGoBack?: boolean;
};

function NavBar(props: NavBarProps) {
  const totalPokemons = useSelector((state: StoreState) => state.favorite);

  return (
    <Nav className="nav">
      <CustomLink to="/" fontSize={24} lineheight={31} color="#17171b">
        Pokédex
      </CustomLink>
      <div>
        <TotalPokemons>
          Total de favoritos: {totalPokemons.length}
        </TotalPokemons>
        {props.hasGoBack && (
          <CustomLink to="/" fontSize={16} lineheight={21} color="#747476">
            Voltar
          </CustomLink>
        )}
      </div>
    </Nav>
  );
}

export default NavBar;

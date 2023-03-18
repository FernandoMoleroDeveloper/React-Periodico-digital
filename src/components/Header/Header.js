import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navHistory = useNavigate();
  return (
    <nav className="nav-bar">
      <button className="nav-bar__btn" onClick={() => navHistory(-1)}>
        Back
      </button>
      <div>
        <NavLink className="nav-bar__link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-bar__link" to="/noticias/">
          Noticias
        </NavLink>
        <NavLink className="nav-bar__link" to="/noticias/sport">
          Deportes
        </NavLink>
        <NavLink className="nav-bar__link" to="/noticias/economics">
          Economia
        </NavLink>
        <NavLink className="nav-bar__link" to="/noticias/tech">
          Tecnologia
        </NavLink>
      </div>
      <button className="nav-bar__btn" onClick={() => navHistory(1)}>
        Forward
      </button>
    </nav>
  );
};

export default Header;

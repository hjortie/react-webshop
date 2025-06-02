import { NavLink } from "react-router";
import "./../styles/Header.css";

export const Header = () => {
  return (
    <header>
      <nav className="">
        <ul>
          <li>
            <NavLink to="/">Hem</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Varukorg</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Kassa</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

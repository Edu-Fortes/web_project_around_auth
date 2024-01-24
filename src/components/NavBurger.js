import { useNavigate } from "react-router-dom";

export default function NavBurger({
  logout,
  loggedIn,
  tokenData,
  pageButton,
  removeTokenData,
  children,
}) {
  const navigate = useNavigate();

  function signout() {
    logout();
    pageButton(true);
    removeTokenData();
    localStorage.removeItem("jwt");
    navigate("/signin");
  }

  return (
    <nav className="navburger">
      <ul className="navburger__item">
        <li className="navbar__email">{loggedIn ? tokenData : ""}</li>
        <li>
          {loggedIn ? (
            <button className="navbar__button" onClick={signout}>
              Sair
            </button>
          ) : (
            children
          )}
        </li>
      </ul>
    </nav>
  );
}

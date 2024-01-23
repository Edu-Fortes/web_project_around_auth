import { useNavigate } from "react-router-dom";

export default function Navbar({ logout, tokenData, removeTokenData }) {
  const navigate = useNavigate();

  function signout() {
    logout();
    removeTokenData();
    localStorage.removeItem("jwt");
    navigate("/signin");
  }

  return (
    <nav>
      <ul>
        <li>{tokenData}</li>
        <li>
          <button onClick={signout}>Sair</button>
        </li>
      </ul>
    </nav>
  );
}

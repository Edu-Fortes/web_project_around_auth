import { useNavigate } from "react-router-dom";

export default function Navbar({ logout, tokenData }) {
  const navigate = useNavigate();

  function signout() {
    logout();
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

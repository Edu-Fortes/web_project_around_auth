import { useNavigate } from "react-router-dom";

export default function Navbar({ handleLogout }) {
  const navigate = useNavigate();

  function signout() {
    handleLogout();
    localStorage.removeItem("jwt");
    navigate("/signin");
  }

  return <nav>NavBar</nav>;
}

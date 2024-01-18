import { useNavigate } from "react-router-dom";

function Navbar({ handleLogout }) {
  const navigate = useNavigate();
  function signout() {
    handleLogout();
    localStorage.removeItem("jwt");
    navigate("/signin");
  }
}

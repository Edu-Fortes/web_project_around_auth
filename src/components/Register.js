import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <h1>Página de REGISTRO</h1>
      <p>Já tem uma conta?</p>
      <Link to="/login">Faça Login</Link>
    </>
  );
}

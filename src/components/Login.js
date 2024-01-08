import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Página de LOGIN</h1>
      <Link to="register">Clique aqui para cadastrar</Link>
    </>
  );
}

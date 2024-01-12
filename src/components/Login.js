import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section>
      <h2>Entrar</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input required name="email" type="text" value=""></input>
        <label htmlFor="password">Senha</label>
        <input required name="password" type="password" value=""></input>
      </form>
      <Link to="/register">Clique aqui para cadastrar</Link>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="login">
      <form className="form">
        <fieldset className="form__item">
          <label className="form__title">Entrar</label>
          <input id="email-login" required type="email" placeholder="E-mail" />
          <input
            id="password-login"
            required
            type="password"
            placeholder="Senha"
          />
        </fieldset>
        <fieldset>
          <button>Entrar</button>
        </fieldset>
      </form>

      <Link to="/register">Ainda não é membro? Inscreva-se aqui!</Link>
    </main>
  );
}

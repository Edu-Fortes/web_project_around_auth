import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="auth">
      <div className="auth__container">
        <form className="form">
          <fieldset className="form__item">
            <label className="form__title">Entrar</label>
            <input
              id="email-login"
              className="form__input"
              required
              type="email"
              placeholder="E-mail"
            />
            <input
              id="password-login"
              className="form__input"
              required
              type="password"
              placeholder="Senha"
            />
          </fieldset>
          <fieldset className="form__item">
            <button className="form__button">Entrar</button>
          </fieldset>
        </form>

        <Link to="/register" className="auth__footer">
          Ainda não é membro? Inscreva-se aqui!
        </Link>
      </div>
    </main>
  );
}

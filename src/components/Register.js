import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="login">
      <div className="login__container">
        <form className="form">
          <fieldset className="form__item">
            <label className="form__title">Inscrever-se</label>
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
            <button className="form__button">Inscrever-se</button>
          </fieldset>
        </form>

        <Link to="/login" className="login__footer">
          Já é um membro? Faça o login aqui!
        </Link>
      </div>
    </main>
  );
}

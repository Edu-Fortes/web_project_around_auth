import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await auth.signup({ email, password });
      if (res) {
        navigate("/signin");
      }
    } catch (err) {
      console.log("Error message:", err);
    }
  }

  return (
    <main className="auth">
      <div className="auth__container">
        <form className="form" onSubmit={handleSubmit}>
          <fieldset className="form__item">
            <label className="form__title">Inscrever-se</label>
            <input
              id="email-login"
              className="form__input"
              name="email"
              required
              type="email"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              id="password-login"
              className="form__input"
              name="password"
              required
              type="password"
              placeholder="Senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className="form__item">
            <button
              className="form__button"
              type="submit"
              onSubmit={handleSubmit}
            >
              Inscrever-se
            </button>
          </fieldset>
        </form>

        <Link to="/signin" className="auth__footer">
          Já é um membro? Faça o login aqui!
        </Link>
      </div>
    </main>
  );
}

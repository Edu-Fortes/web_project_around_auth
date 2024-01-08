import logo from "../images/svg/svg_logo.svg";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img
          src={logo}
          alt="Logo da página EUA
          Afora"
        />
      </figure>
    </header>
  );
}

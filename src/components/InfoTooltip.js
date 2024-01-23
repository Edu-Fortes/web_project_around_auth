import { useNavigate } from "react-router-dom";

export default function InfoTooltip({
  isOpen,
  onClose,
  isRight,
  handleLoggin,
}) {
  const navigate = useNavigate();

  function handleCloseButton() {
    if (isRight) {
      onClose();
      handleLoggin();
      navigate("/");
    }
    onClose();
  }

  return (
    <section className={isOpen ? "popup popup_opened" : "popup"}>
      {isRight ? (
        <div>
          <h1>Você está logado</h1>
          <button onClick={handleCloseButton}>Fechar</button>
        </div>
      ) : (
        <div>
          <h1>Algo deu errado</h1>
          <button onClick={handleCloseButton}>Fechar</button>
        </div>
      )}
    </section>
  );
}

import { Container } from "./styles";
import { FiPlusSquare } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

interface IHeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: IHeaderProps) {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="" />
        <button
          className="green-btn"
          onClick={() => {
            openModal();
          }}
        >
          Novo prato{" "}
          <strong>
            <FiPlusSquare size={24} />
          </strong>
        </button>
      </header>
    </Container>
  );
}

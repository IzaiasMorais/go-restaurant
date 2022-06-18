import { FormEvent, useEffect, useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import { useFood } from "../../foodContext";
import { ModalProps } from "../../types";
import { Input } from "../Input";
import Modal from "../Modal";
import { Form } from "./styles";

const ModalEditFood: React.FC<ModalProps> = ({
  isModalOpen,
  onRequestClose,
}) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const { currentFood, updateFood } = useFood();

  useEffect(() => {
    setImage(currentFood.image);
    setName(currentFood.name);
    setDescription(currentFood.description);
    setPrice(currentFood.price);
  }, [currentFood]);

  async function handleEditFood(event: FormEvent) {
    event.preventDefault();

    await updateFood({
      image,
      name,
      price,
      description,
    });

    onRequestClose();
    setImage("");
    setName("");
    setPrice(0);
    setDescription("");
  }

  return (
    <Modal isModalOpen={isModalOpen} onRequestClose={onRequestClose}>
      <Form onSubmit={handleEditFood}>
        <h1>Editar prato</h1>
        <Input
          name="image"
          placeholder="Cole o link da imagem aqui"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          name="price"
          placeholder="Ex: 19.90"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <Input
          name="description"
          placeholder="Descriçao"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit" className="green-btn">
          Confirmar alterações
          <strong>
            <FiPlusSquare size={24} />
          </strong>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
function updateFood(arg0: {
  image: string;
  name: string;
  price: number;
  description: string;
}) {
  throw new Error("Function not implemented.");
}

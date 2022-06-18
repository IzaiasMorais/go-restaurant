import { useEffect } from "react";
import { api } from "../../services/api";
import { Container, ImageBox } from "./styles";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useFood } from "../../foodContext";
import { Foods } from "../../types";
import { formatPrice } from "../../utils/format";

interface FoodProps {
  openEditModal: () => void;
}

export function Food({ openEditModal }: FoodProps) {
  const { foods, loadFood, removeFood } = useFood();

  const { currentFood, setCurrentFood } = useFood();

  async function editFood(id: number) {
    const response = await api.get(`/foods/${id}`);
    const data = response.data;
    setCurrentFood(data);
  }

  async function handleClick(id: number) {
    await editFood(id);
    openEditModal();
  }

  useEffect(() => {
    loadFood();
  }, []);

  async function toggleAvailable(id: number) {
    const r = await api.get<Foods>(`/foods/${id}`);
    const food = r.data;
    const ava = food.available;

    await api.put<Foods>(`/foods/${id}`, {
      ...food,
      available: !ava,
    });
    loadFood();
  }

  return (
    <Container>
      <section>
        {foods.map((food) => (
          <div className="card" key={food.id}>
            <ImageBox isActive={food.available}>
              <img src={food.image} alt={food.name} />
            </ImageBox>

            <div className="description">
              <h1>{food.name}</h1>
              <p>{food.description}</p>
              <strong>{formatPrice(food.price)}</strong>
            </div>

            <footer>
              <div className="buttons">
                <button className="edit" onClick={() => handleClick(food.id)}>
                  <FiEdit3 size={20} />
                </button>
                <button className="delete" onClick={() => removeFood(food.id)}>
                  <AiOutlineDelete size={20} />
                </button>
              </div>

              <div className="switch-container">
                <p>{food.available ? "Disponível" : "Indisponível"}</p>

                <label
                  htmlFor={`available-switch-${food.id}`}
                  className="switch"
                >
                  <input
                    id={`available-switch-${food.id}`}
                    type="checkbox"
                    checked={food.available}
                    onChange={() => toggleAvailable(food.id)}
                  />
                  <span className="slider" />
                </label>
              </div>
            </footer>
          </div>
        ))}
      </section>
    </Container>
  );
}

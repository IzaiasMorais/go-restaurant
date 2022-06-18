import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "./services/api";
import { Foods, FoodInput } from "./types";

interface FoodsProviderProps {
  children: ReactNode;
}

interface FoodsContexData {
  foods: Foods[];
  loadFood: () => Promise<void>;
  removeFood: (id: number) => Promise<void>;
  addFood: (foodInput: FoodInput) => Promise<void>;

  currentFood: Foods;
  setCurrentFood: ({}: Foods) => void;
  updateFood: (foodInput: FoodInput) => Promise<void>;
}

export const FoodsContext = createContext<FoodsContexData>(
  {} as FoodsContexData
);

export function FoodsProvider({ children }: FoodsProviderProps) {
  const [foods, setFoods] = useState<Foods[]>([]);

  async function loadFood() {
    const response = await api.get<Foods[]>("foods");

    const data = response.data.map((food) => ({
      ...food,
    }));

    setFoods(data);
  }

  async function removeFood(id: number) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter((food) => food.id !== id);

    setFoods(foodsFiltered);
  }

  async function addFood(foodInput: FoodInput): Promise<void> {
    try {
      const newFood: Foods = {
        ...foodInput,
        id: foods[foods.length - 1] ? foods[foods.length - 1].id + 1 : 1,
        available: true,
      };
      await api.post("/foods", newFood);

      setFoods([...foods, newFood]);
    } catch (err) {
      console.log(err);
    }
  }

  // EDIT FOOD

  const [currentFood, setCurrentFood] = useState<Foods>({} as Foods);

  async function updateFood(foodInput: FoodInput): Promise<void> {
    try {
      await api.put(`/foods/${currentFood.id}`, {
        ...foodInput,
        id: currentFood.id,
        available: currentFood.available,
      });
      loadFood();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FoodsContext.Provider
      value={{
        foods,
        loadFood,
        removeFood,
        addFood,

        currentFood,
        setCurrentFood,
        updateFood,
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
}

export function useFood(): FoodsContexData {
  const context = useContext(FoodsContext);

  return context;
}

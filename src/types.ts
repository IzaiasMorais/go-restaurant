import { ReactNode } from "react";

export interface Foods {
  available: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface FoodInput {
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  onRequestClose: () => void;
}

import { useState } from "react";

export function useFoodModal() {
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);

  function handleOpenFoodModal() {
    setIsFoodModalOpen(true);
  }

  function handleCloseFoodModal() {
    setIsFoodModalOpen(false);
  }

  

  return {
    isFoodModalOpen,
    handleCloseFoodModal,
    handleOpenFoodModal,
  };
}

import { useState } from "react";

export function useEditModal() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function handleOpenEditModal() {
    setIsEditModalOpen(true);
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false);
  }

  return {
    isEditModalOpen,
    handleCloseEditModal,
    handleOpenEditModal,
  };
}

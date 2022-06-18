import { Food } from "./components/Food";
import { Header } from "./components/Header";
import { useEditModal } from "./components/hooks/useEditModal";
import { useFoodModal } from "./components/hooks/useFoodModal";
import ModalAddFood from "./components/ModalAdd";
import ModalEditFood from "./components/ModalEdit";
import { FoodsProvider } from "./foodContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  const { isFoodModalOpen, handleCloseFoodModal, handleOpenFoodModal } =
    useFoodModal();

  const { isEditModalOpen, handleCloseEditModal, handleOpenEditModal } =
    useEditModal();

  return (
    <div className="App">
      <FoodsProvider>
        <Header openModal={handleOpenFoodModal} />
        <Food openEditModal={handleOpenEditModal} />
        <GlobalStyle />

        <ModalAddFood
          isModalOpen={isFoodModalOpen}
          onRequestClose={handleCloseFoodModal}
        >
          <></>
        </ModalAddFood>

        <ModalEditFood
          isModalOpen={isEditModalOpen}
          onRequestClose={handleCloseEditModal}
        >
          <></>
        </ModalEditFood>
      </FoodsProvider>
    </div>
  );
}

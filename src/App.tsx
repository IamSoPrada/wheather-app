import { Header } from "@/components/common/Header";
import { useContext } from "react";
import { ModalContainer } from "@/components/common/Modals/ModalContainer";
import { UserPositionContext } from "@/contexts/UserPositionContext";
import { Main } from "@/components/common/Main";
import { Footer } from "@/components/common/Footer";
import { AppContainer } from "@/styles";
import { endpoints } from "@/api/routes";

function App() {
  const userPosition = useContext(UserPositionContext);
  return (
    <AppContainer backgroundImageUrl={endpoints.getGeneratedMap(userPosition)}>
      <ModalContainer>
        Это приложение показывает погоду в вашем регионе. Необходимо разрешение
        на доступ к вашим геоданным.
      </ModalContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;

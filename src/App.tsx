import { Header } from "@/components/common/Header";
import { useContext } from "react";
import { UserPositionContext } from "@/contexts/userPositionContext";
import { Main } from "@/components/common/Main";
import { Footer } from "@/components/common/Footer";
import { AppContainer } from "@/styles";
import { routes } from "@/api/routes";

function App() {
  const userPosition = useContext(UserPositionContext);
  return (
    <AppContainer backgroundImageUrl={routes.getGeneratedMap(userPosition)}>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;

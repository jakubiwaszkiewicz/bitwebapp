import NavBar from "./Components/NavBar"
import HomePage from "./Components/HomePage";
import TurniejPage from "./Components/TurniejPage";
import GameJamPage from "./Components/GameJamPage";
import NocGierPage from "./Components/NocGierPage";
import HarmonogramPage from "./Components/HarmonogramPage";
import ONasPage from "./Components/ONasPage";
import PartnerzyPage from "./Components/PartnerzyPage";
import GaleriaPage from "./Components/GaleriaPage";
import WarsztatyPage from "./Components/WarsztatyPage";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <HomePage/>
      <TurniejPage/>
      <GameJamPage/>
      <NocGierPage/>
      <WarsztatyPage/> {/*stronka do obgadania czy bedzie co tam wsadzić*/}
      <HarmonogramPage/>
      <ONasPage/>
      <PartnerzyPage/>
      <GaleriaPage/>
    </div>
  );
}

export default App;

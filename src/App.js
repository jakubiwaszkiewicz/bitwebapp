import NavBar from "./Components/NavBar"
import HomePage from "./Components/HomePage";
import NocGierPage from "./Components/NocGierPage";
import TurniejPage from "./Components/TurniejPage";
import GameJamPage from "./Components/GameJamPage";
import WarsztatyPage from "./Components/WarsztatyPage";
import HarmonogramPage from "./Components/HarmonogramPage";
import ONasPage from "./Components/ONasPage";
import PartnerzyPage from "./Components/PartnerzyPage";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <HomePage/>
      <NocGierPage/>
      <TurniejPage/>
      <GameJamPage/>
      <WarsztatyPage/>
      <HarmonogramPage/>
      <ONasPage/>
      <PartnerzyPage/>
    </div>
  );
}

export default App;

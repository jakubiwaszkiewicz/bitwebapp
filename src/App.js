import NavBar from "./Components/NavBar"
import HomePage from "./Components/HomePage";
import TurniejPage from "./Components/TurniejPage";
import GameJamPage from "./Components/GameJamPage";
import AtrakcjePage from "./Components/AtrakcjePage";
import HarmonogramPage from "./Components/HarmonogramPage";
import ONasPage from "./Components/ONasPage";
import PartnerzyPage from "./Components/PartnerzyPage";
import GaleriaPage from "./Components/GaleriaPage";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <HomePage/>
      <TurniejePage/>
      <GameJamPage/>
      <AtrakcjePage/>
      <HarmonogramPage/>
      <ONasPage/>
      <PartnerzyPage/>
      <GaleriaPage/>
    </div>
  );
}

export default App;

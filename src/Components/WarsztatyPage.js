import Vr from "../pictures/vr.webp";
import "./styles/warsztaty.css"
/*import CardWar from "./CardWar"
import data from "./data.js"*/

export default function WarsztatyPage () {
  /*const Data = data.map((x) => {
    return (
      <CardWar
        key = {x.id}
        item = {x}
      />
    );})*/
  return (
    <section id="warsztaty">
        <div className="war-container">
          <div className="war-title">
            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
            <h3>Warsztaty</h3>
          </div>
          <div className="war-content">
            <p>
              Intryguje Cię świat IT? Chcesz nabrać nowych skilli? Jeśli tak, to idealnie trafiłeś!
              Zapisz się na nasze warsztaty, które organizujemy wspólnie z najlepszymi fachowcami w branży i
              zapewnij sobie wejściówkę do świata IT.
            </p>
          </div>
        </div>
    </section>
  )
}

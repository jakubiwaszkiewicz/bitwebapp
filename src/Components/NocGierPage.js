import Vr from "../pictures/vr.webp"
import "./styles/nocgier.css"

export default function NocGierPage () {
  return (
    <section id="noc-gier">
        <div className="noc-container">
            <div className="noc-title">
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h3>Noc Gier</h3>
            </div>
            <div className="noc-content-cont">
                <div className="noc-cont-text">
                        <p>
                          Nie tylko turniejem LoL-a BIT żyje. Przyjdź do SKS-u i daj się wciągnąć do świata rozrywki.
                          Czekają na Ciebie:
                        </p>
                        <div className="noc-list-frame">
                          <p>
                            <ul className="noc-list">
                              <li>planszówki,</li>
                              <li>konsole,</li>
                              <li>FIFA,</li>
                              <li>TFT i wiele, wiele innych.</li>
                            </ul>
                          </p>
                        </div>
                        <p>
                          Oczywiście nie mogłoby zabraknąć strefy retro,
                          na której znajdziesz kultowe automaty do gier, czy stare konsole. Zdajemy sobie sprawę,
                          że to duża dawka wrażeń jak na jeden raz, dlatego przygotowaliśmy też specjalną strefę chillu.
                          Czy wieczór może być lepszy? Zabierz swoich znajomych i baw się z nami!
                        </p>
                </div>
                <div className="noc-cont-img">
                  <img src={Vr} alt="ziomek z vrem"></img>
                </div>
            </div>
          <hr className="line"/>
        </div>
    </section>
  )
}

import klawa from "../pictures/klawiaturka.jpeg";
import "./styles/turniej.css"

export default function TurniejPage () {
  return (
    <section id="turniej">
        <div className="tur-container">
            <div className="tur-title">
                {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                <h3>Turniej League of Legends</h3>
            </div>
            <div className="tur-content-cont">
                <div className="tur-cont-img">
                    <img src={klawa} alt="ziomek z vrem"></img>
                </div>
                <div className="tur-cont-cont">
                    <div className="tur-cont-text">
                        <p>
                          W nocy z 10 na 11 grudnia
                          Po długich godzinach spędzonych przed komputerem nadszedł czas na finałowe starcie!
                          Już 10 grudnia, w SKS-ie, odbędzie się pojedynek prawdziwych e-sportowych gigantów.
                          Która drużyna okaże się mistrzem turnieju League of Legends? Dowiesz się oglądając naszego streama.
                          Emocje sięgną zenitu!
                        </p>
                    </div>
                    <div className="tur-cont-btn">
                        <div><button className="neon-button-rose"><a href="#">Regulamin</a></button></div>
                        <div><button className="neon-button-rose"><a href="#">Kup bilet</a></button></div>
                        <div><button className="neon-button-rose"><a href="#">Stream</a></button></div>
                    </div>
                </div>
            </div>

            {/*<div className="tur-harmonogram">
              <div className="table">
                <div className="row-left">
                  <div className="table-item"><span className="text-blue">17</span> pażdziernika</div>
                  <div className="table-item"><span className="text-blue">22</span> listopada</div>
                  <div className="table-item"><span className="text-blue">25</span> listopada</div>
                  <div className="table-item"><span className="text-blue">26-27</span> listopada</div>
                </div>

                <div className="row-border"></div>

                <div className="row-right">
                  <div className="table-item">Koniec zapisów</div>
                  <div className="table-item">Finał fazy eliminacyjnej</div>
                  <div className="table-item">I dzień BIT Festival 2021</div>
                  <div className="table-item">II i III dzień BIT Festival 2021</div>
                </div>
              </div>
            </div>*/}


        </div>
    </section>
  )
}

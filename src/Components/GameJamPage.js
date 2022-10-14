import mo from "../pictures/EMOS.png";
import "./styles/gamejam.css"
import "./styles/tabela.css"

export default function GameJamPage () {
  return (
      <section id="game-jam">
          <div className="game-container">
              <div className="game-content-cont">
                  <div className="game-cont-cont">
                      <h3>BIT Jam</h3>
                      <div className="game-cont-text">
                          <p>
                            09 - 10.12.2022
                            Gdy ktoś pyta o silnik, myślisz o Unity? Interesujesz się mechaniką gier?
                            A może po prostu chcesz w końcu zagrać w gierkę, która spełni Twoje oczekiwania?
                            Nie czekaj na kolejne premiery – zacznij tworzyć po swojemu!
                            Na BIT Jamie możesz puścić wodze fantazji. Byle szybko, bo masz tylko 24 godziny.
                            Zbierz maksymalnie 4-osobową ekipę i zapisz się na wydarzenie. Widzimy się 9 grudnia w SKS-ie.
                            PS wiesz, że SUPERHOT też powstało na game jamie?
                          </p>
                      </div>
                      <div className="game-cont-btn">
                          <div><button className="neon-button-blue">Regulamin</button></div>
                          <div><button className="neon-button-blue">Kup bilet</button></div>
                          <div><button className="neon-button-blue">Discord</button></div>
                      </div>
                  </div>
                  <div className="game-cont-img">
                      <img src={mo} alt="ziomek z vrem"></img>
                  </div>
              </div>

              <div className="game-harmonogram">
                <div className="table">
                  <div className="row">
                    <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                    <div className="col-border"></div>
                    <div className="table-item-right">Koniec zapisów</div>
                  </div>

                  <div className="row">
                    <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                    <div className="col-border"></div>
                    <div className="table-item-right">Koniec zapisów</div>
                  </div>

                  <div className="row">
                    <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                    <div className="col-border"></div>
                    <div className="table-item-right">Koniec zapisów</div>
                  </div>
                </div>
              </div>
          </div>
      </section>
  )
}

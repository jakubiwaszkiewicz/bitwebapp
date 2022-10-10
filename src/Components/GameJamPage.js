import mo from "../pictures/EMOS.png";
import "./styles/gamejam.css"
import "./styles/tabela.css"

export default function GameJamPage () {
  return (
      <section id="game-jam">
          <div className="game-container">
              <div className="game-title">
                  {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
                  <h3>BIT Jam</h3>
              </div>
              <div className="game-content-cont">
                  <div className="game-cont-cont">
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

              {/*<div className="game-harmonogram">
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
                    <div className="table-item">Fianał fazy eliminacyjnej</div>
                    <div className="table-item">I dzień BIT Festival 2021</div>
                    <div className="table-item">II i III dzień BIT Festival 2021</div>
                  </div>
                </div>
              </div>*/}
          </div>
      </section>
  )
}

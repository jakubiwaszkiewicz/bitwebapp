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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            In tincidunt vel elit a faucibus. Nunc in metus nec mi condimentum luctus.
                            Praesent iaculis, mi ut scelerisque ultrices, lectus orci lacinia arcu,
                            vel congue lorem nunc feugiat odio. Vestibulum id pellentesque dolor,
                            in ullamcorper nunc. Maecenas nec magna a lorem condimentum varius vitae id eros.
                            Quisque at libero sem. Vestibulum finibus nisl vitae mollis
                            Aenean et tristique enim, mattis maximus erat. Integer tincidunt justo dui,
                            hendrerit eleifend purus dignissim vitae. Nulla aliquam lacinia eros, eu congue mi euismod at.
                        </p>
                            <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla venenatis eget quam eget dictum.
                            Pellentesque rhoncus vulputate vestibulum. In gravida quam at velit faucibus pretium.
                            Ut dictum aliquet justo porttitor ornare. Praesent a dui vel sem bibendum lobortis.
                            Ut posuere, urna vitae pretium venenatis, nisi dui condimentum erat,
                            non sodales ante urna id urna. Quisque ipsum diam, accumsan non ultrices id,
                            facilisis quis ipsum.
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
            </div>
        </div>
    </section>
  )
}

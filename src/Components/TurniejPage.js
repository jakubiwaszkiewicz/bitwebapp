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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            In tincidunt vel elit a faucibus. Nunc in metus nec mi condimentum luctus.
                            Praesent iaculis, mi ut scelerisque ultrices, lectus orci lacinia arcu,
                            vel congue lorem nunc feugiat odio. Vestibulum id pellentesque dolor,
                            in ullamcorper nunc. Maecenas nec magna a lorem condimentum varius vitae id eros.
                            Quisque at libero sem. Vestibulum finibus nisl vitae mollis
                            Aenean et tristique enim, mattis maximus erat. Integer tincidunt justo dui,
                            hendrerit eleifend purus dignissim vitae. Nulla aliquam lacinia eros, eu congue mi euismod at.
                        </p>
                    </div>
                    <div className="tur-cont-btn">
                        <div><button className="neon-button-rose">Regulamin</button></div>
                        <div><button className="neon-button-rose">Kup bilet</button></div>
                        <div><button className="neon-button-rose">Stream</button></div>
                    </div>
                </div>
            </div>

            <div className="tur-harmonogram">
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

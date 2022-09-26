import mo from "../pictures/EMOS.png";
import "./styles/gamejam.css"

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
                        </p>
                            <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla venenatis eget quam eget dictum.
                            Pellentesque rhoncus vulputate vestibulum. In gravida quam at velit faucibus pretium.
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
        </div>
    </section>
  )
}

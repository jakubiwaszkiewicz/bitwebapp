import './styles/homepage.css';
import "./styles/button.css"

export default function HomePage () {
  return (
    <section id="home">
      <div className="home-content appear">
        <div className="home-title">
          <span className="roseNeonText1 NeonText">BEST </span>
          <span className="blueNeonText NeonText">IT </span>
          <span className="roseNeonText2 NeonText">FESTIVAL</span>
        </div>
        <div className="text">8 - 11.12.2022</div>
        <a className="a-button" href="https://www.facebook.com/BITFestival/" target="_blank"><div className="rose-neon-button">Dołącz do wydarzenia</div></a>
      </div>
    </section>
  )
}

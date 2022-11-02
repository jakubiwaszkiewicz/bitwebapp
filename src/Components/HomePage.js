import './styles/homepage.css';

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
        <div><button className="home-neon-button"><a href="https://www.facebook.com/BITFestival/">Dołącz do wydarzenia</a></button></div>
      </div>
    </section>
  )
}

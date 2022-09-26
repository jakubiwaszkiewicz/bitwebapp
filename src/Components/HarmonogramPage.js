import "./styles/harmonogram.css"
import "./styles/tabela.css"

export default function HarmonogramPage () {
  return (
    <section id="harmonogram">
      <div className="harmonogram-container">
        <div className="harmonogram-title">
          <h3>Harmonogram</h3>
        </div>

        <div className="harmonogram-content">
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

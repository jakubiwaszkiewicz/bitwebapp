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
                <div className="noc-cont-img">
                  <img src={Vr} alt="ziomek z vrem"></img>
                </div>
            </div>
        </div>
    </section>
  )
}
/* ///// PROPSY ///// */

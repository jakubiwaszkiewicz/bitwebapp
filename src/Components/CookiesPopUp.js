import "./styles/cookies.css"

export default function CookiesPopUp () {
  function clickHandler () {
    document.getElementById("cookies").classList.toggle("clicked")
  }
  return (
    <div id="cookies">
      <button onClick={clickHandler}>
        <div id="animated-button">
          <div className="btn-bar bar1"></div>
          <div className="btn-bar bar2"></div>
        </div>
      </button>
      <p>jakiś popup zjebany</p>
    </div>
  )
}

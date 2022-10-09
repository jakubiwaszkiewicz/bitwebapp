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
      <p>Ta strona korzysta z plików cookie, aby poprawić jakość obsługi,
          personalizować treści i reklamy oraz analizować ruch.
          Aby uzyskać więcej informacji, zapoznaj się z naszą
          <span> </span>
          <a href="#">polityką prywatności</a>
          {/* /////////////////// podrzucić polityke poprawności //////////////////*/}.
          Zamykając to okienko, wyrażasz zgodę na wykorzystywanie plików cookie i podobnych technologii.</p>
    </div>
  )
}

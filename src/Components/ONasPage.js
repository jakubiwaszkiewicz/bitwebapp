import "./styles/o-nas.css"
import React from "react"
import mo from "../pictures/EMOS.png";

export default function ONasPage () {

    const [count,setCount] = React.useState(1)

    const [styles0, setStyles0] = React.useState(
        {
            display:"none"
        }
    )
    const [styles1, setStyles1] = React.useState(
        {
            display:"flex"
        }
    )
    const [styles2, setStyles2] = React.useState(
        {
            display:"none"
        }
    )

    function add () {
        if (count < 2) {
            setCount(count + 1)
            console.log(count, "add")
        } else if (count === 2) {
            setCount(count - 2)
        }
        if (count === 0) {
            setStyles0({display: "flex"})
            setStyles1({display: "none"})
            setStyles2({display: "none"})
            console.log(count);
        }
        else if (count === 1) {
            setStyles0({display: "none"})
            setStyles1({display: "flex"})
            setStyles2({display: "none"})
            console.log(count);
        } else if (count === 2) {
            setStyles0({display:"none"})
            setStyles1({display:"none"})
            setStyles2({display:"flex"})
            console.log(count);
        }
        console.log(count, "after")
    }

    function subtract () {
        if (count > 0) {
            setCount(count - 1)
        }
        if (count === 0) {
            setCount(count + 2)
        }
        if (count === 0) {
            setStyles0({display:"flex"})
            setStyles1({display:"none"})
            setStyles2({display:"none"})
        }
        if (count === 1) {
            setStyles0({display:"none"})
            setStyles1({display:"flex"})
            setStyles2({display:"none"})
        }
        if (count === 2) {
            setStyles0({display:"none"})
            setStyles1({display:"none"})
            setStyles2({display:"flex"})
        }
    }

    return (
        <section id="o-nas">
            <div className="o-nas--btn-l-container o-nas--btn-cont">
                <div className="o-nas--btn" onClick={subtract}>
                    <div className="o-nas--btn-bar-l o-nas--btn-l-bar1"></div>
                    <div className="o-nas--btn-bar-l o-nas--btn-l-bar2"></div>
                </div>
            </div>
            <div className="o-nas--main-container">
                <div id="o-nas--bit" className="o-nas--content-container" style={styles0}>
                    <h3>BEST IT FESTIVAL</h3>
                    <div className="o-nas--parag-container">
                        <p>
                            BEST IT Festival to trzydniowy festiwal informatyczny z mnóstwem
                            ciekawych atrakcji dla każdego. Wydarzenie podzielone jest na trzy części.
                            <br/>
                            <br/>
                            Część merytoryczna poświęcona będzie panelom dyskusyjnym,
                            szkoleniom i spotkaniom z firmami. Studenci będą mieli okazję do
                            nawiązania kontaktu z potencjalnym pracodawcą oraz poznania rynku pracy w branży IT.
                            <br/>
                            <br/>
                            Podczas części rozrywkowej uczestnicy przeniosą się do świata gier,
                            w którym będą mogli rywalizować w zorganizowanych przez nas turniejach.
                            Nie zabraknie też planszówek, konsol i automatów do gier.
                            <br/>
                            <br/>
                            W części konkursowej Festiwalu, uczestnicy spróbują swoich sił w
                            procesie tworzenia gry komputerowej.
                        </p>
                        <div>
                            <img src={mo} alt="cos tam" />
                        </div>
                    </div>
                </div>
                <div id="o-nas--best" className="o-nas--content-container" style={styles1}>
                    <h3>BEST</h3>
                    <div className="o-nas--parag-container">
                        <p>
                        Board of European Students of Technology to europejska organizacja studencka
                        non-profit zrzeszająca studentów uczelni technicznych.
                        Dążymy do tego, aby pomóc studentom stać się bardziej otwartymi na
                        świat poprzez lepsze zrozumienie kultur europejskich i rozwijanie zdolności
                        do pracy na arenie międzynarodowej.
                        <br/>
                        <br/>
                        Wrocławska grupa BEST-u jest jedną z najbardziej dynamicznie rozwijających
                        się organizacji studenckich na Politechnice Wrocławskiej. Naszymi członkami
                        są młodzi i ambitni ludzie, którzy czas wolny poświęcają na doskonalenie
                        umiejętności potrzebnych do wykonania swoich zadań podczas pracy w grupie.
                        </p>
                        <div>
                            <img src={mo} alt="cos tam" />
                        </div>
                    </div>
                </div>
                <div id="o-nas--organizatorzy" className="o-nas--content-container" style={styles2}>
                    <h3>Organizatorzy</h3>
                    <div>
                        <img src={mo} alt="cos tam" />
                    </div>
                </div>
            </div>
                <div className="n-nas--btn-r-container o-nas--btn-cont">
                    <div className="o-nas--btn" onClick={add}>
                        <div className="o-nas--btn-bar-r o-nas--btn-r-bar1"></div>
                        <div className="o-nas--btn-bar-r o-nas--btn-r-bar2"></div>
                    </div>
                </div>
            <p>{count}</p>
        </section>
    )
}

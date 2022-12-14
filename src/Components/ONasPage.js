import "./styles/o-nas.css"
import React from "react"
import bestLogo from "../pictures/janusz/bestwroclawkolorowe.jpg";
import bitLogo from "../pictures/janusz/czerwone.jpg";
import dataCT from "./dataCT";
import CardCT from "./CardCT";

export default function ONasPage () {

    let [count,setCount] = React.useState(0)

    const [styles0, setStyles0] = React.useState(
        {
            height: "1500px",
            opacity: "1"
        }
    )
    const [styles1, setStyles1] = React.useState(
        {
            height: "0",
            opacity: "0"
        }
    )
    const [styles2, setStyles2] = React.useState(
        {
            height: "0",
            opacity: "0"
        }
    )

    function checkerSubtract (x) {
        if (x === 0) {
            setStyles0({
                animation: "appearLeft 0.5s ease-in-out",
                opacity: "1",
                height: "1500px",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles1({
                animation: "disappearLeft 0.5s ease-in-out",
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles2({
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
        } else if (x === 1) {
            setStyles0({
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles1({
                animation: "appearLeft 0.5s ease-in-out",
                opacity: "1",
                height: "1500px",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles2({
                animation: "disappearLeft 0.5s ease-in-out",
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
        } else if (x === 2) {
            setStyles0({
                animation: "disappearLeft 0.5s ease-in-out",
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles1({
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles2({
                animation: "appearLeft 0.5s ease-in-out",
                opacity: "1",
                height: "1500px",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
        }
    }
    function checkerAdd (x) {
        if (x === 0) {
            setStyles0({
                animation: "appearRight 0.5s ease-in-out",
                opacity: "1",
                height: "1500px",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles1({
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles2({
                animation: "disappearRight 0.5s ease-in-out",
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
        } else if (x === 1) {
            setStyles0({
                animation: "disappearRight 0.5s ease-in-out",
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles1({
                animation: "appearRight 0.5s ease-in-out",
                opacity: "1",
                height: "1500px",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles2({
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
        } else if (x === 2) {
            setStyles0({
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles1({
                animation: "disappearRight 0.5s ease-in-out",
                opacity: "0",
                height: "0",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
            setStyles2({
                animation: "appearRight 0.5s ease-in-out",
                opacity: "1",
                height: "1500px",
                transition: "opacity 0s linear 0.25s, height 0s linear 0.25s"
            })
        }
    }

    function add () {
        let countHelper = count;
        if (countHelper < 2) {
            countHelper++;
            setCount(countHelper)
        } else if (countHelper === 2) {
            countHelper = countHelper - 2;
            setCount(countHelper)
        }
        checkerAdd (countHelper)
    }

    function subtract () {
        let countHelper = count;
        if (countHelper > 0) {
            countHelper--;
            setCount(countHelper)
        } else if (countHelper === 0) {
            countHelper = countHelper + 2;
            setCount(countHelper)
        }
        checkerSubtract (countHelper)
    }

    const DatasCT = dataCT.map((x) => {
        return (
            <CardCT
                key = {x.id}
                item = {x}
            />
        );})


    return (
        <section id="o-nas">
            <div className="o-nas--btn-l-container o-nas--btn-cont appear">
                <div className="o-nas--btn" onClick={subtract}>
                    <div className="o-nas--btn-bar-l o-nas--btn-l-bar1"></div>
                    <div className="o-nas--btn-bar-l o-nas--btn-l-bar2"></div>
                </div>
            </div>
            <div className="o-nas--main-container appear">
                <div id="o-nas--bit" className="o-nas--content-container o-nas--content-container-text" style={styles1}>
                    <h3>Co to BEST IT FESTIVAL?</h3>
                    <div className="o-nas--parag-container">
                        <p>
                            BEST IT Festival to trzydniowy festiwal informatyczny z mn??stwem
                            ciekawych atrakcji dla ka??dego. Wydarzenie podzielone jest na trzy cz????ci.
                            <br/>
                            <br/>
                            Cz?????? merytoryczna po??wi??cona b??dzie panelom dyskusyjnym,
                            szkoleniom i spotkaniom z firmami. Studenci b??d?? mieli okazj?? do
                            nawi??zania kontaktu z potencjalnym pracodawc?? oraz poznania rynku pracy w bran??y IT.
                            <br/>
                            <br/>
                            Podczas cz????ci rozrywkowej uczestnicy przenios?? si?? do ??wiata gier,
                            w kt??rym b??d?? mogli rywalizowa?? w zorganizowanych przez nas turniejach.
                            Nie zabraknie te?? plansz??wek, konsol i automat??w do gier.
                            <br/>
                            <br/>
                            W cz????ci konkursowej Festiwalu, uczestnicy spr??buj?? swoich si?? w
                            procesie tworzenia gry komputerowej.
                        </p>
                        <div>
                            <img src={bitLogo} alt="BEST IT Festival logo" />
                        </div>
                    </div>
                </div>
                <div id="o-nas--best" className="o-nas--content-container o-nas--content-container-text" style={styles2}>
                    <h3>Co to ten BEST???</h3>
                    <div className="o-nas--parag-container">
                        <p>
                        Board of European Students of Technology to europejska organizacja studencka
                        non-profit zrzeszaj??ca student??w uczelni technicznych.
                        D????ymy do tego, aby pom??c studentom sta?? si?? bardziej otwartymi na
                        ??wiat poprzez lepsze zrozumienie kultur europejskich i rozwijanie zdolno??ci
                        do pracy na arenie mi??dzynarodowej.
                        <br/>
                        <br/>
                        Wroc??awska grupa BEST-u jest jedn?? z najbardziej dynamicznie rozwijaj??cych
                        si?? organizacji studenckich na Politechnice Wroc??awskiej. Naszymi cz??onkami
                        s?? m??odzi i ambitni ludzie, kt??rzy czas wolny po??wi??caj?? na doskonalenie
                        umiej??tno??ci potrzebnych do wykonania swoich zada?? podczas pracy w grupie.
                        </p>
                        <div>
                            <img src={bestLogo} alt="BEST Wroclaw logo" />
                        </div>
                    </div>
                </div>
                <div id="o-nas--organizatorzy" className="o-nas--content-container" style={styles0}>
                    <h3>Organizatorzy Best IT Festivalu</h3>
                    <div className="o-nas--cardsCT">
                        {DatasCT}
                    </div>
                </div>
            </div>
                <div className="n-nas--btn-r-container o-nas--btn-cont">
                    <div className="o-nas--btn" onClick={add}>
                        <div className="o-nas--btn-bar-r o-nas--btn-r-bar1"></div>
                        <div className="o-nas--btn-bar-r o-nas--btn-r-bar2"></div>
                    </div>
                </div>
            {/*przycisk z lewej strony jest troche gorzej u??o??ony ni?? ten z prawej (kurwa nie mam poj??cia czemu XD)*/}
        </section>
    )
}

import "./styles/o-nas.css"

export default function ONasPage () {
    /*let btn = 0;*/

    return (
        <section id="o-nas">
            <div className="o-nas--btn-l-container o-nas--btn-cont">
                <div className="o-nas--btn">
                    <div className="o-nas--btn-bar-l o-nas--btn-r-bar1"></div>
                    <div className="o-nas--btn-bar-l o-nas--btn-r-bar2"></div>
                </div>
            </div>
            <div className="o-nas--main-container">
                <div className="o-nas--bit">
                    <h3>BEST IT FESTIVAL</h3>
                    <p>
                        BEST IT Festival to trzydniowy festiwal informatyczny z mnóstwem
                        ciekawych atrakcji dla każdego. Wydarzenie podzielone jest na trzy części.
                        <br/>
                        Część merytoryczna poświęcona będzie panelom dyskusyjnym,
                        szkoleniom i spotkaniom z firmami. Studenci będą mieli okazję do
                        nawiązania kontaktu z potencjalnym pracodawcą oraz poznania rynku pracy w branży IT.
                        <br/>
                        Podczas części rozrywkowej uczestnicy przeniosą się do świata gier,
                        w którym będą mogli rywalizować w zorganizowanych przez nas turniejach.
                        Nie zabraknie też planszówek, konsol i automatów do gier.
                        <br/>
                        W części konkursowej Festiwalu, uczestnicy spróbują swoich sił w
                        procesie tworzenia gry komputerowej.
                        <br/>
                    </p>
                </div>
                <div className="o-nas--best">
                    <h3>BEST</h3>
                    Board of European Students of Technology to europejska organizacja studencka
                    non-profit zrzeszająca studentów uczelni technicznych.
                    Dążymy do tego, aby pomóc studentom stać się bardziej otwartymi na
                    świat poprzez lepsze zrozumienie kultur europejskich i rozwijanie zdolności
                    do pracy na arenie międzynarodowej.
                    <br/>
                    Wrocławska grupa BEST-u jest jedną z najbardziej dynamicznie rozwijających
                    się organizacji studenckich na Politechnice Wrocławskiej. Naszymi członkami
                    są młodzi i ambitni ludzie, którzy czas wolny poświęcają na doskonalenie
                    umiejętności potrzebnych do wykonania swoich zadań podczas pracy w grupie.
                </div>
                <div className="o-nas--organizatorzy">
                    <h3>Organizatorzy</h3>
                </div>
            </div>
                <div className="n-nas--btn-r-container o-nas--btn-cont">
                    <div className="o-nas--btn">
                        <div className="o-nas--btn-bar-r o-nas--btn-r-bar1"></div>
                        <div className="o-nas--btn-bar-r o-nas--btn-r-bar2"></div>
                    </div>
                </div>
        </section>
    )
}

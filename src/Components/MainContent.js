import React from "react";
import { Transition } from 'react-transition-group';
import styles from './styles/maincontent.css'

import classNames from 'classnames';
import HomePage from "./HomePage";
import NocGierPage from "./NocGierPage";
import TurniejPage from "./TurniejPage";
import GameJamPage from "./GameJamPage";
import WarsztatyPage from "./WarsztatyPage";
/*import HarmonogramPage from "./HarmonogramPage";*/
import ONasPage from "./ONasPage";
import PartnerzyPage from "./PartnerzyPage";



export default function MainContent (props) {



    let page
    /*function checker () {
        if (props.prevCount) {
        }
    }*/



    // eslint-disable-next-line default-case
    switch (props.count) {
        case 0:
            page = <HomePage/>
            break;
        case 1:
            page = <NocGierPage/>
            break;
        case 2:
            page = <TurniejPage/>
            break;
        case 3:
            page = <GameJamPage/>
            break;
        case 4:
            page = <WarsztatyPage/>
            break;
        case 5:
            page = <ONasPage/>
            break;
        case 6:
            page = <PartnerzyPage/>
            break;
    }
    return (
        <main>
            {/*{page}*/}
            {page}
            {/*<HomePage/>
            <NocGierPage/>
            <TurniejPage/>
            <GameJamPage/>
            <WarsztatyPage/>
            <HarmonogramPage/>
            <ONasPage/>
            <PartnerzyPage/>*/}
        </main>
    )
}
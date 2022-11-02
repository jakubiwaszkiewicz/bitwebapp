/*import NavBar from "./Components/NavBar"*/
import CookiesPopUp from "./Components/CookiesPopUp";
import MainContent from "./Components/MainContent";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Logo from "./pictures/logo.png";
import Nav from "react-bootstrap/Nav";
import './Components/styles/navbar.css';
import React from "react";

function App() {



    let [count,setCount] = React.useState(0)

    const prevCountRef = React.useRef();

    React.useEffect(() => {
        //assign the ref's current value to the count Hook
        prevCountRef.current = count;
    }, [count]);

      return (
            <div className="app">
                <nav id="nav-bar">
                    <Navbar bg="black" expand="lg" fixed="top" variant="dark">
                        <Container>
                            <Nav.Link onClick={() => setCount(0)}>
                                <img
                                    src={Logo}
                                    width="auto"
                                    height="50"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Nav.Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                <Nav className="justify-content-end fs-5">
                                    <Nav.Link onClick={() => setCount(1)}>Noc Gier</Nav.Link>
                                    <Nav.Link onClick={() => setCount(2)}>Turniej</Nav.Link>
                                    <Nav.Link onClick={() => setCount(3)}>BIT Jam</Nav.Link>
                                    <Nav.Link onClick={() => setCount(4)}>Warsztaty</Nav.Link>
                                    <Nav.Link onClick={() => setCount(5)}>O nas</Nav.Link>
                                    <Nav.Link onClick={() => setCount(6)}>Partnerzy</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </nav>
                <MainContent
                    count = {count}
                    prevCount = {prevCountRef.current}
                />
                <CookiesPopUp/>
            </div>
      );
}

export default App;

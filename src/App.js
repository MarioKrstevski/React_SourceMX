import React from "react";
import MultipleNumbers from "./components/MultipleNumbers";
import ArrayNumbers from "./components/ArrayNumbers";
import ArrayNames from "./components/ArrayNames";
import ArrayObjects from "./components/ArrayObjects";
import Counter from "./components/Counter";
import "./styles/App.css";
import ArraysWithKeys from "./components/ArraysWithKeys";
import Incrementor from "./components/Incrementor";
import ImePrezime from "./components/ImePrezime";
import InputField from "./components/InputField";
import ConditionalRendering from "./morecomponents/ConditionalRendering";
import Tweet from "./morecomponents/Tweet";
import Switch from "./morecomponents/Switch";
import LoadingData from "./morecomponents/LoadingData";
import ParentChild from "./evenmorecomponents/ParentChild";
import Ref from "./evenmorecomponents/Ref";
import Effect from "./evenmorecomponents/Effect";
import CreditCardExample from "./evenmorecomponents/CreditCardExample";
import Axios from "./evenmorecomponents/Axios";
import UILibrary from "./evenmorecomponents/UILibrary";
import { useState } from "react";
import Context from "./themostcomponents/Context";
import { ThemeContext } from "./contexts/themeContext";
import CustomHooks from "./themostcomponents/CustomHooks";
import Tabs from "./exercises/Tabs";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useFetchPokemon } from "./hooks/useFetchPokemon";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

// React.createElement() === JSX
// Rules:
// must return only one element
// must use className prop for adding class
// attributes in html, here are props
// props on a component can be used inside the component as function arguments
// Every component has only one argument, props which is an object
// Inside props we can find every properties that we passed as key value pairs
// if we are using arrays we must have a key prop

// function App() {
//   return (
//     <>

//     </>
//   );
// }

function Home() {
  return <div style={{ border: "1px solid red" }}>home</div>;
}
function Aboutus() {
  return <div style={{ border: "1px solid red" }}>aboutus</div>;
}

function Contact() {
  return (
    <div onc style={{ border: "1px solid red" }}>
      contact
    </div>
  );
}

function Pokemons() {
  let params = useParams();
  const { pokemon } = useFetchPokemon();
  let navigate = useNavigate();

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Pokemons</h1>
      <ul>
        {pokemon.slice(0, 5).map((p) => (
          <li key={p.name}> {p.name}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        go to home
      </button>
    </div>
  );
}

function Apps() {
  return (
    <BrowserRouter>
      <div>
        <div className="menu">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="about">Aboutus</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="contact">Contact</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="pokemons">Pokemons</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div style={{ backgroundColor: "pink", height: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<Aboutus />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pokemons" element={<Pokemons />}>
              <Route path=":pokemonId" element={<Pokemons />} />
            </Route>
            <Route path="*" element={<div> 404 </div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function App() {
  // const [theme, setTheme] = useState('light')

  return (
    <div className="App-header">
      {/* <MultipleNumbers />
      <ArrayNumbers />
      <ArrayNames />
      <ArrayObjects /> */}
      {/* <ArraysWithKeys /> */}
      {/* <Counter />
      <Counter />
      <Counter /> */}
      {/* <Incrementor startingFrom={20} />
      <Incrementor startingFrom={-55} /> */}
      {/* <ImePrezime name={"Mario"} surname={'Krstevski'} age={26}/> */}
      {/* <InputField /> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <Tweet /> */}
      {/* <Switch></Switch> */}

      {/* <ParentChild /> */}

      {/* <Ref></Ref> */}
      {/* <Effect /> */}

      {/* <CreditCardExample /> */}
      {/* <Axios /> */}

      {/* <UILibrary /> */}

      {/* <LoadingData></LoadingData> */}

      {/* <ThemeContext.Provider value={'light'}>
        <Context />
      </ThemeContext.Provider> */}

      {/* <CustomHooks /> */}

      <Tabs
        startingTab={1}
        tabsArray={["Mario", "Stefan", "Tamara"]}
        tabContentsArray={[
          <div> Ova ke se pokaze prvo </div>,
          "CF Stefan",
          "CF Tamara",
        ]}
      />
    </div>
  );
}

export default App;
